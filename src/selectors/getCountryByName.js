export const getCountryByName = (countries, name) => {
  return countries.find(
    (country) =>
      (country.name.toLowerCase() === name.toLowerCase() &&
        country.name.toLowerCase().includes(name.toLowerCase())) ||
      country.alpha3Code?.toLowerCase() === name.toLowerCase()
  );
};
