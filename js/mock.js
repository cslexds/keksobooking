import {
  LOCATION_DECIMAL,
  TITLES,
  TYPES,
  CHECKS,
  FEATURES,
  PHOTOS,
  MOCK_OFFERS_LENGTH
} from './const.js';

import {
  getRandomPositiveDecimal,
  makeUniqueRandomIntegerGenerator,
  getRandomElement,
  getUniqueRandomElements
} from './utils.js';

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

const getRandomAvatarNumber = makeUniqueRandomIntegerGenerator(range.avatarNumber.min, range.avatarNumber.max);

const getRandomMockOffer = () => {
  const avatarNumber = getRandomAvatarNumber();
  const lat = range.getRandom('lat', LOCATION_DECIMAL);
  const lng = range.getRandom('lng', LOCATION_DECIMAL);

  return {
    author: {
      avatar: avatarNumber < range.avatarNumber.max ? `img/avatars/user0${avatarNumber}.png` : `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${lat}, ${lng}`,
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
      lat: lat,
      lng: lng,
    },
  };
};

const getMockOffers = () => new Array(MOCK_OFFERS_LENGTH).fill().map(() => getRandomMockOffer());

export {
  getMockOffers
};
