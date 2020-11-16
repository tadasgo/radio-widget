import { SingleStationState } from './stations.types'

export const toggleStation = (
  stations: Array<SingleStationState>,
  stationToToggle: SingleStationState,
) =>
  stations.map((station: SingleStationState) => {
    // flip state to true of selected element, false - other active elements or leave others as they are
    if (station.id === stationToToggle.id || station.active) {
      return {
        ...station,
        active: !station.active,
      }
    }
    return station
  })
