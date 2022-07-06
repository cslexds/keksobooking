import { getMockSimilarOffers } from './mock.js';
import { getOfferPopupElement } from './offers.js';

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.67620,
    lng: 139.65030,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/map-pins/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const pinIcon = L.icon({
  iconUrl: '../img/map-pins/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.67620,
    lng: 139.65030,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const offers = getMockSimilarOffers();

offers.forEach((offer) => {
  const marker = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      getOfferPopupElement(offer),
      {
        keepInView: true,
      },
    );
});

export {mainPinMarker, map};
