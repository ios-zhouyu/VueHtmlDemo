<template>
    <div class="list">
        <p class="title">评论回复:</p>
        <Item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </div>
</template>

<script>
    import Item from './Item'
	export default {
		name: "List",
        props: ['comments'],
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
</style>
