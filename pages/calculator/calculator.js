// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },

  // 输入框的input事件
  getInput(e){
    // console.log("getInput:",e);
    this.setData({
      num: parseInt(e.detail.value)
    })
  },

  addOne(e) {
    // console.log("addOne:",e);
    const one=e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + one
    })
  }
})