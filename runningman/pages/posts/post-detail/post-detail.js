 
var app = getApp();
Page({
  data: {
    
  },
  onLoad: function(options) {
    var task_id = options.task_id;
    this.data.currentaskId = task_id;
    var that = this;
    wx.request({
      url: 'http://localhost:8080/going/superadmin/goindex',  //本地服务器地址
      data: {
        task_id: task_id
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
    var postsCollected = wx.getStorageSync("posts_collected");
    // ----问题所在位置----
    if (postsCollected) {  //postsCollected为真的情况，在缓存中存在
      // debugger;
      var postCollected = postsCollected[task_id];  // 读取其中一个缓存状态
      // this.setData.postsCollected = postsCollected;
      // 需要对获取到的状态做判断，如果没有点击过收藏按钮的文章，缓存中是没有这个数据的，所有会提示collected undefined
      if (!postCollected) {
        this.setData({
          collected: false
        })
      } else {
        this.setData({
          collected: postCollected
        })
      }
    } else {
      //postsCollected不存在，先创建
      var postsCollected = {};
      //当前的postsCollected也不存在
      postsCollected[task_id] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }

  },
  bookTap: function (e) {
    var that =this;
    var task_id = e.currentTarget.dataset.task_id;
    wx.navigateTo({
      url: '../book/book?task_id=' + task_id
    })
  },
  
  onCollectionTap: function(event) {
    this.getPostsCollectedSyc();
    // this.getPostsCollectedAsy();
  },

  getPostsCollectedAsy: function() {
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentaskId];
        //收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentaskId] = postCollected;
        that.showToast(postsCollected, postCollected);
      },
    })
  },

  getPostsCollectedSyc: function() {
    var that = this;
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[that.data.currentaskId];
    //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[that.data.currentaskId] = postCollected;
    that.showToast(postsCollected, postCollected);
  },

  showModal: function(postsCollected, postCollected) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章？' : '取消收藏？',
      showCancel: "true",
      cancelText: "取消",
      cancelColor: "#333",
      confirmText: "确认",
      confirmColor: "#405f80",
      success: function(res) {
        if (res.confirm) {
          //更新文章是否缓存值
          wx.setStorageSync('posts_collected', postsCollected)
          //更新数据绑定变量，从而实现切换图片
          that.setData({
            collected: postCollected
          })
        }
      }
    })
  },
  showToast: function(postsCollected, postCollected) {
    var that = this;
    //更新文章是否缓存值
    wx.setStorageSync('posts_collected', postsCollected)
    //更新数据绑定变量，从而实现切换图片
    that.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 1000
    })

  },

  onShareTap: function(event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到 QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success: function(res) {
        //res.cancel用户是否点击了取消按钮
        //res.tapIndex数组元素的序号，从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消？' + res.cancel + '现在无法实现分享功能'
        })
      }
    })
  }

})