const ktoF = (k) => {
  const num = parseInt(k, 10);
  let f = ((num - 273.15) * 9) / 5 + 32;
  f = Math.round(f);
  return f;
};

const ktoC = (k) => {
  const num = parseInt(k, 10);
  let c = num - 273.15;
  c = Math.round(c);
  return c;
};

export { ktoC, ktoF };
