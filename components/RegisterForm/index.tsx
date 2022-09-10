import axios from 'axios'
import { FormEvent, useState } from 'react'
import { isValidEmail } from '../../utils/isValidEmail'
import { removeNonNumericCharacters } from '../../utils/removeNonNumericCharacters'
import { Button } from '../Button'
import { Input } from '../Input'
import styles from './styles.module.scss'

interface FormData {
    name: string
    email: string
    phone: string
}

interface FieldError {
    field: string
    message: string
}

export function RegisterForm({ buttonText }: { buttonText: string }) {

    const [isSending, setIsSending] = useState<boolean>(false)
    
    const [formData, setFormData] = useState<FormData>({} as FormData)

    const [errors, setErrors] = useState<FieldError[]>([])

    async function sendData(event: FormEvent<HTMLFormElement>): Promise<void> {

        try{
            
            event.preventDefault()
            setIsSending(true)
    
            const auxErrors: FieldError[] = []
    
            if(!formData.name) {
                auxErrors.push({ field: 'name', message: 'O campo Nome é obrigatório' })
            } else if(formData.name.length <= 2) {
                auxErrors.push({ field: 'name', message: 'O campo Nome deve ter mais de 2 caracteres' })
            }
    
            if(!formData.email) {
                auxErrors.push({ field: 'email', message: 'O campo Email é obrigatório' })
            } else if(!isValidEmail(formData.email)) {
                auxErrors.push({ field: 'email', message: 'Preencha o campo com um email valido' })
            }
            
            if(!formData.phone) {
                auxErrors.push({ field: 'phone', message: 'O campo Telefone é obrigatório' })
            } else if(formData.phone.length <= 8) {
                auxErrors.push({ field: 'phone', message: 'O campo Telefone deve ter mais de 8 caracteres' })
            }
    
            setErrors(auxErrors)
    
            if(auxErrors.length >= 1) return setIsSending(false) 
    
            await axios.post('/api/register', formData)
    
            window.location.href = '/obrigado'
        } catch(error){

            window.alert('Ocorreu um erro ao enviar os dados, tente novamente mais tarde')

            setIsSending(false)
            setFormData({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    return (
        <form id="form" className={`
            ${styles.form}
            ${isSending ? styles.isSending : ''}
        `} onSubmit={sendData}>
            <Input
                placeholder='Nome completo'
                value={formData.name}
                name='fullname'
                error={errors.find(error => error.field === 'name')?.message}
                onChange={event => setFormData({
                    ...formData,
                    name: event.target.value
                })}
            />
            <Input
                placeholder='Email'
                name='email'
                value={formData.email}
                error={errors.find(error => error.field === 'email')?.message}
                onChange={event => setFormData({
                    ...formData,
                    email: event.target.value
                })}
            />
            <Input
                placeholder='Whatsapp'
                name='phone'
                value={formData.phone}
                error={errors.find(error => error.field === 'phone')?.message}
                onChange={event => setFormData({
                    ...formData,
                    phone: removeNonNumericCharacters(event.target.value)
                })}
            />
            <Button onClick={sendData}>{buttonText}</Button>
        </form>
    )
}