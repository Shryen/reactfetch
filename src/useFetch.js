import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((results) => {
          setIsLoading(false);
          setData(results);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
    }, [url]);
 
    return {data, isLoading, errorMessage};
}