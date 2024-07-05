import { FaSquareTwitter } from 'react-icons/fa6'
import { IoLogoFacebook } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import styles from './SocialIcons.module.scss'
const SocialIcons = () => {
  return (
    <div className={styles.iconsGroup}>
      <FaSquareTwitter size="28" />
      <IoLogoFacebook size="28" />
      <FaInstagram size="28" />
    </div>
  )
}
export default SocialIcons
