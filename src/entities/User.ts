import faker from '@faker-js/faker';
import { IMapMarkers } from '../interfaces';

export class User implements IMapMarkers{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  };

  markerContent(): string {
    return `
      <div>
        <h2>User name: ${this.name}</h2>
      </div>
    `;
  };
};