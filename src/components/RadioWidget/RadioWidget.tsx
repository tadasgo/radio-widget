import React from 'react'
import { connect } from 'react-redux'
import RadioFooter from '../RadioFooter/RadioFooter'
import RadioHeader from '../RadioHeader/RadioHeader'
import RadioItem from '../RadioItem/RadioItem'
import styles from './RadioWidget.module.css'

interface IProps {
  stations: IStation[]
}

interface IStation {
  id: number
  name: string
  frequency: number
  active: boolean
}

const RadioWidget = ({ stations }: IProps) => {
  const { container, radio, radioList } = styles
  return (
    <div className={container}>
      <div className={radio}>
        <RadioHeader />
        <div className={radioList}>
          {stations.map((station: IStation) => (
            <RadioItem key={station.id} station={station} />
          ))}
        </div>
        <RadioFooter stations={stations} />
      </div>
    </div>
  )
}

// fix later
const mapStateToProps = (state: any) => ({
  stations: state.stations.stations,
})

export default connect(mapStateToProps)(RadioWidget)
