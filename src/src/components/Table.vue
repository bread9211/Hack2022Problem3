<template>

<table>
    <tr>
        <th>Stock</th>
        <th>Price</th>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[0]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[0]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[1]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[1]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[2]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[2]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[3]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[3]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[4]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[4]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[5]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[5]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[6]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[6]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[7]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[7]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[8]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[8]?.stockData.c : "N/A"  }}</td>
    </tr>

    <tr>
        <td>{{ stocks ? stocks[9]?.stock : "N/A" }}</td>
        <td>{{ stocks ? stocks[9]?.stockData.c : "N/A"  }}</td>
    </tr>

</table>

</template>

<script>

export default {
    props: {
        stocks: Array
    }
}

</script>

<style>

</style>