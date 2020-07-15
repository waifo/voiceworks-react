const groupKeys = (data = []) => {
  if (!Array.isArray(data)) throw new Error("object passed should be an array");
  if (!data.length) return data;

  let res = {};
  data.forEach((element) => {
    Object.keys(element).forEach((k) => {
      const value = element[k];
      if (k !== "id" && k !== "img") {
        if (!res[k]) res[k] = Array.isArray(value) ? [...value] : [value];
        else {
          if (Array.isArray(value)) {
            value.forEach((v) => (!res[k].includes(v) ? res[k].push(v) : null));
          } else {
            if (!res[k].includes(value)) res[k].push(value);
          }
        }
      }
    });
  });
  return res;
};

export default groupKeys;
