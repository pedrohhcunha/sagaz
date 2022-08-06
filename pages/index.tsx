import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.scss'
import mook from '../mocks/index.mook'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <section>
        <h1>Hello World</h1>
      </section>
      <footer className={styles.footer}>
        <span>{mook.footer.text}</span>
      </footer>
    </>
  )
}

export default Home
