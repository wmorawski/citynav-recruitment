export interface BikeStationsResponse {
  features: BikeStation[];
}

export interface BikeStation {
  geometry: BikeStationGeometry;
  id: string;
  type: string;
  properties: BikeStationProperties;
}

export interface BikeStationGeometry {
  // Lat,Lng array
  coordinates: number[];
  type: string;
}

export interface BikeStationProperties {
  free_racks: string;
  bikes: string;
  label: string;
  bike_racks: string;
  updated: string;
}
