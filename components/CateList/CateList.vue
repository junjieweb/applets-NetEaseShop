<template>
  <view class="cateListContainer">
    <!-- 轮播图 -->
    <swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
      <swiper-item v-for="item in cateObj.category.bannerUrlList" :key="item">
        <view class="swiper-item">
          <image class="bannerIamge" :src="item" mode=""></image>
        </view>
      </swiper-item>
    </swiper>
    
    <view class="title">{{cateObj.category.name}}</view>
    <view class="desc">{{cateObj.category.frontDesc}}</view>
    
    <!-- 内容列表区 -->
    <view class="shopList">
      <view class="shopItem" @click="toDetail(item)" v-for="item in cateObj.itemList" :key="item.id">
        <image class="shopImage" :src="item.listPicUrl" mode=""></image>
        <view class="shopInfo common">{{item.name}}</view>
        <view class="shopPrice common">$ {{item.retailPrice}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  import request from '../../utils/request.js'
  export default {
    name:'CateList',
    props:['navId'],
    data(){
      return {
        cateList: []
      }
    },
    mounted() {
      this.getCateList()
    },
    methods:{
      async getCateList(){
        this.cateList = await request('/getIndexCateList')
      },
      // 跳转到detail页面
      toDetail(shopItem){
        wx.navigateTo({
          url: '../../pages/detail/detail?shopItem=' + JSON.stringify(shopItem)
        })
      }
    },
    computed:{
      cateObj(){
        return this.cateList.find(item => item.category.parentId === this.navId)
      }
    }
  }
</script>

<style lang="stylus">
.cateListContainer
  .banners
    width 100%
    height: 370rpx
    .bannerIamge
      width 100%
      height 370rpx
  .title
    font-size 36rpx
    color #333
    line-height 70rpx
    text-align center
  .desc
    font-size 26rpx
    color #999
    line-height 40rpx
    text-align center
  .shopList
    display flex
    flex-wrap wrap
    justify-content space-around
    &::after
      content ''
      width 344rpx
    .shopItem
      width 344rpx
      .shopImage
        width 344rpx
        height 344rpx
      .common
        font-size 26rpx
        line-height 50rpx
        &.shopPrice
          color #BB2C08
          font-weight bold
</style>
