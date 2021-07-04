export const isInTheList = (list, country) => {
  return list.find((el) => el.name.toLowerCase() === country.toLowerCase());
};
