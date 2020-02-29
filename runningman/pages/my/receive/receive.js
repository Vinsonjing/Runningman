 var app = getApp()

Page({
  data: {
    tulist: [],
  },
fresh:function(){
  var user_id = app.globalData.user_id;
  var that = this;
  wx.request({
    url: 'http://localhost:8080/going/superadmin/listbyreceive',  //本地服务器地址
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
  onShow: function () {
    var that = this;
    this.fresh();
  },
  navigateDetail: function (e) {
    console.log(e);
    var task_id = e.currentTarget.dataset.task_id;
    wx.navigateTo({
      url: '../../posts/post-detail/post-detail?task_id=' + task_id
    })
  }
})