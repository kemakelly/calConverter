import { useEffect, useState } from "react"
import "./Converter.css"
import { PiSwapThin } from "react-icons/pi";
import CurrenySelect from "./CurrenySelector";



export default function Converter() {
  const [ fromCurrency, setFromCurrency] = useState("USD")
  const [ toCurrency, setToCurrency] = useState("CZK")
  const [ amount, setAmount] = useState("")
  const [result,setResult] = useState("")
  const [isLoading,setIsLoading] = useState(false)


  const handleSwapCurrency = () =>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    const Api_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true)

    try {
      const response = await fetch(Api_URL);
      if (!response.ok) throw Error("Something went wrong");
      const data = await response.json();
      const rate =(data. conversion_rate * amount). toFixed(2)
      setResult(`${amount} ${fromCurrency}= ${rate} ${toCurrency}`)
      console.log(rate);
      console.log("Fetching from URL:", Api_URL);
      
    } catch (error) {
      console.log("Error fetching exchange rate:", error);
    }finally{
      setIsLoading(false)
    }
  }
  
  const handleSubmit =(e)=>{
      e.preventDefault()
      getExchangeRate()
      setAmount("")
      
  }
  useEffect(()=>getExchangeRate,[])

  return (
    <div className="converter">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label className="formLabel">Enter Amount</label>
          <input type="number" 
          name="formInput"
           id="formInput"
           value={amount}
           onChange={(e)=>setAmount(e.target.value)}
           required
           />
        </div>
        <div className="formsection">
          <div className="currencyselects">
              <label className="formlabel">From</label>
              <CurrenySelect
               selectedCurrency = {fromCurrency}
               handleCurrency={e=>setFromCurrency(e.target.value)}
              />
          </div>
          <div className="swap" onClick={handleSwapCurrency}>
            <PiSwapThin />
          </div>
          <div className="currencyselects">
              <label className="formlabel">To</label>
              <CurrenySelect
               selectedCurrency = {toCurrency}
               handleCurrency={e=>setToCurrency(e.target.value)}
              />
          </div>
        </div>
       
       <button type="submit" className={`${isLoading ? "loading":""}submitbut`}>
        Get Exchange Rate
       </button>
       {result && (
          <div className="exchangeresult">
            <p>{isLoading ? "Getting exchange rate..." : result}</p>
          </div>
        )}
      </form>
      
    </div>
  )
}
