import React from 'react'
import styles from './RadioFooter.module.css'

interface IProps {
  stations: IStation[]
}

interface IStation {
  id: number
  name: string
  frequency: number
  active: boolean
}

const RadioFooter = ({ stations }: IProps) => {
  const activeStation = stations.find(
    (station: IStation) => station.active === true,
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
