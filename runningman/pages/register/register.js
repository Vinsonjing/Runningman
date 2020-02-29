 Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_id: undefined,
    password: '',
    nick_name: '',
    identification: '',
    addUrl: "http://127.0.0.1:8080/going/superadmin/adduser"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    var that = this;
    var formData = e.detail.value;
    var url = that.data.addUrl;
    console.log(formData)
    console.log(that.data)
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
        var toastText = "注册失败" ;
        if (result == true) {
          toastText =  "操作成功！";
          if (formData.user_id != undefined) {
            wx.redirectTo({
              url: '../login/login',
            })
          }
        }
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        });
        
      }
    })
  }
})
