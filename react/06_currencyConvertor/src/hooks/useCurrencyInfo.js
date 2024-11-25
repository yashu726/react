import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/d68cccadee274fc38757ba41/latest/${currency}`
    )
      .then((res) => res.json())
     .then((res) => {
        console.log(data);
        setData(res.conversion_rates);
      });
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
