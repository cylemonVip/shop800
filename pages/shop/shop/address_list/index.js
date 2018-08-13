var _function = require('../../../../utils/functionData.js');
const Mock = require('mock/mock.js');
var app = getApp()
Page({
    data:{
        userInfo:{},
        allAddress:[]
    },
    //加载完成后 读取用户信息
    onShow:function(){
        var that = this
        //获取用户收货地址
        // _function.getUserAddressList(wx.getStorageSync("utoken"),that.initGetUserAddressListData,this)
        var data = Mock.getUserAddressList();
        this.initGetUserAddressListData(data);
    },
    initGetUserAddressListData:function(data){
      console.log("initGetUserAddressListData data = " + JSON.stringify(data));
        var that = this
        if(data.code == 1){
            that.setData({
                allAddress:data.info
            })
        }else if(data.code == 2){
            wx.showToast({
                title: '登陆中',
                icon: 'loading',
                duration: 10000,
                success: function () {
                    app.getNewToken(function (token) {
                        wx.hideToast();
                        _function.getUserAddressList(wx.getStorageSync("utoken"), that.initGetUserAddressListData, that);
                    })
                }
            });
        }
    },
    //添加新地址
    addrss_bind:function(e){
        var aid = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../address_add/index?aid=' + aid
        })
    },
    //获取微信地址
    get_weixin_address_bind:function(e){
        console.log(wx.getSystemInfo.SDKVersion);
        if (!wx.chooseAddress) {
            wx.showModal({
                title: '提示',
                content: '对不起，当前微信版本不支持该功能',
                showCancel:false
            });
            return false;
        }
        wx.chooseAddress({
            success: function (res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
            }
        })
    },
    //下拉刷新
    onPullDownRefresh:function(){
        _function.getUserInfo(wx.getStorageSync("utoken"),this.initGetUserInfoData,this)
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },1000)
    }
})