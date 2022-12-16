import { wheatherInterface } from './weatherInterface';

export const CITIES: wheatherInterface[] = [
  {
    cityId: 1,
    cityName: 'Moscow',
    cityMaxTemp: -2,
    cityNowTemp: -3,
    cityMinTemp: -12,
    cityWeather: 'cold',
    cityWind: 26,
  },
  {
    cityId: 2,
    cityName: 'Seattle',
    cityMaxTemp: 5,
    cityNowTemp: 1,
    cityMinTemp: -1,
    cityWeather: 'warm',
    cityWind: 2,
  },
  {
    cityId: 3,
    cityName: 'Rome',
    cityMaxTemp: 16,
    cityNowTemp: 16,
    cityMinTemp: 12,
    cityWeather: 'warm',
    cityWind: 14,
  },
];
