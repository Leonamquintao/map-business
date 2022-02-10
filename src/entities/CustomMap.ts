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
    const content =  mapMarker.markerContent();
    this.showInfoWindow(marker, content);
  };

  private showInfoWindow(marker: google.maps.Marker, content: string): void {
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: content
      });
      infoWindow.open(this.googleMap, marker);
    });
  };
};