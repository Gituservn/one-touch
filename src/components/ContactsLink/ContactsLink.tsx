import styles from './ContactsLink.module.scss'
import Link from 'next/link'
import { NavigationsProps } from '@/components/Navigations/Navigations'
const ContactsLink = ({ mobile }: NavigationsProps) => {
  return (
    <Link className={mobile ? styles['contactsLink-mobile'] : styles.contactsLink} href="#contacts">
      Contacts
    </Link>
  )
}
export default ContactsLink
