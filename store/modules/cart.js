import Vue from "vue"
// 管理购物车数据
const state = {
  cartList: [
    {
      selected: false,
      count: 2,
      promId: 0,
      showPoints: false,
      itemTagList: [
        {
          itemId: 1579033,
          tagId: 128111157,
          freshmanExclusive: false,
          name: "暖冬特惠",
          subType: 204,
          forbidJump: false,
          type: 2,
        },
      ],
      rank: 1,
      id: 1579033,
      sellVolume: 2650,
      primaryPicUrl:
        "https://yanxuan-item.nosdn.127.net/4221151d461f269166b8cec5122105d8.png",
      soldOut: false,
      sortFlag: 0,
      commentCount: 0,
      onSaleTime: 1539930846261,
      picMode: 1,
      commentWithPicCount: 0,
      underShelf: false,
      status: 2,
      couponConflict: true,
      forbiddenBuy: false,
      promotionDesc: "暖冬特惠",
      limitedFlag: 204,
      pieceNum: 0,
      itemSizeTableDetailFlag: false,
      forbidExclusiveCal: false,
      rewardShareFlag: false,
      updateTime: 1575512579911,
      showCommentEntrance: true,
      pieceUnitDesc: "件",
      specialPromTag: "",
      counterPrice: 699,
      categoryL2Id: 0,
      retailPrice: 455,
      primarySkuPreSellPrice: 0,
      preLimitFlag: 0,
      itemPromValid: true,
      promTag: "暖冬特惠",
      source: 0,
      points: 0,
      primarySkuPreSellStatus: 0,
      extraServiceFlag: 0,
      flashPageLink: "",
      autoOnsaleTimeLeft: 0,
      innerData: {},
      saleCenterSkuId: 0,
      pointsStatus: 0,
      extraPrice: "",
      colorNum: 5,
      showTime: 0,
      autoOnsaleTime: 0,
      preemptionStatus: 1,
      isPreemption: 0,
      zcSearchFlag: false,
      name: "寻找珍贵的触感，女式V领纯小山羊绒衫2.0",
      appExclusiveFlag: false,
      itemType: 1,
      listPicUrl:
        "https://yanxuan-item.nosdn.127.net/8b861989c878661d75f9b18440af2a86.png",
      pointsPrice: 0,
      simpleDesc: "性感显瘦，简洁坦率",
      seoTitle: "",
      newItemFlag: false,
      buttonType: 0,
      primarySkuId: 300011084,
      displaySkuId: 300011105,
      productPlace: "",
      itemSizeTableFlag: false,
    },
    {
      selected: true,
      count: 3,
      promId: 0,
      showPoints: false,
      itemTagList: [
        {
          itemId: 1579038,
          tagId: 128111157,
          freshmanExclusive: false,
          name: "暖冬特惠",
          subType: 204,
          forbidJump: false,
          type: 2,
        },
      ],
      rank: 1,
      id: 1579038,
      sellVolume: 573,
      primaryPicUrl:
        "https://yanxuan-item.nosdn.127.net/6c6ef2b0a0c379ce87bfd3b67d031a5d.png",
      soldOut: false,
      sortFlag: 0,
      commentCount: 0,
      onSaleTime: 1539335121356,
      picMode: 1,
      commentWithPicCount: 0,
      underShelf: false,
      status: 2,
      couponConflict: true,
      forbiddenBuy: false,
      promotionDesc: "暖冬特惠",
      limitedFlag: 204,
      pieceNum: 0,
      itemSizeTableDetailFlag: false,
      forbidExclusiveCal: false,
      rewardShareFlag: false,
      updateTime: 1576475638162,
      showCommentEntrance: true,
      pieceUnitDesc: "件",
      specialPromTag: "",
      counterPrice: 899,
      categoryL2Id: 0,
      retailPrice: 585,
      primarySkuPreSellPrice: 0,
      preLimitFlag: 0,
      itemPromValid: true,
      promTag: "暖冬特惠",
      source: 0,
      points: 0,
      primarySkuPreSellStatus: 0,
      extraServiceFlag: 0,
      flashPageLink: "",
      autoOnsaleTimeLeft: 0,
      innerData: {},
      saleCenterSkuId: 0,
      pointsStatus: 0,
      extraPrice: "",
      colorNum: 3,
      showTime: 0,
      autoOnsaleTime: 0,
      preemptionStatus: 1,
      isPreemption: 0,
      zcSearchFlag: false,
      name: "给你妈妈的温暖，女式加厚圆领山羊绒2.0",
      appExclusiveFlag: false,
      itemType: 1,
      listPicUrl:
        "https://yanxuan-item.nosdn.127.net/aa947e0c4f062fecc07ce4bffed08535.png",
      pointsPrice: 0,
      simpleDesc: "以井然有序的优雅迎浪漫冬季",
      seoTitle: "",
      newItemFlag: false,
      buttonType: 0,
      primarySkuId: 300005452,
      displaySkuId: 300005451,
      productPlace: "",
      itemSizeTableFlag: false,
    },
  ],
};
const mutations = {
  // 添加到购物车
  addShopItemMutation(state, shopItem){
    /* 
      思路：
        1.购物车已有该商品，在原有的商品count上累加
        2.购物车没有该商品，直接添加该商品发到购物车
    */
    let shopObj = state.cartList.find(item => item.id === shopItem.id)
    if(shopObj){ // 购物车已有该商品
      shopObj.count++
    }else { // 购物车没有该商品
      // 非响应式数据
      // shopItem.count = 1
      // shopItem.selected = true
      
      // 响应式数据
      Vue.set(shopItem, 'count', 1)
      Vue.set(shopItem, 'selected', true)
      state.cartList.push(shopItem)
    }
  }
};

const actions = {};

const getters = {};

// 向外暴露
export default {
  state,
  mutations,
  actions,
  getters,
};
