<style>

</style>

<template>

    <h1>Portfolio Generator</h1><br>
    <Stock></Stock>
    <Progress></Progress>
</template>

<script>

    import Stock from './components/Stock.vue'
    import Progress from './components/Progress.vue';

    export default 
    {
        name: 'app',
        components: {
            Stock,
            Progress,
        },
        mounted() {
            console.log("mounted")
        }
    }

</script>