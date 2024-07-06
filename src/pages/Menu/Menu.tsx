'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import MealItem from '@/components/MealItem/MealItem'
import useFetchMeals, { Meal } from '@/hooks/useMeals'
import truncateInstructions from '@/utils/truncateInstructions'

import styles from './Menu.module.scss'
import Loader from '@/components/Loader/Loader'

const Menu = () => {
  const { meals, loading } = useFetchMeals()
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([])
  const isSmallDevice = useMediaQuery('only screen and (max-width : 870px)')
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
    return <Loader />
  }
  //set auto height image
  const renderMeals = () => {
    if (filteredMeals.length > 0) {
      return filteredMeals.map((meal: Meal) => <MealItem key={meal.idMeal} meal={meal} />)
    } else {
      return meals.map((meal: Meal) => (
        <li key={meal.idMeal} className={styles.menu__root_list_item}>
          {isSmallDevice ? (
            <h3 className={styles.menu__root_list_content_title}>{meal.strMeal}</h3>
          ) : null}
          <Image
            className={styles.menu__root_list_image}
            src={meal.strMealThumb}
            alt={meal.strMeal}
            layout={isSmallDevice ? 'responsive' : 'undefined'}
            width={538}
            height={275}
          />

          <div className={styles.menu__root_list_content}>
            {!isSmallDevice ? (
              <h3 className={styles.menu__root_list_content_title}>{meal.strMeal}</h3>
            ) : null}
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
