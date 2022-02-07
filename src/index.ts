/// <reference types="@types/google.maps" />
import { User } from './entities/User';
import { Company } from './entities/Company';
import { Map } from './entities/Map';

const map = document.getElementById('map_canvas');

const opts = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
};

new google.maps.Map(map, opts);