import Navigations from '@/components/Navigations/Navigations'
import Logo from '@/components/Logo/Logo'
import SocialIcons from '@/components/SocialIcons/SocialIcons'
import styles from './Header.module.scss'
import ContactsLink from '@/components/ContactsLink/ContactsLink'

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigations />
      <Logo />
      <ContactsLink />
      <SocialIcons />
    </header>
  )
}
export default Header
