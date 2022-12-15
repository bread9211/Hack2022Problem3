<style>

    Stock {
        text-align: center;
    }

</style>

<template>

    <h1>Portfolio Generator</h1><br>
    <Stock></Stock>
</template>

<script>

    import Stock from './components/Stock.vue'

    export default 
    {
        name: 'app',
        components: {
            Stock,
        },
        mounted() {
            console.log("mounted")
        }
    }

</script>