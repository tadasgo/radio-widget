import STATIONS_DATA from './stations.data'
import { toggleStation } from './stations.utils'

const INITIAL_STATE = {
  stations: STATIONS_DATA,
}

const stationsReducer = (state = INITIAL_STATE, action) => {
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
