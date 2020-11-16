import React, { MouseEventHandler } from 'react'
import styles from './CustomBtn.module.css'

interface Props {
  onClick: MouseEventHandler
  children: React.ReactNode
}

const CustomBtn = ({ children, onClick }: Props) => (
  <button type="button" className={styles.btn} onClick={onClick}>
    {children}
  </button>
)

export default CustomBtn
