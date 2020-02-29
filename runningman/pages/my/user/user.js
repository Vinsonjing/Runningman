var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  identify: function (e) {
    var that = this;
    var user_id = e.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: '../../identification/identification?user_id=' + user_id
    })
  },
  alterinfor: function (e) {
    var that = this;
    var user_id = e.currentTarget.dataset.user_id;
    wx.navigateTo({
      url: '../personalPage/personalPage?user_id=' + user_id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})