import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strInstructions: string
}

const useFetchMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomMeals = async () => {
      const NUMBER_OF_MEALS = 5
      const requests = Array.from({ length: NUMBER_OF_MEALS }, () =>
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php'),
      )
      try {
        const responses = await Promise.all(requests)
        const fetchedMeals = responses.map((response) => response.data.meals.pop())
        setMeals(fetchedMeals)
      } catch (error) {
        console.error('Error fetching random meals', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    fetchRandomMeals()
  }, [])

  return { meals, loading }
}

export default useFetchMeals
