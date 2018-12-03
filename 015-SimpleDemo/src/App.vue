<template>
    <div id="app">
        <Head/>
        <div class="content">
            <Add/>
            <List/>
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
        components: {
	        Head,
	        Add,
	        List
        }
	}
	
</script>

<style>
    #app {
        color: #2c3e50;
        margin-top: 20px;
    }
</style>
