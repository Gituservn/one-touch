import Image from 'next/image'
import styles from './MenuItem.module.scss'
interface MenuItemProps {
  title: string
  desc: string
  img: string
}
const MenuItem = ({ title, desc, img }: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <div>
        <Image src={img} alt="" width={500} height={274} />
      </div>
      <div className={styles.menuItem__info}>
        <h2 className={styles.menuItem__info_title}>{title}</h2>
        <p className={styles.menuItem__info_desc}>{desc}</p>
      </div>
    </div>
  )
}
export default MenuItem
