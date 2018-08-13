//malldetail.js
var _function = require('../../../utils/functionData');
var WxParse = require('../../../wxParse/wxParse.js');
var Mock = require('mock/mock.js');
var app = getApp()
Page({
  data: {
      goods_info:[],
      goods_specification:[],
      wxParseData:'',
      shop_config:[],
      this_goods_id:0,
      this_g_nav:1,
      is_add_cart_view:false,
      cart_default_number:1,
      goods_attr_select:{},
      btn_add_cart_disabled:false,
      glo_is_load:true,
      indicatorDots:false,
      swiperCurrent: 0,
      scrollTop: 0,
      floorstatus: true,
      shop_attr_price:[]
    },
    goTop: function (e) {
        this.setData({
            scrollTop: 0
        })
    },
    swiperChange: function(e){
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
    goHome:function(e){
        wx.switchTab({
            url: '../mall/mall'
        })
    },
    onLoad:function(options){
      var that = this
        var post_id = options.sid;
        that.setData({
          this_goods_id:post_id,
        })
      //请求商品详情
        var goodsData = Mock.getGoodsData();
        that.initGoodsInfoData(goodsData);
      // _function.getGoodsInfo(post_id,that.initGoodsInfoData,this)
      // _function.getShopConfig(that.initshopConfigData,this)
        var data = Mock.getShopConfig();
        that.initshopConfigData(data);
    },
    initGoodsInfoData:function(data){
      console.log("data = " + JSON.stringify(data));
      var that = this;
      that.setData({
          goods_info:data.info,
          goods_specification:data.info.goods_specification
      })
      WxParse.wxParse('article', 'html', data.info.g_content, that,0)
    },
    initshopConfigData:function(data){
        this.setData({
          shop_config:data.info,
          glo_is_load:false
        })
    },
    goods_nav_bind:function(e){
        var that = this
        var this_target = e.target.id;
        that.setData({
            this_g_nav:this_target
          })
    },
    //显示加入购物车
    bind_goods_add_cart:function(){
      var that=this
      that.setData({
        is_add_cart_view:true
      })
    },
    //隐藏购物车
    add_cart_close_bind:function(){
        var that=this
        that.setData({
          is_add_cart_view:false
        })
    },
    //减少数量
    bind_cart_number_jian:function(){
        var that = this
        var this_default_number = parseInt(that.data.cart_default_number)
        if(this_default_number > 1){
            that.setData({
              cart_default_number:this_default_number - 1
            })
        }else{
          that.setData({
            cart_default_number:1
          })
        }
    },
    //增加数量
    bind_cart_number_jia:function(){
      var that = this
      var this_default_number = parseInt(that.data.cart_default_number)
      that.setData({
        cart_default_number:this_default_number + 1
      })
    },
    //加入购物车
    goods_add_cart:function(){
      var that = this;
      wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000,
            mask:true
        });
      that.setData({
        btn_add_cart_disabled:true
      });
      // _function.addGoodsCart(wx.getStorageSync("utoken"),that.data.this_goods_id,that.data.cart_default_number,that.data.goods_attr_select,that.initAddCartData,this)
      var data = Mock.addGoodsCart();
      this.initAddCartData(data);
    },
    initAddCartData:function(data){
      console.log("initAddCartData = " + JSON.stringify(data));
        var that = this;
        wx.hideToast();
        that.setData({
          btn_add_cart_disabled:false
        });
        if(data.code == 1){
              wx.showModal({
                title: '提示',
                content: "添加购物车成功! 点确定进入下单页面,取消留在该页面",
                success:function(res){
                  if(res.confirm == true){
                    wx.redirectTo({
                      url: '../mallcart/mallcart'
                    })
                  }else{
                      that.setData({
                        is_add_cart_view:false
                     })
                  }
                }
            })
        }else if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success: function () {
                    app.getNewToken(function (token) {
                        that.setData({ this_page: 1, buttonIsDisabled: false });
                        wx.hideToast();
                        _function.getGoodsInfo(that.data.this_goods_id, that.initGoodsInfoData, that)
                    })
                }
            });
        }else if(data.code == 5){
            wx.showModal({
                title: '提示',
                content: data.info,
                showCancel:false
            })
            that.setData({
                //is_add_cart_view:false
            })
            return false;
        }
    },
    //联系客服
    bind_contant_kefu:function(){
      var that = this
      wx.makePhoneCall({
        phoneNumber: that.data.shop_config.kefu_contant
      })
    },
    //进入购物车
    bind_go_cart:function(){
        wx.redirectTo({
          url: '../mallcart/mallcart'
        })
    },
    set_close:function(){
      this.setData({
        is_add_cart_view:false
      })
    },
    //属性选择
    select_attr_bind:function(e){
      var that = this
      var this_attr_id = e.currentTarget.id
      var this_attr_name = e.currentTarget.dataset.type
      var datas = that.data.goods_specification
      var this_spec_price = 0;
      var a_datas = that.data.goods_attr_select
      var g_datas = that.data.goods_info
      var shop_attr_price = that.data.shop_attr_price
      var this_shop_price = 0
      var all_shop_price = 0 
      for(var i=0;i<datas.length;i++){
          if(datas[i].name == this_attr_name){
                  a_datas[datas[i].name] = null
              for(var j=0;j<datas[i].values.length;j++){
                  datas[i].values[j].ischeck = false
                  if(datas[i].values[j].id == this_attr_id){
                    datas[i].values[j].ischeck = true
                    a_datas[datas[i].name] = this_attr_id
                    if(datas[i].values[j].format_price > 0){
                      this_shop_price = datas[i].values[j].format_price
                    }
                  }
              }
              shop_attr_price[i] = this_shop_price
              that.setData({
                shop_attr_price: shop_attr_price
              })
          }
          if (that.data.shop_attr_price[i]){  
            all_shop_price = that.data.shop_attr_price[i]*1 + all_shop_price*1
            all_shop_price = all_shop_price.toFixed(2);
          }
      }
      
      if (all_shop_price > 0){
        g_datas.shop_price = all_shop_price
      }
      that.setData({
        goods_specification:datas,
        goods_attr_select:a_datas,
        goods_info:g_datas
      })
    },
    //下拉刷新
    onPullDownRefresh:function(){
      var that = this
      that.setData({
          this_page:1
      })
      //请求商品详情
      // _function.getGoodsInfo(that.data.this_goods_id,that.initGoodsInfoData,this)
      var goodsData = Mock.getGoodsData();
      that.initGoodsInfoData(goodsData);
      setTimeout(()=>{
        wx.stopPullDownRefresh()
      },1000)
    },
    //滚动加载
    indexscrolltolower:function(){
      var that = this
      that.setData({
          hasMore:true
      })
      var this_target = this.data.this_items
      _function.getReplyList(that.data.this_post_id,that.data.this_page + 1,that.data.pagesize,that.initReplyLoadData,this)
    },
    initReplyLoadData:function(data){
      var that = this
      if(data.info == null){
          that.setData({
            is_scroll_y:false,
          })
        }else{
            if(data.info.length >= that.data.pagesize){
                that.setData({
                    is_scroll_y:true,
                })
            }else{
                that.setData({
                    is_scroll_y:false,
                })
            }
          that.setData({
            reply_items:that.data.reply_items.concat(data.info),
            this_page:that.data.this_page + 1
          })
        }
    },
    onShareAppMessage: function () {
      var that = this
      return {
        title: that.data.goods_info.g_name,
        desc: '',
        path: '/pages/shop/malldetail/malldetail?sid='+ that.data.this_goods_id
      }
    },
})