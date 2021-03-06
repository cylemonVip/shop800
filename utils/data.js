var DUOGUAN_HOST_URL = "https://www.clmy.net.cn:9080";
var user_token = "gh_02d53536c799";
var app_config_version = 1;
var dg_ext = wx.getExtConfigSync();
if (dg_ext && dg_ext.host) {
  DUOGUAN_HOST_URL = dg_ext.host;user_token = dg_ext.token;app_config_version = dg_ext.version;
}
module.exports = {
  duoguan_host_api_url:DUOGUAN_HOST_URL,
  duoguan_user_token: user_token,
  duoguan_share_info:'',
  duoguan_config_version:app_config_version,
  duoguan_error_log_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/errorLog.html",
  duoguan_get_share_data_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/getShareInfo.html",
  duoguan_auth_login_url:DUOGUAN_HOST_URL + "/index.php/home/weixin/slogin",
  duoguan_Launch_log_url:DUOGUAN_HOST_URL + "/index.php?s=/home/index/logs_on",
  duoguan_get_user_menu_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/getUserMenuList.html",
  duoguan_swiper_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanSwiper/DuoguanSwiper/dataApi.html",
  duoguan_cms_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/DuoguanCms/dataApi.html",
  duoguan_cms_cate_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/DuoguanCms/dataApiCate.html",
  duoguan_cms_read_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/DuoguanCms/dataApiRead.html",
  duoguan_comment_add_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/Comment/dataApiCommentAdd.html",
  duoguan_comment_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/Comment/dataApiCommentList.html",
  duoguan_comment_good_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanCms/Comment/dataApiCommentGood.html",
  duoguan_user_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/getUserInfo.html",
  duoguan_user_info_post_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/editUserInfo.html",
  duoguan_get_user_paylog_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/getUserPaylog.html",
  duoguan_make_paydata_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanUser/Api/makePayData.html",
  duoguan_user_address_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/getAddressList.html",
  duoguan_user_address_add_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/addAddress.html",
  duoguan_user_address_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/getAddressInfo.html",
  duoguan_user_address_del_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/delAddress.html",
  duoguan_get_user_postlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/getUserPostList.html",
  duoguan_get_user_orderlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/getUserOrderList.html",
  duoguan_delete_user_order_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/deleteUserOrder.html",
  duoguan_shouhuo_user_order_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/shouhuoUserOrder.html",
  duoguan_post_comment_order:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/postComment.html",
  duoguan_get_bbs_cate_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/getCateList.html",
  duoguan_get_bbs_gonggao_id:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/getGongGaoId.html",
  duoguan_get_bbs_cate_two_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/getCateTwoList.html",
  duoguan_get_bbs_postlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/getPostList.html",
  duoguan_check_bbs_manage_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/checkManage.html",
  duoguan_bbs_post_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/bbsPost.html",
  duoguan_imgupload_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/imgUpload.html",
  duoguan_post_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/postInfo.html",
  duoguan_post_replyadd_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/replyAdd.html",
  duoguan_post_replylist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/replyList.html",
  duoguan_post_xihuan_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/postXihuan.html",
  duoguan_post_report_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/postReport.html",
  duoguan_post_del_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/Weiba/Api/postDel.html",
  duoguan_get_shop_cate_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getCateList.html",
  duoguan_get_good_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getGoodsList.html",
  duoguan_get_good_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getGoodsInfo.html",
  duoguan_add_good_cart_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/addGoodsCart.html",
  duoguan_get_cart_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getCartList.html",
  duoguan_del_cart_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/delCartList.html",
  duoguan_edit_cart_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/editCartList.html",
  duoguan_get_shop_config_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getConfig.html",
  duoguan_shop_get_quan_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getShopQuanInfo.html",
  duoguan_shop_get_quan_lingqu_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/ShopQuanLingqu.html",
  duoguan_shop_get_user_quanlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getUserQuanlist.html",
  duoguan_shop_get_user_quan_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/Api/getOneQuanInfo.html",
  duoguan_shop_get_psorder_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/psOrderInfo.html",
  duoguan_shop_get_psuser_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/PsUserInfo.html",
  duoguan_shop_get_ps_confrim_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/psConfrim.html",
  duoguan_shop_get_wuliu_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/getShopWulinInfo.html",
  duoguan_order_post_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/postOrder.html",
  duoguan_order_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/orderInfo.html",
  duoguan_make_order_pay_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/makePay.html",
  duoguan_get_address_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanShop/OrderApi/getAddressList.html",
  duoguan_make_tuan_order_pay_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/makePay.html",
  duoguan_get_tuan_cate_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/getCateList.html",
  duoguan_get_tuan_good_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/getGoodsList.html",
  duoguan_get_tuan_good_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/getGoodsInfo.html",
  duoguan_get_tuan_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/getTuanInfo.html",
  duoguan_add_tuan_good_cart_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/addGoodsCart.html",
  duoguan_get_tuan_cart_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/Api/getCartList.html",
  duoguan_order_tuan_post_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/postOrder.html",
  duoguan_tuan_order_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/orderInfo.html",
  duoguan_tuan_get_wuliu_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/getTuanWulinInfo.html",
  duoguan_get_user_tuan_orderlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/getUserOrderList.html",
  duoguan_delete_user_tuan_order_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/deleteUserOrder.html",
  duoguan_shouhuo_user_tuan_order_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanTuan/OrderApi/shouhuoUserOrder.html",
  duoguan_card_my_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/getMyCard.html",
  duoguan_card_top_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/top.html",
  duoguan_card_user_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/getUserCard.html",
  duoguan_card_post_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/postMyCard.html",
  duoguan_card_change_phone_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/postChangePhone.html",
  duoguan_card_view_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/getCardViewInfo.html",
  duoguan_card_get_list_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/getMyCardList.html",
  duoguan_get_user_phone_code_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanBcard/Api/sendPphoneCode.html",
  duoguan_h_gethotellist_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/getHotelList.html",
  duoguan_h_gethoteldata_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/getHotelData.html",
  duoguan_h_gethotelevadata_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/getHotelEvaluation.html",
  duoguan_h_getroomlist_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/getHotelRoomList.html",
  duoguan_h_makeorder_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/makeOrder.html",
  duoguan_h_makecomment_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/makeComment.html",
  duoguan_h_getorderlist_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/getOrderList.html",
  duoguan_h_deleteorder_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/deleteOrder.html",
  duoguan_h_cancelorder_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/cancelOrder.html",
  duoguan_h_payHotelorder_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/orderPay.html",
  duoguan_h_uploadimg_url:DUOGUAN_HOST_URL +"/index.php?s=/addon/DgHotel/DgHotelApi/saveImg.html",
  duoguan_dish_get_dish_config:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getDishConfig.html",
  duoguan_dish_get_dish_list:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getDishList.html",
  duoguan_dish_get_dish_one_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getDishOneInfo.html",
  duoguan_dish_get_dish_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getDishInfo.html",
  duoguan_dish_get_goods_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getGoodsInfo.html",
  duoguan_dish_add_cart_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/addGoodsCart.html",
  duoguan_dish_get_cart_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/getCartList.html",
  duoguan_dish_edit_cart_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/editCartList.html",
  duoguan_dish_delete_cart_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/Api/deleteCartList.html",
  duoguan_dish_order_post_info:DUOGUAN_HOST_URL +"/index.php?s=/addon/DuoguanDish/OrderApi/postOrder.html",
  duoguan_dish_get_user_orderlist_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/getUserOrderList.html",
  duoguan_dish_order_info_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/orderInfo.html",
  duoguan_dish_delete_user_order_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/deleteUserOrder.html",
  duoguan_dish_order_pay_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/makePay.html",
  duoguan_dish_post_comment_order:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/postComment.html",
  duoguan_dish_imgupload_url:DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDish/OrderApi/imgUpload.html",
  duoguan_wx_group_notice_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/NoticeApi/lists.html",
  duoguan_wx_group_notice_click: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/NoticeApi/click.html",
  duoguan_wx_group_notice_edit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/NoticeApi/edit.html",
  duoguan_wx_group_notice_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/NoticeApi/del.html",
  duoguan_wx_group_notice_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/NoticeApi/info.html",
  duoguan_wx_group_signed_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/lists.html",
  duoguan_wx_group_signed_partakes: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/partakes.html",
  duoguan_wx_group_signed_edit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/edit.html",
  duoguan_wx_group_signed_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/del.html",
  duoguan_wx_group_signed_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/info.html",
  duoguan_wx_group_signed_partake: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/partake.html",
  duoguan_wx_group_signed_signed: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/SignedApi/signed.html",
  duoguan_wx_group_vote_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/lists.html",
  duoguan_wx_group_vote_edit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/edit.html",
  duoguan_wx_group_vote_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/del.html",
  duoguan_wx_group_vote_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/info.html",
  duoguan_wx_group_vote_statistic: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/statistic.html",
  duoguan_wx_group_vote_vote: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/vote.html",
  duoguan_wx_group_vote_query_one: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/queryOne.html",
  duoguan_wx_group_vote_cover_upload: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/coverUpload.html",
  duoguan_wx_group_vote_img_upload: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/VoteApi/imgUpload.html",
  duoguan_wx_group_activity_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/lists.html",
  duoguan_wx_group_activity_user_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/userLists.html",
  duoguan_wx_group_activity_edit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/edit.html",
  duoguan_wx_group_activity_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/del.html",
  duoguan_wx_group_activity_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/info.html",
  duoguan_wx_group_activity_enroll: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/enroll.html",
  duoguan_wx_group_activity_signed: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/signed.html",
  duoguan_wx_group_activity_quit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/quit.html",
  duoguan_wx_group_activity_cover_upload: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/activityApi/coverUpload.html",
  duoguan_wx_group_utils_msg: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanWXGroupHelper/UtilsApi/sendMessage.html",
  duoguan_ddy_config: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDianDanYe/DuoguanDianDanYeApi/config.html",
  duoguan_ddy_markers: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDianDanYe/DuoguanDianDanYeApi/getMarkers.html",
  duoguan_ddy_evaluations_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDianDanYe/EvaluationsApi/lists.html",
  duoguan_ddy_evaluations_add: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDianDanYe/EvaluationsApi/edit.html",
  duoguan_ddy_img_upload: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanDianDanYe/DuoguanDianDanYeApi/imgUpload.html",
  duoguan_reservation_categroys: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/categorys.html",
  duoguan_reservation_doc_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/documents.html",
  duoguan_reservation_doc_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/documentInfo.html",
  duoguan_reservation_reseve: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/reseve.html",
  duoguan_reservation_reseve_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/reseveDel.html",
  duoguan_reservation_reseve_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/reseves.html",
  duoguan_reservation_reseve_make_pay: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/makeResevePay.html",
  duoguan_reservation_reseve_confirm: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/reseveConfirm.html",
  duoguan_reservation_slider_imgs: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/sliderImgs.html",
  duoguan_reservation_config: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/config.html",
  duoguan_reservation_fields: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/fields.html",
  duoguan_reservation_reseve_refund: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanReservation/ReservationApi/refund.html",
  duoguan_wx_pinche_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanPinChe/PinCheApi/lists.html",
  duoguan_wx_pinche_my_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanPinChe/PinCheApi/myLists.html",
  duoguan_wx_pinche_edit: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanPinChe/PinCheApi/edit.html",
  duoguan_wx_pinche_del: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanPinChe/PinCheApi/del.html",
  duoguan_wx_pinche_verify: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanPinChe/PinCheApi/verify.html",
  duoguan_services_config: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/config.html",
  duoguan_services_categorys: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/categorys.html",
  duoguan_services_category_info: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/categoryInfo.html",
  duoguan_services_documents: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documents.html",
  duoguan_services_my_documents: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/myDocuments.html",
  duoguan_services_document_write: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documentWrite.html",
  duoguan_services_documentInfo: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documentInfo.html",
  duoguan_services_documentGood: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documentGood.html",
  duoguan_services_documentDel: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documentDel.html",
  duoguan_services_document_pay: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/documentPay.html",
  duoguan_services_jubao: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/jubao.html",
  duoguan_services_pullblack: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/pullBlack.html",
  duoguan_services_top: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/toggleTop.html",
  duoguan_services_comment_add: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/CommentApi/create.html",
  duoguan_services_comment_lists: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/CommentApi/lists.html",
  duoguan_services_comment_delete: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/CommentApi/delete.html",
  duoguan_services_upload: DUOGUAN_HOST_URL + "/index.php?s=/addon/DuoguanInfo/DuoguanInfoApi/upload.html",
}