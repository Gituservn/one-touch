'use client'

import styles from './PreviewList.module.scss'
import Button from '@/components/Button/Button'
import useFetchMeals, { Meal } from '@/hooks/useMeals'
import MealItem from '@/components/MealItem/MealItem'

const PreviewList = () => {
  const { meals, loading } = useFetchMeals()

  const randomMeals = meals.sort(() => Math.random() - Math.random()).slice(0, 3)
  return (
    <section className={styles.menuList}>
      <h2 className={styles.menuList__title}>Menu</h2>
      {randomMeals.map((meal: Meal) => (
        <MealItem meal={meal} key={meal.idMeal} />
      ))}
      <Button text="MORE" />
    </section>
  )
}
export default PreviewList
