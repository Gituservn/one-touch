'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import MealItem from '@/components/MealItem/MealItem'
import useFetchMeals, { Meal } from '@/hooks/useMeals'
import truncateInstructions from '@/utils/truncateInstructions'

import styles from './Menu.module.scss'

const Menu = () => {
  const { meals, loading } = useFetchMeals()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([])


  const handleSearch = () => {
    if (searchTerm) {
      const filtered = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredMeals(filtered)
    } else {
      setFilteredMeals([])
    }
  }


  if (loading) {
    return <div className={styles.menu__loading}>Loading...</div>
  }

  const renderMeals = () => {
    if (filteredMeals.length > 0) {
      return filteredMeals.map((meal: Meal) => <MealItem key={meal.idMeal} meal={meal} />)
    } else {
      return meals.map((meal: Meal) => (
        <li key={meal.idMeal} className={styles.menu__root_list_item}>
          <Image
            className={styles.menu__root_list_image}
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={538}
            height={400}
          />
          <div className={styles.menu__root_list_content}>
            <h3 className={styles.menu__root_list_content_title}>{meal.strMeal}</h3>
            <p className={styles.menu__root_list_content_instructions}>
              {truncateInstructions(meal.strInstructions)}
            </p>
          </div>
        </li>
      ))
    }
  }


  return (
    <section className={styles.menu}>
      <div className={styles.menu__root}>
        <div className={styles.menu__root_header}>
          <h2 className={styles.menu__root_title}>Menu</h2>
        </div>
        <div className={styles.menu__root_search}>
          <input
            className={styles.menu__root_search_input}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.menu__root_search_button} onClick={handleSearch}>
            Search
          </button>
        </div>
        <ul className={styles.menu__root_list}>{renderMeals()}</ul>
      </div>
    </section>
  )
}

export default Menu
