// mallcart.js
var _function = require('../../../utils/functionData');
var app = getApp()
Page({
    data:{
        this_order_id:0,
        oinfo:[],
        submitIsLoading:false,
        buttonIsDisabled:false,
        glo_is_load:true
    },
    onLoad:function(options){
        var that = this
        var order_id = options.order_id;
        that.setData({
          this_order_id:order_id,
        })
      //请求订单详情
      _function.getOrderInfo(wx.getStorageSync("utoken"),that.data.this_order_id,that.initgetOrderInfoData,this)
    },
    initgetOrderInfoData:function(data){
        var that = this
        if(data.code == 1){
             that.setData({
                 oinfo:data.info,
                 glo_is_load:false
             })
        }else if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success: function () {
                    app.getNewToken(function (token) {
                        wx.hideToast();
                        _function.getOrderInfo(wx.getStorageSync("utoken"), that.data.this_order_id, that.initgetOrderInfoData, that);
                    })
                }
            });
        }else if(data.code == 5){
            wx.showModal({
                title: '提示',
                content: data.info,
                showCancel:false
            })
            return false;
        }
    },
    //开始支付
    pay_confirmOrder:function(){
        var that = this
        that.setData({
            buttonIsDisabled: true,
            submitIsLoading:true
        })
        _function.makeOrderPayData(wx.getStorageSync("utoken"),that.data.this_order_id,that.initMakeOrderPayData,this)
    },
    initMakeOrderPayData:function(data){
        var that = this
        that.setData({
            buttonIsDisabled: false,
            submitIsLoading:false
        })
        if(data.code == 1){
             wx.requestPayment({
            'timeStamp': data.info.timeStamp,
            'nonceStr': data.info.nonceStr,
            'package': data.info.package,
            'signType': 'MD5',
            'paySign': data.info.paySign,
            'success':function(res){
               
            },
            'fail':function(res){
                
            },
            'complete':function(){
                that.setData({
                    disabled: false
                })
                //支付完成 跳转订单列表
                wx.redirectTo({
                    url: '../order/list/index'
                })
            }
        })
        }else if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success: function () {
                    app.getNewToken(function (token) {
                        wx.hideToast();
                        _function.getOrderInfo(wx.getStorageSync("utoken"), that.data.this_order_id, that.initgetOrderInfoData, that);
                    })
                }
            });
        }else if(data.code == 5){
            wx.showModal({
                title: '提示',
                content: data.info,
                showCancel:false
            })
            return false;
        }
    }
})