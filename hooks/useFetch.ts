/* eslint-disable */
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios'

interface fetchData{
    data: [],
    isLoading: boolean,
    error: boolean
}
const useFetch = (url:string) => {
    const [fetchedData, setFetchedData] = useState({
        data:[],
        isLoading: true,
        error: false
    })

    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = useCallback(async()=>{
        try{
            // const response = await axios.get(url, {cancelToken: cancelTokenSource.token})
            const response = await axios.get(url)
            const data = await response.data;
            if(data){
                setFetchedData({
                    data: data.results || data,
                    isLoading: false,
                    error: false,
                })
            }
        }catch(e){
            if(axios.isCancel(e)){
                console.log(`Fetching data aborted: `, e);
            }else{
                console.log(`Error ocurred: `, e);
            }
            setFetchedData({
                data: [],
                isLoading: false,
                error: true,
            })
        }
    }, [url])

    useEffect(()=>{
        fetchData();
        return ()=> cancelTokenSource.cancel();
    }, [url, fetchData])

    const {data, isLoading, error} = fetchedData

    return {data, isLoading, error}

}

export default useFetch