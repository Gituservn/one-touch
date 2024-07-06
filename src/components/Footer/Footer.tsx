import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        {}
        <div className={styles.footer__wrapper_section}>
          <h4 className={styles.title}>Opening hours</h4>
          <p>Mon - Sat: 11:00 - 23:00</p>
          <p>Sun: 11:00 - 19:00</p>
          <p>Food in the restaurant and takeaway!</p>
        </div>
        <div className={styles.footer__wrapper_section}>
          <h4 className={styles.title}>Location</h4>
          <p>130 Fulton St., </p>
          <p>New York</p>
          <p>NY 10038, USA</p>
        </div>
        <div id="contacts" className={styles.footer__wrapper_section}>
          <h4 className={styles.title}>Social</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <p className={styles.footer__copyright}>Copyright ©2021 by Bonbons Chocolate</p>
    </footer>
  )
}

export default Footer
