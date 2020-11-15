import React from 'react'
import backArrow from '../../assets/back-arrow.png'
import switchBtn from '../../assets/switch.png'
import CustomBtn from '../CustomBtn/CustomBtn'
import { container, header } from './RadioHeader.module.css'

const RadioHeader = () => (
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

export default RadioHeader
