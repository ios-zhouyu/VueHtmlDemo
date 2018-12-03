<template>
    <div class="item">
        <p class="username">XXX:</p>
        <p class="content">真的不错,用起来</p>
    </div>
</template>

<script>
	export default {
		name: "Item"
	}
</script>

<style scoped>
    .item {
        border-style: solid;
        border-width: 1px;
        border-color: #cccccc;
        border-radius: 4px;
        margin-top: 3px;
    }
    .username {
        font-size: 13px;
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .content {
        font-size: 13px;
        margin-left: 40px;
        margin-top: 5px;
    }
</style>
