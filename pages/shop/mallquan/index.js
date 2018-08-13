var _function = require('../../../utils/functionData');
const Mock = require('mock/mock.js');
var app = getApp();
Page({
  data:{
    shop_quan_info:[],
    glo_is_load:true,
    this_quan_d_img:_function.duoguanData.duoguan_host_api_url+'/temp_pic/shop/privilege.jpg'
  },
  onLoad:function(options){
      var that = this;
      var qid = options.qid;
      // _function.getShopQuanInfo(qid,that.initgetShopQuanInfoData,that);
      var data = Mock.getShopQuanInfo();
      this.initgetShopQuanInfoData(data);
  },
  initgetShopQuanInfoData:function(data){
    console.log("initgetShopQuanInfoData = " + JSON.stringify(data));
      var that = this;
      that.setData({
        shop_quan_info:data.info,
        glo_is_load:false
      });
  },
  quan_lingqu_bind:function(){
    var that = this;
    wx.showToast({
        title: '领取中',
        icon: 'loading',
        duration: 10000,
        mask:true
    });
    // _function.getShopQuanLingqu(wx.getStorageSync("utoken"),that.data.shop_quan_info.id,that.initgetShopQuanLingquData,that);
    var data = Mock.getShopQuanLingqu();
    this.initgetShopQuanLingquData(data);
  },
  initgetShopQuanLingquData:function(data){
    console.log("initgetShopQuanLingquData = " + JSON.stringify(data));
    var that = this;
    console.log(data.info);
    if(data.code == 1 || data.code == 5){
        wx.hideToast();
         wx.showModal({
            title: '提示',
            content: data.info,
            showCancel:false
        });
    }else if(data.code == 2){
        wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success:function(){
                    app.getNewToken(function(token){
                        _function.getShopQuanLingqu(wx.getStorageSync("utoken"),that.data.shop_quan_info.id,that.initgetShopQuanLingquData,that);
                    })
                }
            });
    }
  },
  onShareAppMessage: function () {   
    var that = this
    return {
      title: that.data.shop_quan_info.q_name,
      desc: that.data.shop_quan_info.q_shuoming,
      path: 'pages/shop/mallquan/index'
    }
  }
});