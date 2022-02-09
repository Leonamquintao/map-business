const opts = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
};

export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), opts);
  };
};