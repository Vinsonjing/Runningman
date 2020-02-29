 var app = getApp();
Page({
  data: {
    avatar:"../../images/avatar/1.png"
  },
  fresh:function(){
    var user_id = app.globalData.user_id;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/going/superadmin/getuserbyid',  //本地服务器地址
      data: {
        user_id: user_id
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          user: res.data.user,
        })
      },
      fail: function (res) {
        console.log("失败");
      }
    })
  },
  onShow: function () {
    var that = this;
    that.fresh();
  },
  onLoad: function () {
   
  },

  user: function () {
    wx.navigateTo({
      url: 'user/user',
    })
  },
  wait: function () {
    wx.navigateTo({
      url: 'myUp/myUp',
    })
  },
  receive: function () {
    wx.navigateTo({
      url: 'receive/receive',
    })
  },
  changeAvatar: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res);
        var avatarSrc = res.tempFilePaths
        console.log(avatarSrc);
      }
    })
  }, 
  logout:function(){
    wx.redirectTo({
      url: '../login/login'
    })
  }
})