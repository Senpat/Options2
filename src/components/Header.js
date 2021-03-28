
import './../style/headerstyle.css'

import {TradingViewEmbed, widgetType} from "react-tradingview-embed"

const Header = () => {

    
    return (
        <div class="widget">
            {
            <TradingViewEmbed 
                widgetType={widgetType.TICKER_TAPE}
                widgetConfig={{
                    "colorTheme": "dark",
                    "symbols": [
                        {
                        "proName": "FOREXCOM:SPXUSD",
                        "title": "S&P 500"
                        },
                        {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "Nasdaq 100"
                        },
                        {
                        "description": "Capital One",
                        "proName": "NYSE:COF"
                        },
                        {
                        "description": "Leidos",
                        "proName": "NYSE:LDOS"
                        },
                        {
                        "description": "Northrop Grumman",
                        "proName": "NYSE:NOC"
                        },
                        {
                        "description": "Google",
                        "proName": "NASDAQ:GOOGL"
                        }
                    ]
                }}
            />}
            {/*
        <div class='header'>
            <p>SPX: 3974.55</p>
            <p>NDX: 12979.1</p>
            <p>DJI: 33072.9</p>
            <p>VIX: 18.86</p>
            <p>DXY: 92.766</p>
            </div>*/}
        </div>

        
    )
}

export default Header