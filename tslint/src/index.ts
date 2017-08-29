function validRange(range: any) {
  return range.min <= range.middle && range.middle <= range.max;
}

const range = {
  min: 5,
  middle: 10,
  max: 20
};

const point = {
  x: 3,
  z: 5,
  y: 4
};

console.log(validRange(range));
