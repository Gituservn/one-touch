'use client'
import Navigations from '@/components/Navigations/Navigations'
import Logo from '@/components/Logo/Logo'
import SocialIcons from '@/components/SocialIcons/SocialIcons'
import styles from './Header.module.scss'
import ContactsLink from '@/components/ContactsLink/ContactsLink'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.header}>
      <Navigations />
      <Logo />
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? (
          <div className={styles.close}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
        ) : (
          <>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </>
        )}
      </div>
      <ContactsLink />
      <div className={styles.header__icons}>
        <SocialIcons />
      </div>

      {isOpen && (
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerMenu__list}>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
          </div>

          <div className={styles.contacts}>
            <p>Contacts</p>
            <p>+380 (77) 77 77 777</p>
            <SocialIcons />
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
