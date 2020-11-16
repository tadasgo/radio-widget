import STATIONS_DATA from './stations.data'
import { toggleStation } from './stations.utils'
import { ToggleStationAction } from './stations.actions'

export interface SingleStationState {
  id: number
  name: string
  frequency: string
  active: boolean
}

export interface StationsState {
  stations: SingleStationState[]
}

const INITIAL_STATE = {
  stations: STATIONS_DATA,
}

const stationsReducer = (
  state: StationsState = INITIAL_STATE,
  action: ToggleStationAction,
) => {
  switch (action.type) {
    case 'TOGGLE_STATION':
      return {
        ...state,
        stations: toggleStation(state.stations, action.payload),
      }
    default:
      return state
  }
}

export default stationsReducer
