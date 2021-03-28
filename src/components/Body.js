import {useState,useEffect} from 'react'
import axios from 'axios'

import Chart from "./Chart"
import Result from "./Result"

import marketstackkey from "./../apikey"

import '../style/bodystyle.css'

const Body = () => {
    const [searchtext,setSearchtext] = useState("")
    const [selectedtext,setSelectedtext] = useState("")
    
    const [expprice,setExpprice] = useState("")
    const [date,setDate] = useState("")

    const [selectedexpprice,setSelectedexpprice] = useState("")
    const [selecteddate,setSelecteddate] = useState("")
    
    const [stockprice,setStockprice] = useState(-1)

    const submitparams = () => {
        setSelectedexpprice(expprice)
        setSelecteddate(date)
    }

    const showstock = () => {
        setSelectedtext(searchtext)
        //window.location.reload()
    }

    return (
        <div class='body'>
            
            <div class='toppart'>
                <h1 class='title'>Opt-Win</h1>
                <h2 class='subtitle'>Find the most optimal options here!</h2>
            </div>

            <div>
                
                    <input class='searchbox' type='text' value={searchtext} placeholder='Search any ticker' onChange={(e) => {setSearchtext(e.target.value)}} />
                    <button class='submitsearch' onClick={() => {showstock()}}>Show</button>     
                
                
            </div>
            
            <Chart ticker={selectedtext} stockprice={stockprice} setStockprice={setStockprice} />
            
            <div class='form'>
                <div class='priceinput'>
                    <label>Estimated Stock Price:</label>
                    <input class='pricebox' type='text' value={expprice} placeholder='100.00' onChange={(e) => {setExpprice(e.target.value)}} /> 
                </div>
                <div class='dateinput'>
                    <label>Date:</label>
                    <input class='datebox' type='date' value={date} onChange={(e) => {setDate(e.target.value)}} />   
                </div>
                <button class='submitparams' onClick={submitparams}>Go</button> 
            </div>
            
            <Result ticker={selectedtext} pricestring={selectedexpprice} date={selecteddate} currentprice={stockprice}/>
            
        </div>
    )
}

export default Body