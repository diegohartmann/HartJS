import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import DocHead from '../../components/DocHead'
import PageFooter from '../../components/PageFooter'

interface props{
    content: JSX.Element,
}

const Page: NextPage <props> = ({
    content=<div></div>,
}) => {
  return (
    
    <div className={styles.container}>
      
      <DocHead/>

      <main className={styles.main}>
        {content}
       
      </main>

      <PageFooter/>
      
    </div>
  )
}

export default Page
