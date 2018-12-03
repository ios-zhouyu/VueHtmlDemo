<template>
    <div class="item">
        <p class="username">{{comment.name}}:</p>
        <button class="delete" @click="deleteItem">删除</button>
        <p class="content">{{comment.content}}</p>
    </div>
</template>

<script>
	export default {
		name: "Item",
        props: {
	        comment: Object,
	        deleteComment: Function,
	        index: Number
        },
        methods: {
	        deleteItem() {
	        	const {comment, index, deleteComment} = this //取出当前对象属性
                deleteComment(index)
            }
        }
	}
</script>

<style scoped>
    .item {
        position: relative;
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
        color: #ff0000;
    }
    .content {
        font-size: 11px;
        margin-left: 40px;
        margin-top: 5px;
    }
    .delete {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 12px;
        border-style: solid;
        border-width: 1px;
        border-color: #cccccc;
        color: #0000ff;
    }
</style>
