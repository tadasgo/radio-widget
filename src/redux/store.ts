import { createStore } from 'redux'
import { stationsReducer } from './stations/stations.reducer'

const store = createStore(stationsReducer)

export default store
