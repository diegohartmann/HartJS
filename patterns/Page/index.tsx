import React from 'react'
import type { NextPage } from 'next'
import styles from './styles.module.css'
import DocHead from '../DocHead'
import PageFooter from '../PageFooter'

interface props{
  //HEAD
  docHeadTitle?: string,
  docHeadIcon?: string,
  docHeadDescription?: string,
  docHeadAuthor?: string,
  //CONTENT
  content?: JSX.Element,
  //FOOTER
  footerHref?:string,
  footerImageUrl?:string,
  footerImageAlt?:string,
  footerImageWidth?:number,
  footerImageHeight?:number,
}

const Page: NextPage <props> = ({
  //HEAD
  docHeadAuthor=`Diego Hartmann`,
  docHeadIcon=`favicon.ico`,
  docHeadTitle=`Hartt Template`,
  docHeadDescription=`Project using Hartt NextJS Template from https://github.com/diegohartmann/hartt-template`,
  //CONTENT
  content=<div>Page Content</div>,
  //FOOTER
  footerHref=`https://github.com/diegohartmann/hartt-template`,
  footerImageUrl=`/vercel.svg`,
  footerImageAlt=`Vercel Logo`,
  footerImageWidth=72,
  footerImageHeight=16,
}) => {
  return (
    
    <div className={styles.container}>
      
      <DocHead title={docHeadTitle} icon={docHeadIcon} description={docHeadDescription} author={docHeadAuthor}/>

      <main className={styles.main}>
        {content}
      </main>

      <PageFooter 
        href={footerHref}
        imageUrl={footerImageUrl}
        imageAlt={footerImageAlt}
        imageWidth={footerImageWidth}
        imageHeight={footerImageHeight}
      />
      
    </div>
  )
}

export default Page
