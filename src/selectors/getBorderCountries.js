import { allCountries } from "../data";
export const getBorderCountries = (list) => {
  return list
    .map(
      (code) => allCountries.find(({ alpha3Code }) => alpha3Code === code)
    )
    .filter((c) => !!c);
}; 
