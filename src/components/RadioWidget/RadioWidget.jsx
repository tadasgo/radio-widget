/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import RadioFooter from '../RadioFooter/RadioFooter'
import RadioHeader from '../RadioHeader/RadioHeader'
import RadioItem from '../RadioItem/RadioItem'
import { container, radio, radioList } from './RadioWidget.module.css'

const RadioWidget = ({ stations }) => (
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

const mapStateToProps = (state) => ({
  stations: state.stations.stations,
})

export default connect(mapStateToProps)(RadioWidget)
