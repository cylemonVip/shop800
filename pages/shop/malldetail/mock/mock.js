function getGoodsData() {
  var data = {
    "code": 1,
    "info": {
      "g_name": "商品名称1",
      "g_img": "https://xrs.ixiaochengxu.cc/2017-07-16_596b81dfc24e7.png",
      "g_photo": [
        "https://xrs.ixiaochengxu.cc/2017-07-16_596b81dfc24e7.png"
      ],
      "g_description": "商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介",
      "g_content": "<p>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</p>",
      "is_sale": "1",
      "is_hot": "1",
      "is_best": "1",
      "click_count": "0",
      "g_number": "9999",
      "shop_price": "99.00",
      "vip_price": "88.00",
      "is_order": "1",
      "sale_number": "8888",
      "is_promote": "0",
      "promote_price": "0.00",
      "market_price": "199.00",
      "promote_status": 0,
      "promote_start_date": "",
      "promote_end_date": "",
      "goods_properties": "",
      "goods_specification": "",
      "cmlist": null
    }
  }
  return data;
}

function getShopConfig()
{
  var data = {
    "code": 1,
    "info": {
      "kefu_contant": "",
      "ship_address": "",
      "is_gnumber_limit": 1,
      "yunfei_limit": 0,
      "yunfei_base": 0
    }
  };

  return data;
}

function addGoodsCart() {
  var data = {
    "code": 1,
    "info": "添加购物车成功"
  };

  return data;
}



module.exports = {
  getGoodsData: getGoodsData,
  getShopConfig: getShopConfig,
  addGoodsCart: addGoodsCart
}