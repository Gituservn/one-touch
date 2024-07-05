import truncateInstructions from '@/utils/truncateInstructions'
import styles from '../../pages/Menu/Menu.module.scss'
import { Meal } from '@/hooks/useMeals'
import Image from 'next/image'

const MealItem = ({ meal }: { meal: Meal }) => (
  <li className={styles.menu__root_list_item}>
    <Image
      className={styles.menu__root_list_image}
      src={meal.strMealThumb} alt={meal.strMeal} width={538} height={400} />
    <div className={styles.menu__root_list_content}>
      <h3 className={styles.menu__root_list_content_title}>{meal.strMeal}</h3>
      <p className={styles.menu__root_list_content_instructions}>
        {truncateInstructions(meal.strInstructions)}
      </p>
    </div>
  </li>
)

export default MealItem
