import truncateInstructions from '@/utils/truncateInstructions'
import styles from '../../pages/Menu/Menu.module.scss'
import { Meal } from '@/hooks/useMeals'
import Image from 'next/image'
import { useMediaQuery } from 'usehooks-ts'

const MealItem = ({ meal }: { meal: Meal }) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 870px)')

  return (
    <li className={styles.menu__root_list_item}>
      {isSmallDevice ? (
        <h3 className={styles.menu__root_list_content_title}>{meal.strMeal}</h3>
      ) : null}
      <Image
        className={styles.menu__root_list_image}
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width={538}
        height={255}
        layout={isSmallDevice ? 'responsive' : 'undefined'}
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
  )
}

export default MealItem
