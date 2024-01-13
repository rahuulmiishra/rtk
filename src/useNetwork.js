import { useState, useEffect } from "react";


function useNetwork(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(()=> {

            setIsLoading(true);

            fetch(url).then(res => res.json()).then(data => {
                setTimeout(()=> {
                  setData(data?.name);
                 setIsLoading(false);
                },2000);
            });

    },[]);


    return {isLoading, data};

}

export default useNetwork;


