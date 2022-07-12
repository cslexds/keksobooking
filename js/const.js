const LOCATION_DECIMAL = 5;
const MAX_ADS_TO_SHOW = 10;
const MIN_TITLE_LENGTH = 30;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000000;
const DATA_URL =  'https://23.javascript.pages.academy/keksobooking/data';
const AD_FORM_CLASS_NAME = 'ad-form';
const FILTER_FORM_CLASS_NAME = 'map__filters';
const MAP_CONTAINER_ID = 'map-canvas';

const InitMapView = {
  LAT: 35.6741,
  LNG: 139.7492,
  ZOOM: 13,
};

const MAIN_PIN_ICON = L.icon({
  iconUrl: '../img/map-pins/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

const PIN_ICON = L.icon({
  iconUrl: '../img/map-pins/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export {
  LOCATION_DECIMAL,
  MAX_ADS_TO_SHOW,
  MIN_TITLE_LENGTH,
  MIN_PRICE,
  MAX_PRICE,
  InitMapView,
  DATA_URL,
  AD_FORM_CLASS_NAME,
  FILTER_FORM_CLASS_NAME,
  MAP_CONTAINER_ID,
  MAIN_PIN_ICON,
  PIN_ICON
};
