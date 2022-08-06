import styles from './styles.module.scss'

export function RegisterForm({ buttonText }: { buttonText: string }) {
    return (
        <form className={styles.form}>
            <button className={styles.button}>{buttonText}</button>
        </form>
    )
}