import React from 'react'
import styles from "./Coin.module.css"

export default function Coin({name , image , price , symbol , priceChange , marketCap }) {


    
  return (
    <div className={styles.container}>
        <img  className={styles.image} src={image} alt='img' />
        <span className={styles.name} >{name} </span>
        <span className={styles.symbol} > {symbol.toUpperCase()} </span>
        <span className={styles.price} > $ {price.toLocaleString() } </span>
        <span className={priceChange>0 ?  styles.greenPriceChange : styles.redPriceChange} > {priceChange.toFixed(2)}% </span>
        <span className={styles.marketCap} > $ {marketCap.toLocaleString() } </span>
        
    </div>
  )
}
