import React from 'react'
import { useSelector } from 'react-redux'
import { StationsState } from '../../redux/stations/stations.types'
import RadioFooter from '../RadioFooter/RadioFooter'
import RadioHeader from '../RadioHeader/RadioHeader'
import RadioItem from '../RadioItem/RadioItem'
import styles from './RadioWidget.module.css'

const RadioWidget = () => {
  const { container, radio, radioList } = styles

  // redux hook. Specify value of state and return value
  const stations = useSelector<StationsState, StationsState['stations']>(
    (state) => state.stations,
  )

  return (
    <div className={container}>
      <div className={radio}>
        <RadioHeader />
        <div className={radioList}>
          {stations.map((station) => (
            <RadioItem key={station.id} station={station} />
          ))}
        </div>
        <RadioFooter stations={stations} />
      </div>
    </div>
  )
}

export default RadioWidget
