import { Company } from "./Company";
import { User } from "./User";

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  };

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  };
};