const app = getApp();
const requestUtil = require('../../../utils/requestUtil');
const _DuoguanData = require('../../../utils/data');
var mock = require('mock/mock.js');
Page({
  data: {
    swiper_data:[],
    index_data:[],
    glo_is_load:true,
    shareInfo:''
  },
  detail: function (e) {
      wx.navigateTo({
          url: '../malldetail/malldetail?sid=' + e.currentTarget.id
      })
  },
  mall_list_bind:function(e){
      wx.navigateTo({
          url: '../malllist/malllist?cid=' + e.currentTarget.id
      })
  },
  mall_list_bind2: function (e) {
    wx.navigateTo({
      url: '../malllist/malllist?pid=' + e.currentTarget.id
    })
  },
  goods_search_bind:function(e){
      var s_key = e.detail.value;
      wx.navigateTo({
          url: '../malllist/malllist?keywords=' + s_key
      });
  },
  shop_ad_bind: function (e) {
    var that = this;
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    });
  },
  swiper_top_bind:function(e){
      var that = this;
      wx.navigateTo({
          url: e.currentTarget.dataset.url
      });
  },
  shop_saoma_bind:function(){
      wx.scanCode({
          success: (res) => {
          }
      });
  },
  //读取首页数据
  onLoad:function(){
      var that = this;
      // var list = mock.getMallListData();
      // that.setData({ index_data: list, glo_is_load: false });
      // that.getShareInfo();
      requestUtil.get(_DuoguanData.duoguan_host_api_url + '/index.php?s=/addon/DuoguanShop/Api/getIndexDataList', {}, (info) => {
        console.log("info : " + JSON.stringify(info));
          that.setData({ index_data: info, glo_is_load:false});
          that.getShareInfo();
      }, this, { isShowLoading: false });
  },
  go_quan_info_bind:function(e){
      var that = this;
      wx.navigateTo({
          url: '../mallquan/index?qid=' + e.currentTarget.id
      });
  },
  getShareInfo:function(){
      //获取分享信息
      // requestUtil.get(_DuoguanData.duoguan_get_share_data_url, { mmodule: 'duoguanshop' }, (info) => {
      //   console.log("info = " + JSON.stringify(info));
      //     this.setData({ shareInfo:info});
      // });
    var info = mock.getShareInfo();
    this.setData({ shareInfo: info });
  },
  onShareAppMessage: function () {
      var that = this;
      return {
          title: that.data.shareInfo.title,
          desc: that.data.shareInfo.desc,
          path: 'pages/shop/mall/mall'
      }
  },
  //下拉刷新
  onPullDownRefresh: function () {
      this.onLoad();
      setTimeout(() => {
          wx.stopPullDownRefresh()
      }, 1000)
  },
  //进入购物车
  bind_go_cart: function () {
    wx.navigateTo({
      url: '../mallcart/mallcart'
    })
  },
})