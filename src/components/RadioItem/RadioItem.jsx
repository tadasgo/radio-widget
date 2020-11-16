import React from 'react'
import { connect } from 'react-redux'
import { toggleStationAction } from '../../redux/stations/stations.actions'
import CustomBtn from '../CustomBtn/CustomBtn'
import minusBtn from '../../assets/minus.png'
import plusBtn from '../../assets/plus.png'
import {
  container,
  radioFrequency,
  radioItem,
  radioStation,
  radioImg,
  activeItem,
} from './RadioItem.module.css'

const RadioItem = ({ station, toggleStation }) => {
  const { name, frequency, active } = station
  return (
    <div className={container}>
      {active ? (
        <div className={`${radioItem} ${activeItem}`}>
          <CustomBtn>
            <img src={minusBtn} alt="Button with a minus sign" />
          </CustomBtn>
          <CustomBtn onClick={() => toggleStation(station)}>
            <img
              className={radioImg}
              src="https://source.unsplash.com/280x280/?music"
              alt="Icon of the radio station"
            />
          </CustomBtn>
          <CustomBtn>
            <img src={plusBtn} alt="Button with a plus sign" />
          </CustomBtn>
        </div>
      ) : null}
      <div className={radioItem}>
        <div
          role="button"
          tabIndex={0}
          className={radioStation}
          onClick={() => toggleStation(station)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') toggleStation(station)
          }}
        >
          {name}
        </div>
        <div className={radioFrequency}>{frequency}</div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleStation: (station) => dispatch(toggleStationAction(station)),
})

export default connect(null, mapDispatchToProps)(RadioItem)
