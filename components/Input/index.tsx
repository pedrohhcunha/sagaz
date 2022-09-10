import styles from './styles.module.scss'

interface Props {
    placeholder: string
    value: string
    name: string
    error?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: Props): JSX.Element {

    return (
        <div className={styles.inputContainer}>
            <input
                onChange={props.onChange}
                className={styles.input}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                id={props.name}
            />
            {props.error && <div className={styles.error}>{props.error}</div>}
        </div>
    )
}