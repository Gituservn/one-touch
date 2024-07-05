import MenuItem from '@/components/MenuItem/MenuItem'
import styles from './MenuList.module.scss'
import Button from '@/components/Button/Button'
const MenuList = () => {
  return (
    <section className={styles.menuList}>
      <h2 className={styles.menuList__title}>Menu</h2>
      <MenuItem />
      <Button text="MORE" />
    </section>
  )
}
export default MenuList
