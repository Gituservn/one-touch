import styles from './Navigations.module.scss'
const Navigations = () => {
  return (
    <nav className={styles.navigations}>
      <ul className={styles.navigations_list}>
        <li className={styles.navigations_list__item}>
          <a className={styles.link} href="/menu">
            Menu
          </a>
        </li>
        <li className={styles.navigations_list__item}>
          <a className={styles.link} href="/">
            Home
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Navigations
