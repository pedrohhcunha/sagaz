import { FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.scss'

interface Props {
    phone: string
}

export function WhatsappButton({ phone }: Props) {

    // remove all non-numeric characters and spaces from phone number
    const cleanNumber = phone.replace(/\D/g, '').replace(/\s/g, '')

    const whatsappLink = `https://api.whatsapp.com/send?phone=${cleanNumber}`

    const onClick = () => {
        window.open(whatsappLink, '_blank')
    }
    
    return (
        <button className={styles.button} onClick={onClick}>
            <FaWhatsapp size={32} />
        </button>
    )
}