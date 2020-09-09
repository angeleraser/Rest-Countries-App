import { allCountries, allRegions } from "../data";
export const isValidQuery = (query) => {
  return allCountries.some(
    (country) =>
      country.name.toLowerCase() === query.toLowerCase() ||
      country.name.toLowerCase().includes(query.toLowerCase()) ||
      country.alpha3Code?.toLowerCase() === query.toLowerCase() ||
      allRegions.some(
        (region) => region.toLocaleLowerCase() === query.toLowerCase()
      )
  );
};
