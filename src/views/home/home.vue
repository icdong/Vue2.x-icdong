<!--
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-01-10 19:45:49
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-01-17 14:56:43
-->
<template>
	<div id="home">
		主要按钮
		<el-button type="primary">主要按钮</el-button>
	</div>
</template>

<script>
	export default {
		name: 'home',
		component: {

		},
		data() {
			return {

			}
		},
		// html加载完成之前执行；执行顺序：父组件-子组件
		created() {

		},
		// html加载完成后执行；执行顺序：子组件-父组件
		mounted() {

		},
		// 事件方法执行
		methods: {

		},
		// watch是去监听一个值的变化，然后执行相对应的函数。
		watch: {

		},
		// computed是计算属性，
		// 也就是依赖其它的属性计算所得出最后的值
		computed: {

		}
	}
</script>

<style lang="less" scoped>
	#home {
		width: 100%;
		height: 100%;
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
