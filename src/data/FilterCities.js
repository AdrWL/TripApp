import {CITIES} from "../data/Cities.js"

export const filterCitiesByReview = (isGreaterThan) => {
  return CITIES.filter((city) => isGreaterThan ? Number(city.review) > 3 : Number(city.review) <= 3);
};