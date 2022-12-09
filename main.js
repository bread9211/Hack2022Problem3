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

    if (window.stockList.length == 0) {
        waitForChild(window, "setStockList", () => {
            window.setStockList()
        })
    }

    window.stockList.forEach(stock => {
        
    })
})