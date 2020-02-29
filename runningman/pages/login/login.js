var app = getApp();
Page({
  data:{
    user_id: undefined,
    password: '',
    checkUrl:"http://127.0.0.1:8080/going/superadmin/checkuser"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },

  formSubmit:function(e){
    console.log("提交表单");
    console.log(e);
    var user_id = e.detail.value.user_id;
    var password = e.detail.value.password;
    if (user_id.length < 1) {
      util.alertViewWithCancel("提示","请输入用户名",function(){
        console.log("点击确定按钮");
      },"true");
      return;
    }
    if (password.length < 1) {
      util.alertView("提示","请输入密码",function(){
        console.log("点击确定按钮");
      });
      return;
    }

    var that = this;
    var formData = e.detail.value;
    var checkUrl = that.data.checkUrl;
    wx.request({
      url: checkUrl,
      data: JSON.stringify(formData),
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var user_id = res.data.success.user_id;
        var toastText = "账号未注册" ;
        if (user_id!=null) {
          toastText = "操作成功！";
          console.log(user_id);
          app.globalData.user_id=user_id;
          wx.switchTab({
            url: '../posts/post?user_id=' + user_id,
          })
        }
        wx.showToast({
          title: toastText,
          icon: '',
          duration: 2000
        })
        
      }
    })

  },
  //注册
  register:function(e){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  //忘记密码
  forgetpwd:function(){
    console.log("忘记密码");
  }

})