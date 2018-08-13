// mallcart.js
var _function = require('../../../utils/functionData');
const app = getApp();
const requestUtil = require('../../../utils/requestUtil');
const _DuoguanData = require('../../../utils/data');
Page({
    data:{
        cart_list:[],
        logistics_list:[],
        all_g_number:0,
        all_price:0,
        all_g_price:0,
        all_g_yunfei:0,
        is_show_address:false,
        address_list:null,
        this_address_id:0,
        this_address_info:'请选择',
        btn_submit_disabled:false,
        glo_is_load:true,
        quan_data:[],
        quan_dai_id:0,
        quan_dai_jiner:0,
        quan_dai_text:'使用代金券',
        wx_address_info:'',
        is_show_logistics_list:false,
        is_show_logistics:false,
        logistics_choose:'',
        ship_address:''
    },
    go_select_dai_bind:function(){
        wx.navigateTo({
            url: '../mallquanselect/index'
        });
    },
    onLoad:function(options){
        if(options.quan_id != undefined){
            this.setData({
                quan_dai_id:options.quan_id
            });
        }
    },
    onShow:function(){
        var that = this;
      //请求购物车信息
        requestUtil.get(_DuoguanData.duoguan_host_api_url + '/index.php?s=/addon/DuoguanShop/Api/getCartList.html', { data:'is_mallsure' }, (info) => {
          console.log(info)
          that.initgetCartListData(info)
        }, {});
      
    },
    initgetCartListData:function(data){
      var that = this

      data.manjian_jiner = parseFloat(data.manjian_jiner)
      that.setData({
          quan_data:data,
          cart_list:data.glist,
          all_g_number:data.all_g_number,
          all_g_price:data.all_g_price,
          all_price: data.all_g_price,
          all_g_yunfei:data.all_g_yunfei,
          ship_address: data.ship_address
          
      });
      _function.getAddressList(wx.getStorageSync("utoken"),that.initgetAddressListData,that);

    },
    //提交订单
    order_formSubmit:function(e){
        var that = this;
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000,
            mask:true
        });
        that.setData({
            btn_submit_disabled:true
        });
        var order_info = e.detail.value;
        order_info.wx_address = that.data.wx_address_info;
        order_info.quan_id = that.data.quan_dai_id;
        order_info.manjian_id = that.data.quan_data.mianjian_id;
        order_info.form_id = e.detail.formId;
        order_info.version = '1.0.5'
        order_info.logistics_list_length = that.data.logistics_list.length
        _function.orderPost(wx.getStorageSync("utoken"),order_info,that.initorderPostData,that)
    },
    initorderPostData:function(data){
        var that = this;
        wx.hideToast();
        that.setData({
            btn_submit_disabled:false
        });
        if(data.code == 1){
             //跳转支付
             var order_id = data.info;
             wx.redirectTo({
                url: '../orderpay/index?order_id=' + order_id
             })
        }else if(data.code == 2){
            wx.showModal({
                title: '提示',
                content: '登陆超时，将重新获取用户信息',
                showCancel:false,
                success:function(res){
                    app.getNewToken(function(token){
                        that.setData({
                            local_global_token:token
                        });
                        _function.getCartList(wx.getStorageSync("utoken"),that.initgetCartListData,that);
                    })
                }
            })
        }else if(data.code == 5){
            wx.showModal({
                title: '提示',
                content: data.info,
                showCancel:false
            })
            return false;
        }
    },
    //选择快递
    select_logistics_list:function(){
      var that = this 
      that.setData({
        is_show_logistics_list:true
      })
    },
    radioChange:function(event){
      var that= this
      that.setData({
        is_show_logistics:true,
        logistics_choose: that.data.logistics_list[event.detail.value],
        is_show_logistics_list: false,
        all_g_price: (that.data.all_price)*1 + (that.data.logistics_list[event.detail.value].send_condition)*1
      })
    },
    //隐藏快递列表
    hide_logistics_list:function(){
      var that = this
      that.setData({
        is_show_logistics_list:false
      })
    },
    //选择收货地址
    select_address_bind:function(){
        var that = this;
        if (!wx.chooseAddress) {
            that.setData({
                is_show_address:true
            })
            return false;
        }
        wx.chooseAddress({
            success: function (res) {
                that.setData({
                    wx_address_info:res
                })

                requestUtil.get(_DuoguanData.duoguan_host_api_url + '/index.php?s=/addon/DuoguanShop/Api/getLogisticsList.html', { data: res, all_price:that.data.all_price}, (info) => {
                  that.setData({
                    logistics_list:info
                  })
                },{});
                
            }
        })
    },
    initgetAddressListData:function(data){
        var that = this
        if(data.code == 1){
             that.setData({
                 address_list:data.info
             });
             if(data.info != null){
                var datas = data.info;
                var address_str = '请选择收货地址';
                for(var i=0;i<datas.length;i++){
                    if(datas[i].id ==that.data.this_address_id){
                        datas[i].is_check = 'active';
                    }else{
                        datas[i].is_check = ''
                    }
                }
                that.setData({
                    address_list:datas
                });
             }
             //读取单个优惠券
             _function.getUserOneQuanInfo(wx.getStorageSync("utoken"),that.data.quan_dai_id,that.initgetUserOneQuanInfotData,that);
        }else if(data.code == 2){
            wx.showModal({
                title: '提示',
                content: '登陆超时，将重新获取用户信息',
                showCancel:false,
                success:function(res){
                    app.getNewToken(function(token){
                        that.setData({
                            local_global_token:token
                        })
                        _function.getCartList(wx.getStorageSync("utoken"),that.initgetCartListData,that)
                    })
                }
            })
        }
    },
    initgetUserOneQuanInfotData:function(data){
        var that = this;
        if(data.code == 1){
            data.info.quan_jiner = parseFloat(data.info.quan_jiner);
            that.setData({
                quan_dai_text:data.info.quan_name,
                quan_dai_jiner:data.info.quan_jiner
            });
        }else if(data.code == 2){
            wx.showModal({
                title: '提示',
                content: '登陆超时，将重新获取用户信息',
                showCancel:false,
                success:function(res){
                    app.getNewToken(function(token){
                        _function.getCartList(wx.getStorageSync("utoken"),that.initgetCartListData,that)
                    })
                }
            })
        }else{
            that.setData({
                quan_dai_text:'使用代金券',
                quan_dai_jiner:0,
                quan_dai_di:0
            });
        }
        that.setData({
            glo_is_load:false
        })
    },
    //确认选择地址
    chose_address_bind:function(e){
        var that = this;
        var aid = e.currentTarget.id
        that.setData({
            this_address_id : aid
        })
        var datas = that.data.address_list;
        var address_str = '';
        var this_wx_address_info = {};
        for(var i=0;i<datas.length;i++){
            if(datas[i].id == aid){
                datas[i].is_check = 'active';
                this_wx_address_info.userName = datas[i].consignee;
                this_wx_address_info.telNumber = datas[i].mobile;
                this_wx_address_info.provinceName = datas[i].province;
                this_wx_address_info.cityName = datas[i].city;
                this_wx_address_info.countyName = datas[i].district;
                this_wx_address_info.detailInfo = datas[i].address;
            }else{
                datas[i].is_check = ''
            }
        }
        that.setData({
            address_list:datas,
            wx_address_info:this_wx_address_info
        })
        that.select_address_close_bind()
    },
    //关闭收货地址
    select_address_close_bind:function(){
        var that = this
        that.setData({
            is_show_address:false
        })
    },
    //添加收货地址
    index_item_bind:function(){
        wx.navigateTo({
            url: '../../user/shop/address_add/index'
        })
    }
})