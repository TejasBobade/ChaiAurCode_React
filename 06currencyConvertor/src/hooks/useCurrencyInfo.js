import { useEffect , useState } from "react"

// we designed a functionality and returned the method itself
// In use state similar thing happens entier method get called , this method is returning data 
function useCurrencyInfo(currency){
    // this hook return value directly using useState
    const [data , setData] = useState({})
    // we want to call this hook or api when somebody use it or load it
    // Which hook we can use when an component get invoked it mount, when an component life cycle effect get triggered , we have an hook which is useEffect
    // It need to things callback and dependensies array -> if there is some changes in this things it will call the api again
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    console.log(data)
    return data
};

export default useCurrencyInfo;