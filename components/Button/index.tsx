import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode
}

export function Button(props: Props) {
    return (
        <button className={styles.button}>
            {props.children}
        </button>
    )
}