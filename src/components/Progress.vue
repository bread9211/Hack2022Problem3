<template>
    <p>Loading stock data: {{stock}}</p><br>
    <div style="width: 500px; height: 10px; background-color: grey; border-radius: 5px">
        <div :style="{ width: (percent) + '%', height: '10px', backgroundColor: 'rgb(0, 204, 0)', borderRadius: '5px', borderStyle: 'none'}">

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            percent : 0.1,
            stock: ""
        }
    },

    methods: {
        load() {
            window.updatePercent = (p, stock) => {
                this.percent = p
                this.stock = stock

                if (this.percent === 100) {
                    document.getElementById("money").disabled = false
                    document.getElementById("months").disabled = false
                    document.querySelector("button").disabled = false
                }
            }
            console.log("loaded updatepercent")
        }
    },

    mounted() {
        this.load()
    }
}

</script>

<style>

</style>