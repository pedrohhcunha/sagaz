import axios from 'axios'
import { FormEvent, FormEventHandler, useState } from 'react'
import { Button } from '../Button'
import styles from './styles.module.scss'

interface FormData {
    name: string
    email: string
    phone: string
}

export function RegisterForm({ buttonText }: { buttonText: string }) {

    const [isSending, setIsSending] = useState<boolean>(false)
    
    const [formData, setFormData] = useState<FormData>({} as FormData)

    async function sendData(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        setIsSending(true)

        const response = await axios.post('/api/register', formData)

        if(response.status === 200) {
            setIsSending(false)
            setFormData({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    return (
        <form className={`
            ${styles.form}
            ${isSending ? styles.isSending : ''}
        `} onSubmit={event => sendData(event)}>
            <input
                className={styles.input}
                placeholder='Nome completo'
                value={formData.name}
                type='text'
                name='fullname'
                onChange={event => setFormData({
                    ...formData,
                    name: event.target.value
                })}
            />
            <input
                className={styles.input}
                placeholder='Email'
                type='email'
                name='email'
                value={formData.email}
                onChange={event => setFormData({
                    ...formData,
                    email: event.target.value
                })}
            />
            <input
                className={styles.input}
                placeholder='Whatsapp'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={event => setFormData({
                    ...formData,
                    phone: event.target.value
                })}
            />
            <Button className={styles.button}>{buttonText}</Button>
        </form>
    )
}