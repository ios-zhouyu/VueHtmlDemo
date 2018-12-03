<template>
    <div class="list">
        <p class="title">评论回复:</p>
        <h2 v-show="comments.length===0" class="empty">暂无评论, 请填写并添加评论</h2>
        <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
    </div>
</template>

<script>
    import Item from './Item'
	export default {
		name: "List",
        props: ['comments', 'deleteComment'],
        components: {
			Item
        }
	}
</script>

<style scoped>
    .title {
        font-size: 14px;
        color: #666666;
    }
    .empty {
        font-size: 16px;
        color: #999999;
        font-weight: 300;
    }
</style>
