import { useEffect, useState } from "react";
// unspoken rule: use USE for hooks

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/8d1f37267eb92cf410fdb671/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setData(res['conversion_rates']));
      console.log(data)
  }, [currency]);
  return data
}

export default useCurrencyInfo
