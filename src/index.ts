/// <reference types="@types/google.maps" />
import { User } from './entities/User';
import { Company } from './entities/Company';
import { CustomMap } from './entities/CustomMap';

const htmlElement = 'map_canvas';

const user = new User();
const customMap = new CustomMap(htmlElement);

customMap.addUserMarker(user);
