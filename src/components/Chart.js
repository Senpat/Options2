import {useState,useEffect} from 'react'
import {TradingViewEmbed, widgetType} from "react-tradingview-embed"

import axios from 'axios'

import {marketstackkey,tdkey} from "./../apikey.js"

import Widget from "./Widget"
import AreaChart from "./StockChart"
import './../style/chartstyle.css'

const Chart = ({ticker,stockprice,setStockprice}) => {
    const [stockdata,setStockdata] = useState({
        'name':'nostock'
    })
    const [stockchartdata,setStockchartdata] = useState([])
    //const [stockprice,setStockprice] = useState(-1)
    useEffect(() => {
        console.log('effect ' + ticker + ' ' + marketstackkey)
        axios
            .get('http://api.marketstack.com/v1/tickers/'+ticker.toUpperCase()+'?access_key=' + marketstackkey)
            .then(response => {
                console.log(response.data)
                setStockdata(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker])

    useEffect(() => {
        console.log('effect2 ' + ticker)
        axios
            .get('http://api.marketstack.com/v1/tickers/'+ticker.toUpperCase()+'/eod/latest?access_key=' + marketstackkey)
            .then(response => {
                console.log(response.data.close)
                setStockprice(response.data.close)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker])
    /*
    useEffect(() => {
        console.log('chart data effect ' + ticker)
        axios
            .get('http://api.marketstack.com/v1/eod?access_key='+marketstackkey+'&symbols='+ticker.toUpperCase()+'&date_from=2020-03-27&limit=365')
            .then(response => {
                //console.log(response.data.data)
                setStockchartdata(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ticker])
    console.log(stockchartdata)*/
    if(stockdata.name === 'nostock') return (<div></div>)

    return (
        <div class='chart'>
            <h1>{stockdata.name} ({stockdata.stock_exchange.acronym}:{stockdata.symbol})</h1>
            {/*<h3>Current Price: ${stockprice}</h3>*/}

            {/*<div class="widget">
                <TradingViewEmbed 
                    widgetType={widgetType.SYMBOL_OVERVIEW}
                    widgetConfig={{
                        "symbols": [[
                            stockdata.symbol,
                            stockdata.symbol
                        ]]
                        
                    }}
                />

                </div>*/}

            <Widget stockdata={stockdata}/>

            {/*<AreaChart type="svg" data={stockchartdata} />*/}
        </div>
        
    )

    


}

export default Chart