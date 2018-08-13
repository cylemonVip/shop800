function getShopUserQuanlist() {
  var data = {
    "code": 1,
    "info": [
      {
        "id": "755",
        "user_id": "754100",
        "quan_id": "202",
        "quan_jiner": "30",
        "quan_begin_time": "2017/07/16",
        "quan_end_time": "2017/07/27",
        "quan_add_time": "2017年07月16日",
        "quan_status": "0",
        "quan_name": "促销商品1",
        "quan_shuoming": "促销商品1使用说明",
        "q_class": "",
        "q_text": "未使用"
      },
      {
        "id": "756",
        "user_id": "754100",
        "quan_id": "202",
        "quan_jiner": "50",
        "quan_begin_time": "2017/07/16",
        "quan_end_time": "2017/07/27",
        "quan_add_time": "2017年07月16日",
        "quan_status": "0",
        "quan_name": "促销商品1",
        "quan_shuoming": "促销商品1使用说明",
        "q_class": "",
        "q_text": "未使用"
      }
    ]
  };
  return data;
}

function getShopQuanLingqu() {
  var data = {
    "code": 1,
    "info": "对不起，您已领取过该优惠券"
  };

  return data;
}

module.exports = {
  getShopUserQuanlist: getShopUserQuanlist,
  getShopQuanLingqu: getShopQuanLingqu
}