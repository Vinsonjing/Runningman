 var app = getApp()

 Page({
   data: {
     //小程序总会读取data对象来做数据绑定，这个动作称为动作A
     //而这个动作A的执行，是在onLoad事件执行之后发生的
     region: '东城区',
     now: '',
     // nav 初始化
   },

   changeRegion: function(e) {
     this.setData({
       region: e.detail.value[2]
     })
   },
   fresh: function() {
     var that = this;
     wx.request({
       url: 'http://localhost:8080/going/superadmin/listtu', //本地服务器地址
       method: 'GET',
       header: {
         'content-type': 'application/json' //默认值
       },
       success: function(res) {
         console.log(res);
         that.setData({
           tulist: res.data.tulist,
         })
       },
       fail: function(res) {
         console.log("失败");
       }
     })
   },
   onLoad: function() {

   },
   onShow: function() {
     var that = this;
     that.fresh();
   },
   navigateDetail: function(e) {
     console.log(e);
     var task_id = e.currentTarget.dataset.task_id;
     wx.navigateTo({
       url: 'post-detail/post-detail?task_id=' + task_id
     })
   },
   bookTap: function(e) {
     var task_id = e.currentTarget.dataset.task_id;
     wx.navigateTo({
       url: 'book/book?task_id=' + task_id
     })
   },

   onSwiperTap: function(event) {
     var task_id = event.target.dataset.task_id;
     wx.navigateTo({
       url: 'post-detail/post-detail?task_id=' + task_id
     })
   }
 })