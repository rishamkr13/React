import {useState, useEffect} from "react"


function useCurrencyInfo(currency){  //here useCurrencyInfo is custom hook
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res.rates))
        .catch((error) => {
        console.error("Currency API Error:", error);
      });
    },[currency])
    return data;
}
export default useCurrencyInfo;