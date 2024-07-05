import styles from './Logo.module.scss'
import { italiano } from '@/assets/fonts/fonts'

const Logo = () => {
  return (
    <div className={italiano.className}>
      <h2 className={styles.logo}>Selve Restourant</h2>
    </div>
  )
}
export default Logo
