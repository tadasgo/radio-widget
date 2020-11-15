import { combineReducers } from 'redux'
import stationsReducer from './stations/stations.reducer'

const rootReducer = combineReducers({
  stations: stationsReducer,
})

export default rootReducer
