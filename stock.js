const STOCK_API_KEYS = {
    "ce93g3aad3i49a9hkgjgce93g3aad3i49a9hkgk0" : 0, 
    "ce96r4iad3i49a9hmgqgce96r4iad3i49a9hmgr0" : 0, 
    "ce96rh2ad3i49a9hmh7gce96rh2ad3i49a9hmh80" : 0, 
    "ce96ta2ad3i49a9hmiogce96ta2ad3i49a9hmip0" : 0, 
    "ce97ejqad3i49a9hmq7gce97ejqad3i49a9hmq80" : 0, 
    "ce97enqad3i49a9hmqd0ce97enqad3i49a9hmqdg" : 0,
    "ce97g6aad3i49a9hmra0ce97g6aad3i49a9hmrag" : 0,
    "ce97h32ad3i49a9hmrs0ce97h32ad3i49a9hmrsg" : 0,
    "ce97h8qad3i49a9hms3gce97h8qad3i49a9hms40" : 0,
    "ce97he2ad3i49a9hms8gce97he2ad3i49a9hms90" : 0,

    "ce984riad3i49a9hn740ce984riad3i49a9hn74g" : 0,
    "ce9852aad3i49a9hn780ce9852aad3i49a9hn78g" : 0,
    "ce9856iad3i49a9hn7d0ce9856iad3i49a9hn7dg" : 0,
    "ce985aiad3i49a9hn7i0ce985aiad3i49a9hn7ig" : 0,
    "ce985qiad3i49a9hn7q0ce985qiad3i49a9hn7qg" : 0,
    "ce985uaad3i49a9hn7v0ce985uaad3i49a9hn7vg" : 0,
    "ce9862aad3i49a9hn830ce9862aad3i49a9hn83g" : 0,
    "ce98d9aad3i49a9hnajgce98d9aad3i49a9hnak0" : 0,
    "ce98ddiad3i49a9hnar0ce98ddiad3i49a9hnarg" : 0,
    "ce98dkqad3i49a9hnb0gce98dkqad3i49a9hnb10" : 0,

    "ce98dp2ad3i49a9hnb50ce98dp2ad3i49a9hnb5g" : 0,
    "ce98duaad3i49a9hnba0ce98duaad3i49a9hnbag" : 0,
    "ce98e22ad3i49a9hnbdgce98e22ad3i49a9hnbe0" : 0,
    "ce98e5qad3i49a9hnbhgce98e5qad3i49a9hnbi0" : 0,
    "ce98eaaad3i49a9hnblgce98eaaad3i49a9hnbm0" : 0,
    "ce98ee2ad3i49a9hnbp0ce98ee2ad3i49a9hnbpg" : 0,
    "ce98ej2ad3i49a9hnbt0ce98ej2ad3i49a9hnbtg" : 0,
    "ce98enaad3i49a9hnc20ce98enaad3i49a9hnc2g" : 0,
    "ce98eqqad3i49a9hnc9gce98eqqad3i49a9hnca0" : 0,
    "ce98euiad3i49a9hncdgce98euiad3i49a9hnce0" : 0,

    "ce98f2aad3i49a9hnchgce98f2aad3i49a9hnci0" : 0,
    "ce98f82ad3i49a9hncmgce98f82ad3i49a9hncn0" : 0,
    "ce98ffaad3i49a9hnct0ce98ffaad3i49a9hnctg" : 0,
    "ce9dgbiad3i1qo03nergce9dgbiad3i1qo03nes0" : 0,
    "ce9dggqad3i1qo03nf1gce9dggqad3i1qo03nf20" : 0,
    "ce9dgnaad3i1qo03nf90ce9dgnaad3i1qo03nf9g" : 0,
    "ce9dgsqad3i1qo03nfe0ce9dgsqad3i1qo03nfeg" : 0,
    "ce9dh3aad3i1qo03nfl0ce9dh3aad3i1qo03nflg" : 0,
    "ce9dhaiad3i1qo03nfs0ce9dhaiad3i1qo03nfsg" : 0,
    "ce9dheqad3i1qo03ng1gce9dheqad3i1qo03ng20" : 0,
}
const FINNHUB = require("finnhub")
const api_key = FINNHUB.ApiClient.instance.authentications['api_key']
const finnhubClient = new FINNHUB.DefaultApi()

