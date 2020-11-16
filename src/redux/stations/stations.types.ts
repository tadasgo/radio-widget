export interface SingleStationState {
  id: number
  name: string
  frequency: string
  active: boolean
}

export interface StationsState {
  stations: SingleStationState[]
}
