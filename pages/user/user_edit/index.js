var _function = require('../../../utils/functionData.js');
const Mock = require('mock/mock.js');
var app = getApp()
Page({
    data:{
        userInfo:{}
    },
    //加载完成后 读取用户信息
    onLoad:function(){
        var that = this
        //获取用户信息
        // _function.getUserInfo(wx.getStorageSync("utoken"),that.initGetUserInfoData,this)
        var data = Mock.getUserInfo();
        this.initGetUserInfoData(data);
    },
    initGetUserInfoData:function(data){
      console.log("initGetUserInfoData = " + JSON.stringify(data));
        var that = this
        if(data.code == 1){
            that.setData({
                userInfo:data.info
            })
        }else if(data.code == 2){
            wx.showModal({
                title: '提示',
                content: '登陆超时，将重新获取用户信息',
                showCancel:false,
                success:function(res){
                    app.getNewToken(function(token){
                        _function.getUserInfo(wx.getStorageSync("utoken"),that.initGetUserInfoData,this)
                    })
                }
            })
        }
    },
    formSubmit:function(e){
        var that = this
        _function.postUserInfo(wx.getStorageSync("utoken"),e.detail.value,that.initPostUserInfoData,this) 
    },
    initPostUserInfoData:function(data){
        if(data.code == 1){
            wx.showToast({
                title: '资料更新成功',
                icon: 'success',
                duration: 2000
            })
        }else if(data.code == 2){
            wx.showModal({
                title: '提示',
                content: '登陆超时，将重新获取用户信息',
                showCancel:false,
                success:function(res){
                    app.getNewToken(function(token){
                        wx.redirectTo({
                            url: 'index?_'+ Date.now()
                        })
                    })
                }
            })
        }
    },
    //下拉刷新
    onPullDownRefresh:function(){
        _function.getUserInfo(wx.getStorageSync("utoken"),this.initGetUserInfoData,this)
        setTimeout(()=>{
            wx.stopPullDownRefresh()
        },1000)
    }
})