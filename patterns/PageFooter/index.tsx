import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
const PageFooter = ({
    href=`https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app`
}) => {
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