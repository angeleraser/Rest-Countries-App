export const isTheSameRegion = (list) =>
  list.every(({ region }, i, arr) => {
    return region === arr[i === arr.length - 1 ? i - 1 : i + 1].region;
  });
