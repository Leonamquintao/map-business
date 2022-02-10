import { IMapMarkers } from "../interfaces";
export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  };

  addMarker(mapMarker: IMapMarkers): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng,
      },
    });
    this.showInfoWindow(marker);
  };

  private showInfoWindow(marker: google.maps.Marker): void {
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there'
      });
      infoWindow.open(this.googleMap, marker);
    });
  };
};