<template>
    <div class="head">
        <p class="title">请发表你的评论</p>
    </div>
</template>

<script>
	export default {
		name: "Head"
	}
</script>

<style scoped>
    .head {
        display: flex;
        background-color: #ededed;
        height: 80px;
        justify-content: flex-start;
    }
    .title {
        font-size: 30px;
        margin-left: 60px;
        align-self: center;
    }
</style>
