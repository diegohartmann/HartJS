import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
interface props{
    href:string,
    imageUrl:string,
    imageAlt:string,
    imageWidth:number,
    imageHeight:number

}
const PageFooter = ({ href } : props) => {
  return (
    <footer className={styles.footer}>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
        </a>
    </footer>
  )
}

export default PageFooter