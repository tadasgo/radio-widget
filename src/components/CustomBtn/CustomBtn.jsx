/* eslint-disable react/prop-types */
import React from 'react'
import { btn } from './CustomBtn.module.css'

const CustomBtn = ({ children, ...props }) => (
  <button type="button" className={btn} {...props}>
    {children}
  </button>
)

export default CustomBtn
