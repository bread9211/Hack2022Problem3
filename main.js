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

    for (let index = returnList.length-1; index >= 0; index--) {
        const element = returnList[index];

        if (element.stockData.c > money/10) {
            returnList.splice(returnList.indexOf(element), 1)
        }
    }

    console.log(returnList)
})