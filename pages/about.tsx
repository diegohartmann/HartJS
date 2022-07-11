import { Button } from '@mui/material'
import React from 'react'
import Page from '../patterns/Page'

const About = () => {
  return <Page content={<>

    <Button variant="text">Text</Button>
   <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </>}/>
}

export default About