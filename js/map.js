import {
  InitMapView,
  LOCATION_DECIMAL,
  MAIN_PIN_ICON,
  MAP_CONTAINER_ID,
  PIN_ICON} from './const.js';
import { getPopup } from './popup.js';
import { createFetch } from './api.js';
import { enableAdForm } from './ad-form.js';
import { enableFilterForm } from './filter-form.js';

const loadMap = () => {
  const map = L.map(MAP_CONTAINER_ID)
    .on('load', () => {
      enableAdForm();
    })
    .setView({
      lat: InitMapView.LAT,
      lng: InitMapView.LNG,
    }, InitMapView.ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinMarker = L.marker(
    {
      lat: InitMapView.LAT,
      lng: InitMapView.LNG,
    },
    {
      draggable: true,
      icon: MAIN_PIN_ICON,
    },
  );

  mainPinMarker.addTo(map);

  const updateAdress = () => {
    const adressInput = document.querySelector('#address');
    const mainPinMarkerLoc = mainPinMarker.getLatLng();
    adressInput.value =`${mainPinMarkerLoc.lat.toFixed(LOCATION_DECIMAL)}, ${mainPinMarkerLoc.lng.toFixed(LOCATION_DECIMAL)}`;
  };

  updateAdress();

  mainPinMarker.on('moveend', () => {
    updateAdress();
  });


  const initialMarkerGroup = L.layerGroup().addTo(map);

  const createMarker = (data) => {
    const marker = L.marker(
      {
        lat: data.location.lat,
        lng: data.location.lng,
      },
      {
        icon: PIN_ICON,
      },
    );

    marker
      .addTo(initialMarkerGroup)
      .bindPopup(
        getPopup(data),
      );
  };

  const fetchAds = createFetch(
    (ads) => {
      ads
        .slice(0, 10)
        .forEach((ad) => createMarker(ad));

      enableFilterForm(initialMarkerGroup, ads, createMarker);
    },
    (err) => {
      console.log(err);
    });

  fetchAds();
};

export { loadMap };