const SP500_STOCKS = ["AAPLMSFT", "GOOG", "GOOGL", "AMZN", "BRK.B", "TSLA", "UNH", "JNJ", "XOM", "WMT", "NVDA", "V", "JPM", "PG", "LLY", "CVX", "MA", "HD", "META", "ABBV", "PFE", "MRK", "KO", "BAC", "PEP", "TMO", "COST", "AVGO", "ORCL", "CSCO", "MCD", "DHR", "ACN", "TMUS", "ABT", "BMY", "NEE", "NKE", "DIS", "WFC", "LIN", "TXN", "PM", "VZ", "ADBE", "UPS", "AMGN", "CMCSA", "MS", "SCHW", "RTX", "COP", "HON", "T", "NFLX", "QCOM", "IBM", "CRM", "CVS", "DE", "UNP", "LMT", "ELV", "LOW", "GS", "CAT", "INTC", "SBUX", "SPGI", "AXP", "AMD", "GILD", "INTU", "ADP", "BLK", "BA", "PLD", "MDT", "CI", "AMT", "ISRG", "GE", "MDLZ", "TJX", "CB", "AMAT", "SYK", "C", "MMC", "ADI", "EL", "MO", "PYPL", "NOC", "REGN", "VRTX", "BKNG", "NOW", "DUK", "PGR", "EOG", "SO", "SLB", "TGT", "ZTS", "BDX", "APD", "HUM", "MMM", "GD", "ITW", "WM", "HCA", "MRNA", "SHW", "CSX", "CME", "BSX", "CL", "USB", "FISV", "AON", "EQIX", "ETN", "PNC", "LRCX", "ATVI", "CCI", "MET", "ICE", "MU", "OXY", "CHTR", "NSC", "EMR", "TFC", "FCX", "DG", "PXD", "KLAC", "GM", "MCO", "MCK", "KDP", "MNST", "F", "SRE", "ORLY", "MPC", "MAR", "PSA", "GIS", "SNPS", "ADM", "AEP", "PSX", "CNC", "D", "KHC", "HSY", "AZO", "APH", "ROP", "CTAS", "KMB", "AIG", "VLO", "CTVA", "JCI", "DXCM", "FDX", "CDNS", "A", "EW", "MSI", "AFL", "TRV", "PAYX", "RSG", "SYY", "EXC", "ECL", "NXPI", "ENPH", "ADSK", "BIIB", "DVN", "CMG", "HES", "LHX", "FIS", "MCHP", "AJG", "WMB", "KMI", "ROST", "MSCI", "STZ", "TT", "FTNT", "ANET", "O", "NUE", "IQV", "SPG", "PRU", "TEL", "XEL", "NEM", "PH", "HLT", "YUM", "PCAR", "CARR", "DOW", "COF", "LVS", "BF.B", "EA", "WBA", "ABC", "DD", "CMI", "BK", "ED", "ALL", "IDXX", "AMP", "KR", "TDG", "OTIS", "CSGP", "NDAQ", "HAL", "DLTR", "MTD", "ILMN", "VICI", "WELL", "AME", "RMD", "ODFL", "KEYS", "SBAC", "DLR", "PPG", "PCG", "CTSH", "PEG", "ALB", "ON", "WEC", "CEG", "ROK", "ES", "GWW", "DHI", "FAST", "HPQ", "VRSK", "OKE", "BKR", "DFS", "GLW", "AWK", "MTB", "IT", "STT", "TROW", "APTV", "LYB", "IFF", "WTW", "GPN", "BAX", "GPC", "WBD", "HRL", "ZBH", "EIX", "CDW", "RJF", "K", "LEN", "FANG", "CBRE", "URI", "ARE", "TSCO", "HIG", "ETR", "FE", "EFX", "ULTA", "VMC", "LUV", "FTV", "EBAY", "AVB", "EQR", "TSN", "DAL", "WY", "MKC", "AEE", "DTE", "ACGL", "FITB", "PFG", "MLM", "PPL", "PWR", "IR", "FRC", "ANSS", "HBAN", "HPE", "VRSN", "EXR", "CAH", "LH", "CTRA", "RF", "WAT", "WRB", "XYL", "CF", "DOV", "CHD", "MOH", "EPAM", "CNP", "TDY", "CFG", "INVH", "ROL", "AES", "PAYC", "BBY", "NTRS", "JBHT", "INCY", "STE", "WAB", "HOLX", "MAA", "CLX", "GRMN", "AMCR", "CAG", "VTR", "CMS", "IEX", "EXPD", "J", "DRI", "MRO", "WST", "PKI", "FDS", "BALL", "MPWR", "ABMD", "TTWO", "ETSY", "DGX", "BR", "CINF", "SEDG", "ATO", "BRO", "FOX", "FOXA", "LYV", "SJM", "MOS", "FMC", "KEY", "IRM", "CPB", "TRGP", "HWM", "SYF", "OMC", "AVY", "COO", "TXT", "CPRT", "GEN", "UAL", "LDOS", "SWKS", "RCL", "NVR", "EXPE", "ALGN", "TRMB", "LKQ", "MGM", "PTC", "AKAM", "APA", "TER", "LNT", "PEAK", "FLT", "ESS", "KIM", "CBOE", "NTAP", "L", "EQT", "EVRG", "JKHY", "NDSN", "BEN", "VTRS", "RE", "ZBRA", "TYL", "DPZ", "IP", "UDR", "IPG", "SNA", "PKG", "HST", "POOL", "LW", "CPT", "MTCH", "BIO", "PARA", "SIVB", "GL", "SWK", "VFC", "CE", "NI", "CHRW", "REG", "TFX", "HSIC", "MAS", "STX", "WDC", "CRL", "MKTX", "NWS", "NWSA", "CZR", "JNPR", "KMX", "CCL", "BXP", "EMN", "PHM", "BBWI", "QRVO", "WYNN", "BWA", "ALLE", "CDAY", "HII", "UHS", "AAL", "WRK", "AOS", "FFIV", "TPR", "PNW", "AAP", "CTLT", "FRT", "CMA", "IVZ", "HAS", "RHI", "NRG", "FBHS", "WHR", "DISH", "SEE", "RL", "PNR", "SBNY", "ZION", "AIZ", "NCLH", "DVA", "OGN", "XRAY", "DXC", "LNC", "MHK", "GNRC", "ALK", "LUMN", "NWL", "VNO", "TECH", "TAP"]

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

global.stockList = []

global.setStockList = (money, time) => {
    for (let index = 0; index < SP500_STOCKS.length; index++) {
        let APIKEY
        for (const key in STOCK_API_KEYS) {
            if (Object.hasOwnProperty.call(STOCK_API_KEYS, key)) {
                APIKEY = key
                if (STOCK_API_KEYS[key] < 8) {
                    break
                }
            }
        }
        STOCK_API_KEYS[APIKEY]++

        const stock = SP500_STOCKS[index]
        api_key.apiKey = APIKEY
        finnhubClient.recommendationTrends(stock, (error, data, response) => {
            finnhubClient.quote(stock, (_error, _data, _response) => {
                if (!error) {
                    response.stockData = _response.body
                    global.stockList.push(response)
                } else {
                    console.log(error, _error)
                }
            })
        })

        sleep(10)
    }
}