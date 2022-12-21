<template>

<table>
    <tr>
        <th>Stock</th>
        <th>Price</th>
    </tr>

    <tr>
        <td>{{ stocks[0]?.stock }}</td>
        <td>{{ stocks[0]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[1]?.stock }}</td>
        <td>{{ stocks[1]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[2]?.stock }}</td>
        <td>{{ stocks[2]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[3]?.stock }}</td>
        <td>{{ stocks[3]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[4]?.stock }}</td>
        <td>{{ stocks[4]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[5]?.stock }}</td>
        <td>{{ stocks[5]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[6]?.stock }}</td>
        <td>{{ stocks[6]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[7]?.stock }}</td>
        <td>{{ stocks[7]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[8]?.stock }}</td>
        <td>{{ stocks[8]?.stockData.c }}</td>
    </tr>

    <tr>
        <td>{{ stocks[9]?.stock }}</td>
        <td>{{ stocks[9]?.stockData.c }}</td>
    </tr>

</table>

</template>

<script>
import { onMounted } from 'vue';




export default {
    data() {
        return {
            stocks: []
        }
    },

    mounted() {
        this.stocks = window.sorted.slice(0, 10)
    }
}

</script>

<style>

</style>