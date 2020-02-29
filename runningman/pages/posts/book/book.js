var myData = require("../../../utils/data")
var app = getApp();
Page({
  data: {
    address_province: myData.provinceData(),
    address_city: myData.cityData(),
    proviIndex: 0,
    cityIndex: 0,
    img_url: [],
    task_content: '',
    task_id: undefined,
    task_reward: '',
    tempertel: '',
    address_from: '',
    address_to: '',
    addUrl: "http://127.0.0.1:8080/going/superadmin/addorder",
  },
  onLoad: function (options) {
    var task_id = options.task_id;
    console.log(task_id)
    var user_id = app.globalData.user_id;
    console.log(user_id)
    var that = this;
    wx.request({
      url: 'http://localhost:8080/going/superadmin/goindut', //本地服务器地址
      data: {
        task_id: task_id,
        user_id: user_id
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          tulist: res.data.tulist
        })
      },
      fail: function (res) {
        console.log("失败");
      }
    })

  },
  alterinfor:function(e){
    var that = this;
    var user_id = e.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: '../../identification/identification?user_id=' + user_id
    })
  },
  //发布按钮事件
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    var task_id = e.currentTarget.dataset.task_id;
    console.log(e);
    formData.task_id = task_id;
    formData.user_id = app.globalData.user_id;
    console.log(formData);
    var url = that.data.addUrl;
    wx.request({
      url: url,
      data: JSON.stringify(formData),
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var result = res.data.success
        var toastText = "账号已被注册";
        if (result == true) {
          toastText = "操作成功！";
          wx.redirectTo({
            url: '../../my/receive/receive',
          })
        }
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        })
      }
    })
    var that = this;
    var user_id = wx.getStorageSync('userid')
    wx.showLoading({
      title: '上传中',
    })
    that.img_upload()
  },
  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {

        if (res.tempFilePaths.length > 0) {

          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }

          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })

        }

      }
    })
  },

  //图片上传
  img_upload: function () {
    let that = this;
    let img_url = that.data.img_url;
    let img_url_ok = [];
    //由于图片只能一张一张地上传，所以用循环
    for (let i = 0; i < img_url.length; i++) {
      wx.uploadFile({
        //路径填你上传图片方法的地址
        url: 'http://wechat.homedoctor.com/Moments/upload_do',
        filePath: img_url[i],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          console.log('上传成功');
          //把上传成功的图片的地址放入数组中
          img_url_ok.push(res.data)
          //如果全部传完，则可以将图片路径保存到数据库
          if (img_url_ok.length == img_url.length) {
            var userid = wx.getStorageSync('userid');
            var content = that.data.content;
            wx.request({
              url: 'http://wechat.homedoctor.com/Moments/adds',
              data: {
                user_id: userid,
                images: img_url_ok,
                content: content,
              },
              success: function (res) {
                if (res.data.status == 1) {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提交成功',
                    showCancel: false,
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateTo({
                          url: '/pages/myUp/myUp',
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        },
        fail: function (res) {
          console.log('上传失败')
        }
      })
    }
  }
})