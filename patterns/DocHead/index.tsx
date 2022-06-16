import React from 'react'
import Head from 'next/head'

interface props{
  title:string,
  icon:string,
  description:string,
  author:string
}

const DocHead = ({title, icon, description, author}:props) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link rel="icon" href={`/icons/${icon}`} />
    </Head>
  )
}

export default DocHead