export const isInTheList = (list, country) => {
  return ~list.map((c) => c.name.toLowerCase()).indexOf(country) ? true : false;
};

