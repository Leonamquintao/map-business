/// <reference types="@types/google.maps" />
import { User } from './entities/User';
import { Company } from './entities/Company';
import { CustomMap } from './entities/CustomMap';

const htmlElement = 'map_canvas';

const user = new User();
const company = new Company();
const customMap = new CustomMap(htmlElement);

customMap.addMarker(user);
customMap.addMarker(company);
