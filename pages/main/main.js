// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 底部导航控制显示数据
    footControl:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 底部导航点击事件
   */
  onFootClick:function (event) {
    // 获取底部导航的按钮数据 并控制页面显示 
    this.setData({
      footControl: event.target.dataset.type
    })

  }
})