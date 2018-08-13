function getShopQuanInfo() {
  var data = {
    "code": 1,
    "info": {
      "id": "202",
      "token": "gh_02d53536c799",
      "q_type": "1",
      "q_isopen": "1",
      "q_name": "促销商品1",
      "q_begin_time": "2017-07-16 22:50",
      "q_end_time": "2017-07-27 22:50",
      "q_xiaofei_jiner": "0.00",
      "q_dai_jiner": 99,
      "q_diyong_jiner": "0.00",
      "q_limit_num": "50",
      "q_limit_user_num": "1",
      "q_shuoming": "促销商品1使用说明",
      "q_order": "1",
      "addtime": "1500216872"
    }
  };
  return data;
}

function getShopQuanLingqu(){
  var data = {
    "code": 1,
      "info": "对不起，您已领取过该优惠券"
  };

  return data;
}

module.exports = {
  getShopQuanInfo: getShopQuanInfo,
  getShopQuanLingqu: getShopQuanLingqu
}