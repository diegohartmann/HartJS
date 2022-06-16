import { useEffect } from 'react';
import theme from "../lib/enums/theme"
import useSelector from "./useSelector"
const useTheme = (_theme:theme) => {
    const html = useSelector(`html`); 
    useEffect(()=>{
        html?.setAttribute(`data-theme`, _theme)
        //eslint-disable-next-line
    },[])
}
export default useTheme