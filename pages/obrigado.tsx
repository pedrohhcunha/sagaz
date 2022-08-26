import { SocialMedia } from '../components/SocialMedia'
import styles from '../styles/obrigado.module.scss'

export default function Obrigado() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Obrigado!</h1>
            <p className={styles.description}>Em breve entraremos em contato.</p>
            <SocialMedia
                align="center"
            />
        </main>
    )
}