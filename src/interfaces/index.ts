export interface IMapMarkers {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
};