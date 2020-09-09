export const getCountriesByQuery = (list, query) => {
  const q = query.toLowerCase();
  return list.filter(
    ({ name, alpha3Code, region }) =>
      name.toLowerCase().includes(q) ||
      alpha3Code.toLowerCase() === q ||
      region.toLowerCase() === q ||
      name.toLowerCase() === q 
  );
};
