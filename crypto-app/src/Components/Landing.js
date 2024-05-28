import React, { useEffect } from 'react'
import {getCoin} from '../Services/api'
import { useState } from 'react'
import spinner from '../gif/spinner.gif'
import Coin from './Coin'
import styles from './Landing.module.css'

export default function Landing() {

  const [coins, setCoins] = useState([])
  const [Search , setSearch] = useState("")
////////////////////////////////////////////////////////////
 useEffect(  ()=>{

    const fetchAPI = async () =>{

      const data = await getCoin()
      setCoins(data)
      console.log(data); 
    }
    fetchAPI()

  },[])
///////////////////////////////////////////////////////////////
  const searchHandler=(event)=>{
    setSearch(event.target.value)

  }
///////////////////////////////////////////////////////////////
  const SearchResult=  coins.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <input className={styles.input} type='text' placeholder='Search' value={Search} onChange={searchHandler} />

      {
        coins.length ? 
                  <div className={styles.coinContainer} >
                    {SearchResult.map(coin => 

                          <Coin
                          key={coin.id} 
                          name= {coin.name} 
                          image= {coin.image}
                          symbol= {coin.symbol}
                          price= {coin.current_price}
                          priceChange ={coin.price_change_percentage_24h}
                          marketCap={coin.market_cap}
                          /> ) }
                  </div> 
                     :
                  <div>
                    <img src={spinner} alt='spinner' />
                    <h2>Loading... </h2> 
                  </div>

      }

    </React.Fragment>
  )
}
