<style>

</style>

<template>

    <h1>Portfolio Generator</h1><br>
    <Stock @sorted="(l) => {stocks = l}"></Stock>
    <Progress></Progress><br>
    <Table :stocks="stocks"></Table>
</template>

<script>

    import Stock from './components/Stock.vue'
    import Progress from './components/Progress.vue'
    import Table from './components/Table.vue'

    export default 
    {
        name: 'app',
        components: {
            Stock,
            Progress,
            Table
        },
        data() {
            return {
                stocks : []
            }
        },
        mounted() {
            console.log("mounted")
        }
    }

</script>