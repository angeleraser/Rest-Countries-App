export const getSortedCountriesBy = (countries, sort) => {
  switch (sort) {
    case "High Population":
      return countries.sort(
        (a, b) => Number(a.population) - Number(b.population)
      ).reverse();
    case "Low Population":
      return countries
        .sort((a, b) => Number(a.population) - Number(b.population))
    default:
      return countries;
  }
};
