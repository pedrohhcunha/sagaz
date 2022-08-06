import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.scss'
import mook from '../mocks/index.mook'
import { RegisterForm } from '../components/RegisterForm'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { WhatsappButton } from '../components/WhatsappButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <section className={styles.initialSection}>
        <h1 className={styles.title}>{mook.initialSection.title}</h1>
        <h2 className={styles.subtitle}>{mook.initialSection.subTitle}</h2>
        <p className={styles.description}>{mook.initialSection.callToAction}</p>
        <button className={styles.button}>{mook.initialSection.buttonText}</button>
      </section>
      <section className={styles.videoSection}>
        <h2 className={styles.title}>{mook.videoSection.title}</h2>
        <div className={styles.video}>
          <iframe title="video" src={mook.videoSection.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <button className={styles.button}>{mook.videoSection.buttonText}</button>
      </section>
      <section className={styles.formSection}>
        <p className={styles.description}>{mook.formSection.callToAction}</p>
        <RegisterForm
          buttonText={mook.formSection.form.buttonText}
        />
      </section>
      <section className={styles.finalSection}>
        <div className={styles.photoArea}>
          <img className={styles.photo} src={mook.finalSection.photo} alt={mook.finalSection.photoAlt} />
        </div>
        <p className={styles.description}>{mook.finalSection.description}</p>
        <div className={styles.socialMedia}>
          <a className={styles.socialMediaLink} href={mook.finalSection.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>{mook.footer.text}</span>
      </footer>
      <WhatsappButton
        phone={mook.whatsappButton.phone}
      />
    </>
  )
}

export default Home
