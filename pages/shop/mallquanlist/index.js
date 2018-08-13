// mallcart.js
var _function = require('../../../utils/functionData');
const Mock = require('mock/mock.js');
var app = getApp()
Page({
    data:{
        quan_list:[],
        glo_is_load:true
    },
    onLoad:function(){
      var that = this;
      // _function.getShopUserQuanlist(wx.getStorageSync("utoken"),-1,that.initgetShopUserQuanlistData,that);
      var data = Mock.getShopUserQuanlist();
      this.initgetShopUserQuanlistData(data);
    },
    initgetShopUserQuanlistData:function(data){
      console.log("initgetShopUserQuanlistData = " + JSON.stringify(data));
      var that = this;
      if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success:function(){
                    app.getNewToken(function(token){
                        _function.getShopUserQuanlist(wx.getStorageSync("utoken"),-1,that.initgetShopUserQuanlistData,that);
                    })
                }
            })
            return false;
      }
      that.setData({
          quan_list:data.info,
          glo_is_load:false
      });
    },
    //下拉刷新
    onPullDownRefresh:function(){
      var that = this
      _function.getShopUserQuanlist(wx.getStorageSync("utoken"),-1,that.initgetShopUserQuanlistData,that);
      setTimeout(()=>{
        wx.stopPullDownRefresh()
      },1000)
    },
})