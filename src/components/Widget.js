import {TradingViewEmbed, widgetType} from "react-tradingview-embed"
import {useState} from 'react'

const Widget = ({stockdata}) => {
    const [showsymbol,setShowsymbol] = useState()
    
    console.log(stockdata)
    console.log(stockdata.symbol)
    
    if(stockdata.symbol !== showsymbol){
        console.log("hello")
        setShowsymbol(stockdata.symbol)
        return (
            <div >
                
    
            </div>
        )
    }

    return (
        <div class="widget">
            <TradingViewEmbed 
                widgetType={widgetType.SYMBOL_OVERVIEW}
                widgetConfig={{
                    "symbols": [[
                        showsymbol,
                        showsymbol
                    ]]
                    
                }}
            />

        </div>
    )

}

export default Widget