import React from 'react'
import styles from './Wrapper.module.scss'
type WrapperProps = {
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
