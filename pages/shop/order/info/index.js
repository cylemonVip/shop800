// mallcart.js
var _function = require('../../../../utils/functionData');
var app = getApp()
Page({
    data:{
        this_order_id:0,
        oinfo:[],
        glo_is_load:true
    },
    //查看物流
    wuliu_info_bind:function(){
        var that = this;
        if(that.data.oinfo.express_code== '' || that.data.oinfo.express_code== null){
            wx.showModal({
                title: '提示',
                content: '对不起，该订单暂无物流信息',
                showCancel:false
            });
            return false;
        }else{
            wx.navigateTo({
                url: '../../../shop/mallwuliu/index?oid=' + that.data.oinfo.id
            })
        }
    },
    onLoad:function(options){
        var that = this
        var order_id = options.oid;
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
                        _function.getOrderInfo(wx.getStorageSync("utoken"), that.data.this_order_id, that.initgetOrderInfoData, that)
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
    //支付
    order_go_pay_bind:function(){
        var order_id = this.data.this_order_id
        wx.redirectTo({
            url: '../../../shop/orderpay/index?order_id=' + order_id
        })
    },
    //评论
    order_go_comment_bind:function(){
        var order_id = this.data.this_order_id
        wx.redirectTo({
            url: '../comment/index?order_id=' + order_id
        })
    },
    //确认收货
    order_go_shouhuo_bind:function(){
        var that = this
        var order_id = this.data.this_order_id
        wx.showModal({
            title: '提示',
            content: "确认收货吗?",
            success:function(res){
                if(res.confirm == true){
                    _function.shouhuoOrderInfo(wx.getStorageSync("utoken"),order_id,that.initshouhuoOrderInfoData,this)
                }
            }
        })
    },
    initshouhuoOrderInfoData:function(data){
        var that = this
        if(data.code == 1){
             _function.getOrderInfo(wx.getStorageSync("utoken"),that.data.this_order_id,that.initgetOrderInfoData,this)
        }else if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success: function () {
                    app.getNewToken(function (token) {
                        wx.hideToast();
                        _function.getOrderInfo(wx.getStorageSync("utoken"), that.data.this_order_id, that.initgetOrderInfoData, that)
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