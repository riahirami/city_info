import {env} from '../config/env';

const BASE_URL = env.BASE_URL_API;

export const endpoints = {
  GET_CITY_DETAILS: BASE_URL + 'city',
};
