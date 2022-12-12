function waitForChild(object, property, callback) {
    (new Promise((resolve, reject) => {
        if (object[property] != undefined) {
            resolve()
        } else {
            setTimeout(waitForChild.bind(window, object, property, callback), 30)
        }
    })).then(callback)
}

document.querySelector("input").addEventListener("click", (_) => {
    console.log("click")

    window.stockList.sort((a, b) => {
        function avg(l, type) {
            let sum = 0

            for (let index = 0; index < l.length; index++) {
                sum += l[index][type]
            }

            return sum/l.length
        }

        const aHoldAvg = avg(a, "hold")
        const aSellAvg = avg(a, "sell")
        const bHoldAvg = avg(b, "hold")
        const bSellAvg = avg(b, "sell")

        switch (key) {
            case value:
                
                break;
        
            default:
                return -1
                break;
        }
    })
})