//add button props and types

import styles from './Button.module.scss'

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return <button className={styles.button}>{text}</button>
}
export default Button
