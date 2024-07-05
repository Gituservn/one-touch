import Image from 'next/image'
import styles from './AboutUs.module.scss'
const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__textWrapper}>
        <h2 className={styles.aboutUs__textWrapper_title}>About Us</h2>
        <p className={styles.aboutUs__textWrapper_desc}>
          I`m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add your own content and make changes to the font. Feel free
          to drag and drop me anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. This is a great space to write long
          text about your company and your services. <br /> <br /> I`m a paragraph. Click here to
          add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add
          your own content and make changes to the font. Feel free to drag and drop me anywhere you
          like on your page. I’m a great place for you to tell a story and let your users know a
          little more about you. This is a great space to write long
        </p>
      </div>
      <div className={styles.aboutUs__imageWrapper}>
        <Image src="/images/chef.webp" alt="chef" width={500} height={300} />
      </div>
    </section>
  )
}
export default AboutUs
