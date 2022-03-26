<template>
    <view class="recommendContainer">
      <!-- 轮播图 -->
      <swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item>
          <view class="swiper-item">
            <image class="bannerIamge" src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image class="bannerIamge" src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <image class="bannerIamge" src="https://yanxuan.nosdn.127.net/d0fa0684fc81c6c192cab0987197f686.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
          </view>
        </swiper-item>
      </swiper>
      <!-- policyDescList 三个图标区域 -->
      <view class="policyList">
        <view class="policyItem" v-for="item in indexData.policyDescList" :key="item.desc">
          <image class="policyImg" :src="item.icon" mode=""></image>
          <text class="content">{{item.desc}}</text>
        </view>
      </view>
      <!-- 10个图标区域 -->
      <view class="kingKongList" v-if="indexData.kingKongModule">
        <view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
          <image class="kingImage" :src="item.picUrl" ></image>
          <text class="kingContent">{{item.text}}</text>
        </view>
      </view>
      <!-- categoryModule分类区 -->
      <view class="categoryContainer">
        <view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
          <image class="titlePic" :src="item.titlePicUrl" mode=""></image>
          <scroll-view class="shopList" scroll-x="true" enable-flex>
            <view class="shopItem" v-for="shopItem in item.itemList" :key="shopItem.id">
              <image class="shopImage" :src="shopItem.showPicUrl" mode=""></image>
              <view class="shopInfo">{{shopItem.name}}</view>
            </view>
            <view class="shopItem more">
              查看更多>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Recommend",
  computed:{
    ...mapState({
      indexData: state => state.home.indexData
    })
  }
}
</script>

<style lang="stylus" scoped>
.recommendContainer
  .banners
    width 100%
    height 350rpx
    .bannerIamge
      width 100%
      height 350rpx
  .policyList
    display flex
    .policyItem
      flex 1
      text-align center
      .policyImg
        width 32rpx
        height 32rpx
        vertical-align middle
      .content
        font-size 24rpx
        vertical-align middle
  .kingKongList
    display flex
    flex-wrap wrap
    .kingKongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      .kingImage
        width 110rpx
        height 110rpx
        margin 20rpx 0
      .kingContent
        font-size 26rpx
  .categoryContainer
    .categoryItem
      margin-bottom 20rpx
      .titlePic
        width 100%
        height 370rpx
      .shopList
        // display flex
        white-space nowrap
        .shopItem
          width 200rpx
          display inline-block
          vertical-align top
          margin-right 20rpx
          &.more
            width 200rpx
            height 200rpx
            background #eee
            text-align center
            line-height 200rpx
            font-size 26rpx
          .shopImage
            width 200rpx
            height 200rpx
            background #eee
          .shopInfo
            font-size 26rpx
            white-space pre-wrap
            display -webkit-box
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            text-overflow ellipsis
            overflow hidden
</style>
