import type { NextPage } from 'next'
import styles from '../styles/index.module.scss'
import mook from '../mocks/index.mook'
import { RegisterForm } from '../components/RegisterForm'
import { WhatsappButton } from '../components/WhatsappButton'
import { Button } from '../components/Button'
import Image from 'next/image'
import { SocialMedia } from '../components/SocialMedia'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Sagaz Growth Marketing. Especialista em Máquina de Vendas</title>
      </Head>
      <section className={styles.initialSection}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="logo" layout='fill' objectFit='fill' />
        </div>
        <h1>
            <pre className={styles.title} dangerouslySetInnerHTML={{
              __html: mook.initialSection.title
            }}></pre>
        </h1>
        <h2>
            <pre className={styles.subTitle} dangerouslySetInnerHTML={{
              __html: mook.initialSection.subTitle
            }}></pre>
        </h2>
        <p>
            <pre className={styles.description} dangerouslySetInnerHTML={{
              __html: mook.initialSection.callToAction
            }}></pre>
        </p>
        <Button>{mook.initialSection.buttonText}</Button>
      </section>
      <section className={styles.videoSection}>
        <h2>
            <pre className={styles.title} dangerouslySetInnerHTML={{
              __html: mook.videoSection.title
            }}></pre>
        </h2>
        <div className={styles.video}>
          <iframe
            className={styles.iframe}
            title="video de apresentação SAGAZ GROWT"
            src={mook.videoSection.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <Button>{mook.videoSection.buttonText}</Button>
      </section>
      <section className={styles.formSection}>
        <p className={styles.description} dangerouslySetInnerHTML={{
          __html: mook.formSection.callToAction
        }}></p>
        <RegisterForm
          buttonText={mook.formSection.form.buttonText}
        />
      </section>
      <section className={styles.finalSection}>
        <div className={styles.photoArea}>
          <Image priority layout='fill' className={styles.photo} src={mook.finalSection.photo} alt={mook.finalSection.photoAlt} />
        </div>
        <div className={styles.text}>
          {mook.finalSection.description.map((text, index) => {
            return (
              <p key={index} className={styles.paragraph} dangerouslySetInnerHTML={{
                __html: text
              }}></p>
            )
          })}
        </div>
        <SocialMedia
          align="left"
        />
      </section>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image src="/simbolo.svg" alt="logo" layout='fill' objectFit='fill' />
        </div>
        <span className={styles.text}>{mook.footer.text}</span>
      </footer>
      <WhatsappButton
        phone={mook.whatsappButton.phone}
      />
    </main>
  )
}

export default Home
