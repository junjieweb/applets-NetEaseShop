<template>
  <view class="categoryContainer">
    <!-- 头部区域 -->
    <view class="header">
      <view class="search">搜索商品</view>
    </view>
    
    <!-- 内容区 -->
    <view class="contentContainer">
      <!-- 左侧区域 -->
      <view class="leftContainer">
        <scroll-view scroll-y="true" class="navScroll">
          <view class="navItem" :class="{active: navIndex === index}" @click="changeNavIndex(index)" v-for="(item,index) in categoryList" :key="item.id">
            {{item.name}}
          </view>
        </scroll-view>
      </view>
      
      <!-- 右侧区域 -->
      <view class="rightContainer">
        <scroll-view scroll-y="true" class="shopScroll">
          <view>
            <image class="cateImage" :src="cateObj.imgUrl" mode=""></image>
            <view class="shopList">
              <view class="shopItem" v-for="item in cateObj.subCateList" :key="item.id">
                <image class="shopImage" :src="item.wapBannerUrl" mode=""></image>
                <text class="shopName">{{item.name}}</text>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
      
    </view>
  </view>
</template>

<script>
  import request from '../../utils/request.js'
  export default {
    data() {
      return {
        categoryList:[], // 分类页数据
        navIndex: 0, // 导航标识index
      };
    },
    mounted() {
      this.getCategoryDatas()
    },
    methods:{
      async getCategoryDatas(){
        this.categoryList = await request('/getCategoryData')
      },
      // 点击导航的回调
      changeNavIndex(index){
        this.navIndex = index
      }
    },
    computed:{
      cateObj(){
        return this.categoryList[this.navIndex]
      }
    }
  }
</script>

<style lang="stylus">
.categoryContainer
  .header
    padding 10rpx 0
    .search
      width 92%
      height 60rpx
      text-align center
      line-height 60rpx
      font-size 26rpx
      background #eee
      margin 0 auto
  .contentContainer
    display flex
    height calc(100vh - 80rpx)
    box-sizing border-box
    border-top 1rpx solid #eee
    .leftContainer
      width 20%
      height 100%
      border-right 1rpx solid #eee
      box-sizing border-box
      .navScroll
        height calc(100vh - 82rpx)
        .navItem
          position relative
          font-size 26rpx
          height 80rpx
          line-height 80rpx
          text-align center
          &.active::before
            position absolute
            top 20rpx
            left 10rpx
            content ''
            width 2rpx
            height 40rpx
            background #BB2C08
    .rightContainer
      width 80%
      height 100%
      .shopScroll
        height calc(100vh - 82rpx)
        .cateImage
          width 520rpx
          height 190rpx
          display block
          margin 10rpx auto
        .shopList
          display flex
          flex-wrap wrap
          .shopItem
            width 33.333%
            text-align center
            .shopImage
              height 144rpx
              width 90%
            .shopName
              font-size 24rpx
</style>
