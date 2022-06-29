const LOCATION_DECIMAL = 5;

const TITLES = [
  'レイヴンツリー',
  'アンダーウィン',
  'メイストーン',
  'コットンモア',
  'ウィンカスター',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomPositiveInteger = (from, to) => Math.abs(Math.round(Math.random() * (to - from) + from));
const getRandomPositiveDecimal = (from, to, decimal) => Math.abs((Math.random() * (to - from) + from).toFixed(decimal));
const getRandomElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

const makeUniqueRandomInteger = (min, max) => {
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


const makeUniqueRandomElement = (array) => {
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
  const getUniqueRandomString = makeUniqueRandomElement(array);

  return new Array(length).fill().map(() => getUniqueRandomString());
};

const range = {
  avatarNumber : {
    min: 1,
    max: 10,
  },
  lat: {
    min: 35.65000,
    max: 35.70000,
  },
  lng: {
    min: 139.70000,
    max: 139.80000,
  },
  price: {
    min: 1000,
    max: 10000,
  },
  rooms: {
    min: 1,
    max: 5,
  },
  guests: {
    min: 1,
    max: 10,
  },

  getRandom: function (value, decimalPartLength = 0) {
    return getRandomPositiveDecimal(this[value].min, this[value].max, decimalPartLength);
  },
};

const getRandomAvatarNumber = makeUniqueRandomInteger(range.avatarNumber.min, range.avatarNumber.max);

const getRandomAvatarUrl = () => {
  const avatarNumber = getRandomAvatarNumber();
  const avatarUrl = avatarNumber < 10 ? `img/avatars/user0${avatarNumber}.png` : `img/avatars/user${avatarNumber}.png`;
  return avatarUrl;
};

const getRandomMockOffer = () => ({
  author: {
    avatar: getRandomAvatarUrl(),
  },
  offer: {
    title: getRandomElement(TITLES),
    address: `${range.getRandom('lat', LOCATION_DECIMAL)}, ${range.getRandom('lng', LOCATION_DECIMAL)}`,
    price: range.getRandom('price'),
    type: getRandomElement(TYPES),
    rooms: range.getRandom('rooms'),
    guests: range.getRandom('guests'),
    checkin: getRandomElement(CHECKS),
    checkout: getRandomElement(CHECKS),
    features: getUniqueRandomElements(FEATURES),
    description: getUniqueRandomElements(TITLES).join(''),
    photos: getUniqueRandomElements(PHOTOS),
  },
  location: {
    lat: range.getRandom('lat', LOCATION_DECIMAL),
    lng: range.getRandom('lng', LOCATION_DECIMAL),
  },
});

const getMockOffers = () => new Array(10).fill().map(() => getRandomMockOffer());

getMockOffers();
