import styles from './ContactsLink.module.scss'
import Link from 'next/link'
const ContactsLink = () => {
  return (
    <Link className={styles.contactsLink} href="#contacts">
      Contacts
    </Link>
  )
}
export default ContactsLink
