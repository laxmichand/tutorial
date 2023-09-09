import { useEffect, useState } from 'react';
// Custom Hook - reusability logic of fetching from url

const useFetch = (url) => {
    
    const [data,setData] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    },[url]);

    return [data];
};

export default useFetch;