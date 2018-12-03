<template>
    <div class="add">
        <div class="item">
            <p class="tip">用户名</p>
            <input type="text" placeholder="用户名" class="username">
        </div>
        <div class="item">
            <p class="tip">评论内容</p>
            <textarea aria-placeholder="评论内容" class="content"></textarea>
        </div>
        <div class="item">
            <input type="submit" value="提交" class="submit">
        </div>
    </div>
</template>

<script>
	export default {
		name: "Add"
	}
</script>

<style scoped>
    .add {
        border-style: solid;
        border-width: 1px;
        border-color: #dddddd;
    }
    .item {
        margin-top: 10px;
        margin-left: 30px;
    }
    .tip {
        font-size: 13px;
    }
    .submit {
        position: relative;
        bottom: 10px;
        left: 130px;
        border-width: 1px;
        border-style: solid;
        border-color: #dddddd;
        background-color: chartreuse;
    }
    .username {
        padding-left: 5px;
        padding-bottom: 3px;
        padding-top: 3px;
        font-size: 12px;
        border-color: #dddddd;
        border-style: solid;
        border-width: 1px;
        width: 180px;
        height: 20px;
    }
    .content {
        padding-left: 5px;
        padding-bottom: 3px;
        padding-top: 3px;
        font-size: 12px;
        border-color: #dddddd;
        border-style: solid;
        border-width: 1px;
        width: 180px;
        height: 100px;
    }
</style>
