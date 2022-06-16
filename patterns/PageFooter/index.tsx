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
const PageFooter = ({ href, imageUrl, imageAlt, imageWidth, imageHeight } : props) => {
  return (
    <footer className={styles.footer}>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src={imageUrl} alt={imageAlt} width={imageWidth} height={imageHeight} />
            </span>
        </a>
    </footer>
  )
}

export default PageFooter