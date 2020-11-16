import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleStationAction } from '../../redux/stations/stations.actions'
import CustomBtn from '../CustomBtn/CustomBtn'
import minusBtn from '../../assets/minus.png'
import plusBtn from '../../assets/plus.png'
import styles from './RadioItem.module.css'
import { SingleStationState } from '../../redux/stations/stations.reducer'

interface OwnProps {
  station: SingleStationState
}

const RadioItem = ({ station }: OwnProps) => {
  const { name, frequency, active } = station
  const {
    container,
    radioFrequency,
    radioItem,
    radioStation,
    radioImg,
    activeItem,
  } = styles

  const dispatch = useDispatch()
  const toggleStation = (station: SingleStationState) => {
    dispatch(toggleStationAction(station))
  }

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

export default RadioItem
