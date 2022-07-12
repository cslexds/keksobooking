const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offerTypeToReadable = {
  flat: 'Квартира' ,
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const getPopup = (offerData) => {
  const {offer, author} = offerData;
  const offerPopup = popupTemplate.cloneNode(true);
  const featuresList = offerPopup.querySelector('.popup__features');
  const photosList =  offerPopup.querySelector('.popup__photos');
  const photoTemplate =  photosList.querySelector('.popup__photo');

  offerPopup.querySelector('.popup__title').textContent = offer.title;
  offerPopup.querySelector('.popup__text--address').textContent = offer.address;
  offerPopup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerPopup.querySelector('.popup__type').textContent = offerTypeToReadable[offer.type];
  offerPopup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  featuresList.querySelectorAll('li').forEach((element) => element.remove());

  if (offer.features !== undefined) {
    offer.features.forEach((feature) => {
      const featuresElement =  document.createElement('li');
      featuresElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresList.appendChild(featuresElement);
    });
  } else {
    featuresList.classList.add('hidden');
  }

  offerPopup.querySelector('.popup__description').textContent = offer.description;
  photosList.querySelectorAll('img').forEach((element) => element.remove());

  if (offer.photos !== undefined) {
    offer.photos.forEach((photo) => {
      const photoElement = photoTemplate.cloneNode(true);
      photoElement.src = photo;
      photosList.appendChild(photoElement);
    });
  } else {
    photosList.classList.add('hidden');
  }

  offerPopup.querySelector('.popup__avatar').src = author.avatar;

  return offerPopup;
};

export { getPopup };
