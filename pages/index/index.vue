<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png"></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button type="default">按钮</button>
		</view>
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navScroll" enable-flex>
      <view class="navItem" :class="{active: navIndex === -1}" @click="changeNav(-1)">推荐</view>
			<view class="navItem" :class="{active: navIndex === index}" @click="changeNav(index)" v-for="(item,index) in indexData" :key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				indexData:{},
        navIndex: -1 // 导航的标识
			};
		},
		mounted() {
			this.getIndexData()
		},
		methods:{
			async getIndexData(){
				let result = await request('/getIndexData') // 小程序
				// let result = await request('/api/getIndexData') // H5
				// console.log(result)
        this.indexData = result.kingKongModule.kingKongList
			},
      // 点击导航的回调
      changeNav(index){
        this.navIndex = index
      }
		}
	}
</script>

<style lang="stylus">
	/* 
	stylus:
		1.省略大括号
		2.省略冒号和分号
		3.支持样式嵌套
	*/
   .indexContainer
		.header
			display flex
			padding 10rpx 0
			.logo
				width 140rpx
				height 40rpx
				margin 10rpx 20rpx
			.search
				position: relative;
				width 420rpx
				height 60rpx
				background #eee
				.iconfont
					position absolute
					font-size 30rpx
					top 15rpx
					left 10rpx
				input
					width 370rpx
					margin-left 50rpx
					height 60rpx
					.placeholder
						font-size 26rpx
			button
				width 144rpx
				height 60rpx
				text-align center
				line-height 60rpx
				font-size 24rpx
				padding 0 4rpx
				margin 0 10rpx
		.navScroll
			white-space nowrap
			.navItem
				display inline-block
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				font-size 26rpx
				/* &: 父级引用，代表所处位置的父级 */
				&.active
					border-bottom 1rpx solid #bb2c08
</style>
