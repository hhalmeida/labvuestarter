<template>
    <section>
        <h2>Home</h2>
        <Example :name="'Teste'" ></Example> 

           
    </section>
</template>

<script>
import Example from '@/components/Example'

const vm = {
}
export default {
    name:'Home',
    data(){
        return vm;
    },
    components:{ Example }
}
</script>

<style lang="scss" scoped>

</style>