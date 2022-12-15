<style>

    Stock {
        text-align: center;
    }

</style>

<template>

    <h1>Portfolio Generator</h1><br>
    <Stock></Stock><br>
    <Progress></Progress>

</template>

<script>

    import Stock from './components/Stock.vue'
    import Progress from './components/Progress.vue'

    export default 
    {
        name: 'app',
        components: {
            Stock,
            Progress
        },
        mounted() {
            
        }
    }

</script>