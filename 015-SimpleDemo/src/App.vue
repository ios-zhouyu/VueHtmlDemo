<template>
    <div id="app">
        <Head/>
        <div class="content">
            <Add :addComment="addComment"/>
            <List :comments="comments"/>
        </div>
        <router-view/>
    </div>
</template>

<script>

	import Head from '@/components/Head'
	import Add from '@/components/Add'
	import List from '@/components/List'
 
	export default {
		name: 'App',
        data () {
			return {
				comments: [
                    {
                    	name: '校长',
                        content: '确实不错,大力推广'
                    },
					{
						name: '李四',
						content: '收藏一下'
					},
					{
						name: '啊哈哈',
						content: '不错,不错,电站广'
					},
					{
						name: '久久',
						content: '愿你天长地久'
					}
                ]
            }
        },
        components: {
	        Head,
	        Add,
	        List
        },
        methods: {
			addComment(comment) {//将此方法传递给子组件
				this.comments.unshift(comment)
            }
        }
	}
	
</script>

<style>
    #app {
        color: #2c3e50;
        margin-top: 20px;
    }
</style>
