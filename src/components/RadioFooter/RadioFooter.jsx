/* eslint-disable react/prop-types */
import React from 'react'
import { container, surtitle, title } from './RadioFooter.module.css'

const RadioFooter = ({ stations }) => {
  const activeStation = stations.find((station) => station.active === true)
  if (activeStation) {
    return (
      <div className={container}>
        <p className={surtitle}>Currently playing</p>
        <p className={title}>{activeStation.name}</p>
      </div>
    )
  }
  return <div className={container}></div>
}

export default RadioFooter
