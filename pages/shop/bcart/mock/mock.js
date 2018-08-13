function getCartList() {
  var info = {
    "code": 1,
    "info": {
      "glist": [
        {
          "id": "7057",
          "user_id": "754100",
          "goods_id": "5706",
          "goods_name": "商品名称1",
          "goods_price": "88.00",
          "goods_number": "1",
          "goods_attr": "",
          "goods_attr_id": "",
          "is_true": "1",
          "goods_img": "https://xrs.ixiaochengxu.cc/2017-07-16_596b81dfc24e7.png",
          "is_checked": false
        },
        {
          "id": "7148",
          "user_id": "754100",
          "goods_id": "5707",
          "goods_name": "商品名称2",
          "goods_price": "8889.00",
          "goods_number": "1",
          "goods_attr": "",
          "goods_attr_id": "",
          "is_true": "1",
          "goods_img": "https://xrs.ixiaochengxu.cc/2017-07-16_596b830d185d2.png",
          "is_checked": false
        }
      ],
      "all_g_number": 2,
      "all_g_price": 976,
      "all_g_yunfei": 0,
      "is_true_mianjian": 1,
      "mianjian_id": "203",
      "manjian_jiner": "99.00",
      "manjian_text": "促销商品2",
      "ship_address": ""
    }
  };

  return info;
}

function editCartList()
{
  var info = {
    "code": 1,
      "info": "购物车更新成功"
  };

  return info;
}

module.exports = {
  getCartList: getCartList,
  editCartList: editCartList
}