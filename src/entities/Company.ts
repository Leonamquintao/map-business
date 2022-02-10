import faker from '@faker-js/faker';
import { IMapMarkers } from '../interfaces';
export class Company implements IMapMarkers {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  };

  markerContent(): string {
    return `
      <div>
        <h2>Company name: ${this.companyName}</h2>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  };
};