/**
 * Fonction qui permet de faire le filtre sur les rendez-vous en se basant sur la colone
* @param {Array<{}>} data
 * @param {Array<'col', 'val'>} filter la colone à filtré et la valeur
 * @returns {Array<{}>}
 */
export function apFilter(data, filter) {
  const [col, val] = filter;
  if (val === "ALL") {
    return data;
  }
  return data.filter((res) => res[col] === val);
}
