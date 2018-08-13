function getUserAddressList() {
  var data = {
    "code": 1,
    "info": [
      {
        "id": "684",
        "consignee": "sad",
        "email": "",
        "country": "中国",
        "province": "四川省",
        "city": "成都市",
        "district": "龙泉驿区",
        "address": "sdasfadsf",
        "mobile": "18782434195",
        "tel": "",
        "is_default": "0",
        "is_check": ""
      },
      {
        "id": "684",
        "consignee": "sad",
        "email": "",
        "country": "美国",
        "province": "加州省",
        "city": "加州市",
        "district": "贫民区",
        "address": "addn2iz1",
        "mobile": "12345321",
        "tel": "",
        "is_default": "0",
        "is_check": ""
      }
    ]
  };

  return data;
}

module.exports = {
  getUserAddressList: getUserAddressList
}