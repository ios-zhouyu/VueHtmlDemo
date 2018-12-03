<template>
    <div class="list">
        <p class="title">评论回复:</p>
        <Item/>
        <Item/>
    </div>
</template>

<script>
    import Item from './Item'
	export default {
		name: "List",
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
