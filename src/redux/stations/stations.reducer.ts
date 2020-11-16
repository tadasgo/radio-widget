import STATIONS_DATA from './stations.data'
import { toggleStation } from './stations.utils'
import { ToggleStationAction } from './stations.actions'
import { StationsState } from './stations.types'

const INITIAL_STATE = {
  stations: STATIONS_DATA,
}

export const stationsReducer = (
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
