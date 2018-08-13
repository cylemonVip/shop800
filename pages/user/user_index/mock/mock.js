function getUserMenu() {
  var data = {
    "code": 1,
    "info": [
      {
        "name": "DuoguanShop",
        "text": "微商城",
        "menus": [
          {
            "name": "user_shop_order_index",
            "text": "我的订单",
            "link": "pages/shop/order/list/index",
            "icon": ""
          },
          {
            "name": "user_shop_address_index",
            "text": "收货地址",
            "link": "pages/shop/shop/address_list/index",
            "icon": ""
          },
          {
            "name": "user_shop_quan_list",
            "text": "我的优惠券",
            "link": "pages/shop/mallquanlist/index",
            "icon": ""
          }
        ],
        "isshow": true
      }
    ]
  };
  return data;
}

function getUserInfo(){
  var data = {
    "code": 1,
      "info": {
      "id": "438546",
        "uid": "754100",
          "is_vip": "0",
            "u_name": "CcccccccccccccccccccY",
              "u_phone": "18782434195",
                "u_address": "地址",
                  "u_jieshao": "你明星民工名",
                    "vip_btime": "0",
                      "vip_etime": "0",
                        "u_balance": "0.00",
                          "u_sex": "1",
                            "is_bbs_manage": "0",
                              "is_shop_vip": "1",
                                "is_shop_shopper": "0",
                                  "u_phone_true": "",
                                    "u_phone_status": "0",
                                      "app_copy_right":" Lemon Factory coyp right",
                                        "user_id": "754100",
                                          "user_headimg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKxjyWbcGFQh02Waau5bLnYuEE3oSQo7MauOusaX2YDJVWXf5NKtVbTTqj3z2TCJ3U9rIbxexriaxQ/0",
                                            "user_nickname": "CcccccccccccccccccccY"
    }
  };

  return data;
}

module.exports = {
  getUserMenu: getUserMenu,
  getUserInfo: getUserInfo
}