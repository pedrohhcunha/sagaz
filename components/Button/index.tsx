import { FormEvent } from 'react'
import styles from './styles.module.scss'

interface Props {
    children: React.ReactNode
    onClick?: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export function Button(props: Props) {

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        if(!props.onClick) {
            event.preventDefault()
            
            const form = document.querySelector('#form')
            form?.scrollIntoView({ behavior: 'smooth' })

            return
        }
    }
    
    return (
        <button className={styles.button} type={props.onClick ? 'submit' : 'button'} onClick={onClick}>
            {props.children}
        </button>
    )
}