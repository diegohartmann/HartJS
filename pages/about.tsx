import React from 'react'
import Page from '../patterns/Page'
import * as lib from '../lib'
import CountrySelector from '../components/Selectors/CountrySelector'
const About = () => {
  return <Page content={<>
    <CountrySelector onChange={(e:any)=>{
      if(e.target.innerText){
        console.log( lib.getLastElementFrom(e.target.innerText.split(`+`)) )
      }
    }}/>
  </>}/>
}

export default About