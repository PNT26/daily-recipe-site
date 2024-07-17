import { useEffect, useState } from 'react';

export default function useFetch(url: string) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
               return res.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsLoading(!isLoading);
              setError(null);
            })
            .catch((error) => {
              setError(error)
              console.log(error);
            });
        }, 500);
    }, [url]);

    return { data, isLoading, error }
}