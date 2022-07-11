import React from 'react'
import type { NextPage } from 'next'
import styles from './styles.module.css'
import DocHead from '../DocHead'
import PageFooter from '../PageFooter'
import theme from '../../lib/enums/theme'
interface props{
  documentTheme?: theme,
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
  // documentTheme = theme.contemp,
  // documentTheme = theme.deep,
  documentTheme = theme.simple,
  //HEAD
  docHeadAuthor=`Diego Hartmann`,
  docHeadIcon=`/favicon.ico`,
  docHeadTitle=`Hartt Template`,
  docHeadDescription=`Project using NextJS Template "HartJS" from https://github.com/diegohartmann/HartJS`,
  //CONTENT
  content=<div>Page Content</div>,
  //FOOTER
  footerHref=`https://github.com/diegohartmann/HartJS`,
  footerImageUrl=`/vercel.svg`,
  footerImageAlt=`Vercel Logo`,
  footerImageWidth=72,
  footerImageHeight=16,
}) => {
  
  return (

    <div className={styles.container}>
      
      <DocHead
        title={docHeadTitle}
        icon={docHeadIcon}
        description={docHeadDescription}
        author={docHeadAuthor}/>

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
