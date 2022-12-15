<style></style>

<template>

    <div id="bg" :style="{ height : barHeight, width : barWidth, background : bgColor, overflow : 'auto', borderRadius : barWidth/2}">
        <div id="bar" :style="{ height : barHeight, width : barValue+'%', background : barColor, borderRadius : barWidth/2 }"></div>
    </div><br>

    Loading...

</template>

<script>

    export default {
        data() {
            return {
                barValue : 50,
                barWidth : "200px",
                barHeight : "10px",
                bgColor : "grey",
                barColor : "green"
            }
        }
    }

</script>