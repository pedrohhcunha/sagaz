import styles from './styles.module.scss'

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import mook from '../../mocks/index.mook'

interface Props {
  align?: 'left' | 'center' | 'right'
}

export function SocialMedia(props: Props): JSX.Element {
    return (
        <div className={styles.socialMedia} style={{
            justifyContent: props.align === 'left' ? 'flex-start' : props.align === 'center' ? 'center' : 'flex-end',
            alignSelf: props.align === 'left' ? 'flex-start' : props.align === 'center' ? 'center' : 'flex-end'
        }}>
          <a className={styles.socialMediaLink} href={mook.finalSection.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={22} />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} />
          </a>
          <a className={styles.socialMediaLink} href={mook.finalSection.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} />
          </a>
        </div>
    )
}