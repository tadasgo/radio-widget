import { SingleStationState } from './stations.reducer'

export interface ToggleStationAction {
  type: 'TOGGLE_STATION'
  payload: SingleStationState
}

export const toggleStationAction = (
  station: SingleStationState,
): ToggleStationAction => ({
  type: 'TOGGLE_STATION',
  payload: station,
})
