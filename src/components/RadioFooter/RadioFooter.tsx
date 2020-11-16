import React from 'react'
import {
  SingleStationState,
  StationsState,
} from '../../redux/stations/stations.reducer'
import styles from './RadioFooter.module.css'

const RadioFooter = ({ stations }: StationsState) => {
  const activeStation = stations.find(
    (station: SingleStationState) => station.active === true,
  )
  const { container, surtitle, title } = styles
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
