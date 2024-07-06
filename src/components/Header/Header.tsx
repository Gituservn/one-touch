'use client'
import Navigations from '@/components/Navigations/Navigations'
import Logo from '@/components/Logo/Logo'
import SocialIcons from '@/components/SocialIcons/SocialIcons'
import styles from './Header.module.scss'
import ContactsLink from '@/components/ContactsLink/ContactsLink'
import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isSmallDevice = useMediaQuery('only screen and (max-width : 865px)')
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <header>
      <div className={styles.header}>
        <Navigations />
        <Logo />
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <div className={styles.close}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
            </div>
          ) : (
            <>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </>
          )}
        </div>
        <ContactsLink />
        <div className={styles.header__icons}>
          <SocialIcons />
        </div>

        {isOpen && (
          <div ref={menuRef} className={styles.hamburgerMenu}>
            <div className={styles.hamburgerMenu__list} onClick={closeMenu}>
              <Navigations mobile={true} />
              <ContactsLink mobile={true} />
            </div>
            <div className={styles.contacts}>
              <p className={styles.contacts__phone}>+380 (77) 77 77 777</p>
              <SocialIcons />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
