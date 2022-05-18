export const getFirstLetter = (str) => {
  if (!str) return "";

  return str.split("")[0].toUpperCase();
};

export const capitalizeFirstLetter = (str) => {
  if (!str) return "";

  return `${str.split("")[0].toUpperCase()}${str.slice(1)}`;
};

export const isEmptyObject = (obj) => {
  if (typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
  }
  return true;
};
