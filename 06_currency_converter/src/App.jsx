import { useState } from 'react'
import useCurrencyInfo from './hooks/currencyInfo'
import {InputBox} from './components'
import './App.css'

function App() {
  
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('NPR')
  
  const currencyInfo = useCurrencyInfo(fromCurrency) 

  const options = Object.keys(currencyInfo) || []

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  } 

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo ? currencyInfo [toCurrency] : 0))
  }
  
  return (
    <>
      <div className="h-screen w-full bg-gray-200 flex justify-center items-center gap-5">

        <div className="card w-2/3 flex flex-col gap-4 bg-gray-50 p-6 rounded-3xl shadow-xl ">
          <h1 className='text-3xl text-center mb-4 font-bold text-black'>Currency Converter</h1>
          
          <div className="relative flex flex-col gap-4">
            <InputBox
            label="From"
            amount={amount} 
            onAmountChange={setAmount} 
            onCurrencyChange={setFromCurrency} currencyOptions={options} 
            selectedCurrency={fromCurrency} />

            <button 
            className="absolute top-20/47 left-5/11 text-white z-index-100 px-4 py-2  bg-black shadow-xl rounded-xl border-white cursor-pointer hover:opacity-90 active:scale-95"
            onClick={swap}
            >swap</button>

            <InputBox 
              label ="To" amount={convertedAmount} onAmountChange={setConvertedAmount} onCurrencyChange={setToCurrency} currencyOptions={options} 
              selectedCurrency={toCurrency}
              />

          </div>

          <button 
          className='bg-black text-white p-3 px-5 rounded-3xl  mt-3 shadow-xl cursor-pointer hover:opacity-90 active:scale-95'
          onClick={convert}>
            Convert {fromCurrency} to {toCurrency}
            </button>
        </div>

      </div>
    </>
  )
}

export default App
