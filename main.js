function waitForChild(object, property, callback) {
    (new Promise((resolve, reject) => {
        if (object[property] != undefined) {
            resolve()
        } else {
            setTimeout(waitForChild.bind(window, object, property, callback), 30)
        }
    })).then(callback)
}

document.querySelector("#button").addEventListener("click", (_) => {
    console.log("click")

    const money = parseFloat(document.querySelector("#money").value)
    const months = parseInt(document.querySelector("#months").value)

    let returnList = structuredClone(window.stockList)

    returnList.sort((a, b) => {
        if (a.buyScore > b.buyScore) {
            return 1
        }

        if (a.holdScore*(1+0.25*months) > b.holdScore*(1+0.25*months)) {
            return 1
        }
    })

    console.log(returnList)
})