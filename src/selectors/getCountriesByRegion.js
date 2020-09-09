export const getCountriesByRegion = (list, region) =>
  region !== "All" ? list.filter((country) => country.region === region) : list;