<template>
    <div>
        Money (USD): <input type="text" id="money" disabled><br>
        Time (months) : <input type="text" id="months" disabled><br>
        <button @click="calc" disabled>Calculate</button>
    </div>
</template>

<script>
    export default {
        emits: ['sorted'],
        methods: {
            calc(_) {
                if (window.stockList.length < 500) { return }

                console.log("click")

                const money = parseFloat(document.querySelector("#money").value)
                const months = parseInt(document.querySelector("#months").value)
                console.log(money, months)

                let returnList = structuredClone(window.stockList)

                for (let index = returnList.length-1; index >= 0; index--) {
                    const element = returnList[index];

                    if (element.stockData.c > money/10) {
                        returnList.splice(returnList.indexOf(element), 1)
                    }
                }
                this.$emit("sorted", returnList)
            }
        }
    }
</script>