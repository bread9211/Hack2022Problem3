const STOCK_API_KEY = "ce93g3aad3i49a9hkgjgce93g3aad3i49a9hkgk0"
const FINNHUB = require("finnhub")
const api_key = FINNHUB.ApiClient.instance.authentications['api_key']
api_key.apiKey = STOCK_API_KEY
const finnhubClient = new FINNHUB.DefaultApi()

const fs = require('fs')
const path = require('path')

const SP500_STOCKS = fs.readFileSync(path.resolve(__dirname, 'sp500.txt'), 'utf8')

global.getStockList = (money, time) => {
    
}