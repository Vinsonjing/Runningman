  var app = getApp()

Page({
  data: {
    tulist:[],
  },

  onLoad: function () {
    
    
  },
  fresh:function(){
    var user_id = app.globalData.user_id;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/going/superadmin/listbyuser',  //本地服务器地址
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
          tulist: res.data.tulist,
        })
      },
      fail: function (res) {
        console.log("失败");
      }
    })
  },
  navigateDetail: function (e) {
    console.log(e);
    var task_id = e.currentTarget.dataset.task_id;
    wx.navigateTo({
      url: '../../posts/post-detail/post-detail?task_id=' + task_id
    })
  },
  onShow:function(){
    var that=this;
   this.fresh();
  },
  alter: function (e) {
    console.log(e);
    var task_id = e.currentTarget.dataset.task_id;
    wx.redirectTo({
      url: 'alterup/alterup?task_id=' + task_id
    })
  },
  delete:function(e){
    var that = this;
    console.log(e);
    console.log(that.data);
    var task_id = e.currentTarget.dataset.task_id;
    var task_name = e.currentTarget.dataset.task_name;
    console.log(task_id)
    wx.showModal({
      title: '提示',
      content: '确定要删除任务：[' + task_name + ']吗？',
      success: function (sm) {
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
          wx.request({
            url: "http://127.0.0.1:8080/going/superadmin/removetask",
            data: { task_id: task_id },
            method: 'GET',
            success: function (res) {
              var result = res.data.success
              var toastText = "删除成功！";
              if (result != true) {
                toastText = "删除失败" + res.data.errMsg;
              } else {
                that.fresh();
              }
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000
              });
            }
          })
        }
      }
    })
  }
})