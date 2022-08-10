import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode
    submit?: boolean
}

export function Button(props: Props) {

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        if(!props.submit) alert('O botão foi clicado')
    }
    
    return (
        <button className={styles.button} type={props.submit ? 'submit' : 'button'} onClick={onClick}>
            {props.children}
        </button>
    )
}