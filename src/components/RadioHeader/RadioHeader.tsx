import React from 'react'
import backArrow from '../../assets/back-arrow.png'
import switchBtn from '../../assets/switch.png'
import CustomBtn from '../CustomBtn/CustomBtn'
import styles from './RadioHeader.module.css'

const RadioHeader = () => {
  const { container, header } = styles
  return (
    <div className={container}>
      <CustomBtn>
        <img src={backArrow} alt="Arrow button pointing to the left" />
      </CustomBtn>
      <h1 className={header}>Stations</h1>
      <CustomBtn>
        <img src={switchBtn} alt="Turn off button" />
      </CustomBtn>
    </div>
  )
}

export default RadioHeader
