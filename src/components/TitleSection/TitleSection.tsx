import styles from './TitleSection.module.scss'
const TitleSection = () => {
  return (
    <section className={styles.groupTitles}>
      <h1 className={styles.groupTitles__title}>Feel in Italy with our restaurant</h1>
      <p className={styles.groupTitles__subtitle}>You can feel happy with us</p>
    </section>
  )
}
export default TitleSection
