/**
 * Funtion to filter data according to values selected in dropdown
 *
 * @name filterData
 * @param {Array} data Data to apply filter on
 * @param {Object} activeFilters An object with all filters
 * @returns {Array} Filtered data
 */

const filterData = (data = [], filter = {}) => {
  if (!Array.isArray(data)) throw new Error("object passed should be an array");
  if (!data.length) return data;
  if (!Object.keys(filter).length) return data;

  return Object.keys(filter).reduce(
    (r, a) =>
      r.filter((d) =>
        Array.isArray(d[a]) ? d[a].includes(filter[a]) : filter[a] === d[a]
      ),
    data
  );
};

export default filterData;
