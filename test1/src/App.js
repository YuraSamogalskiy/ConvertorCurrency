import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import CardCurrency from './components/CardCurrency'

function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)
  const [rates, setRates] = useState({})
  // console.log(rates[toCurrency].value)
  console.log(fromPrice)
  useEffect(() => {
    fetch(
      'https://api.currencyapi.com/v3/latest?apikey=RSZqgTVEp7auIBBw0Ab6W6XzPRbg4bYPEABdiFTb'
    )
      .then((res) => res.json())
      .then((json) => {
        setRates(json.data)
        // console.log(json.data)
      })

      .catch((err) => {
        console.warn(err)
        alert('Error data Currency')
      })
  }, [])

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency].value
    const result = price * rates[toCurrency].value
    setToPrice(result)
    setFromPrice(value)
  }
  const onChangeToPrice = (value) => {
    const priceForSecondInput =
      (rates[fromCurrency].value / rates[toCurrency].value) * value
    setFromPrice(priceForSecondInput)
    setToPrice(value)
  }

  // if (fromPrice != undefined) {
  //   useEffect(() => {
  //     onChangeFromPrice(fromPrice)
  //   }, [fromCurrency, fromPrice])
  // }

  // useEffect(() => {
  //   onChangeToPrice(toPrice)
  // }, [toCurrency, toPrice])

  return (
    <div className="App">
      <div className="container">
        <div className="backCard">
          <CardCurrency
            value={fromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangeValue={onChangeFromPrice}
          />
          <CardCurrency
            value={toPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangeValue={onChangeToPrice}
          />
        </div>
      </div>
    </div>
  )
}

export default App
