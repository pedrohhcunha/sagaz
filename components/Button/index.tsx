import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode
    className: string
}

export function Button(props: Props) {
    return (
        <button className={`
            ${styles.button}
            ${styles.className}
        `}>
            {props.children}
        </button>
    )
}