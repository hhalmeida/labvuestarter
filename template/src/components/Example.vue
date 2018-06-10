<template>
    <section>
        <p>This is my vue component example {{name}}</p>    
        <img src="../assets/images/logo.png">

        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://hhalmeida.github.io/cssdohugao" target="_blank">CSS Do Hugão</a></li>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </section>
</template>

<script>
const vm = {
}
export default {
    name:'Home',
    props:['name'],
    data(){
        return vm;
    },
}
</script>

<style lang="scss" scoped>

</style>
