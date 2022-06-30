const getRandomPositiveInteger = (from, to) => Math.abs(Math.round(Math.random() * (to - from) + from));
const getRandomPositiveDecimal = (from, to, decimal) => Math.abs((Math.random() * (to - from) + from).toFixed(decimal));
const getRandomElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);

    while (previousValues.includes(currentValue)) {
      if (previousValues.length >= max - min + 1) {
        break;
      }
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const makeUniqueRandomElementGenerator = (array) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomElement(array);

    while (previousValues.includes(currentValue)) {
      if (previousValues.length >= array.length) {
        break;
      }
      currentValue = getRandomElement(array);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getUniqueRandomElements = (array) => {
  const length = getRandomPositiveInteger(0, array.length -1);
  const getUniqueRandomElement = makeUniqueRandomElementGenerator(array);

  return new Array(length).fill().map(() => getUniqueRandomElement());
};

export {
  getRandomPositiveDecimal,
  getRandomElement,
  makeUniqueRandomIntegerGenerator,
  getUniqueRandomElements
};
