// pages/identification/identification.js
var app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {

    modifyUrl: "http://localhost:8080/going/superadmin/identifyyuser"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user_id = app.globalData.user_id;
    console.log(user_id);
    var that = this;
    wx.request({
      url: "http://localhost:8080/going/superadmin/getuserbyid",
      data: {
        user_id: user_id
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var user = res.data.user;
        if (user == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: 'none',
            duration: 2000
          });
        } else {
          that.setData({
            user: user
          });
        }
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

  },

  formSubmit: function (e) {
    console.log(e);
    var that = this;
    var user_id = app.globalData.user_id;
    var formData = e.detail.value;
    console.log(formData);
    formData.user_id = user_id;
    console.log(formData.user_id);
    var url = that.data.modifyUrl;
    wx.request({
      url: url,
      data: JSON.stringify(formData),
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var result = res.data.success;
        var toastText = "操作失败" + res.data.errMsg;
        if (result == true) {
          toastText = "操作成功！" ;
          wx.switchTab({
            url: '../my/my?user_id=' + user_id
          })
        }
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        })
      }
    })
  }
})