import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Coins from '../components/Coins'

import './Coin.css'
import App from '../App'

const Coin = () => {

  const params = useParams()
  const [coin, setCoin] = useState({})

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
        console.log(res.data);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>{coin.name}</h1>
      <p>{coin.market_cap}</p>
    </div>
  )
}

export default Coin