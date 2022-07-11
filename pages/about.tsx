import React from 'react'
import Page from '../patterns/Page'
import useFetch from '../hooks/useFetch'

const About = () => {
  const {isLoading, data, error} = useFetch(`https://randomuser.me/api/`)

  
  return <Page content={<>
    {
      data.map((d:any)=><div key={d.name.first}>{d.name.first}</div>)
    }
  </>}/>
}

export default About