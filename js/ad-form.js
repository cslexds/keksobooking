import { AD_FORM_CLASS_NAME, MAX_PRICE, MIN_TITLE_LENGTH } from './const.js';
import { enableForm } from './utils.js';

const adForm = document.querySelector(`.${AD_FORM_CLASS_NAME}`);

const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const typeInput = adForm.querySelector('#type');
const roomNumberInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');

const typeToMinPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const updatePrice = (price) => {
  priceInput.min = price;
  priceInput.placeholder = price;
};

const handleRoomAndCapacityChange = (element) => {
  const roomNumber = roomNumberInput.value;
  const capacity = capacityInput.value;

  if (roomNumber < capacity) {
    element.setCustomValidity('Количество гостей не соответствует количеству комнат');
  } else if ((roomNumber === '100' && capacity !== '0') || roomNumber !== '100' && capacity === '0') {
    element.setCustomValidity('Количество гостей не соответствует количеству комнат');
  } else {
    element.setCustomValidity('');
  }

  element.reportValidity();
};

const enableAdForm = () => {
  enableForm(AD_FORM_CLASS_NAME);

  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Заголовок не может быть короче ${MIN_TITLE_LENGTH} символов. \n Добавьте ещё ${MIN_TITLE_LENGTH - valueLength} символов`);
    } else {
      titleInput.setCustomValidity('');
    }
    titleInput.reportValidity();
  });

  priceInput.addEventListener('input', () => {
    const value = priceInput.value;
    const minPrice = priceInput.min;

    if (value < minPrice) {
      priceInput.setCustomValidity(`Цена не может быть меньше ${minPrice}`);
    } else if (value > MAX_PRICE) {
      priceInput.setCustomValidity(`Цена не может быть больше ${MAX_PRICE}`);
    } else {
      priceInput.setCustomValidity('');
    }
    priceInput.reportValidity();
  });

  roomNumberInput.addEventListener('input', () => handleRoomAndCapacityChange(roomNumberInput));
  capacityInput.addEventListener('input', () => handleRoomAndCapacityChange(capacityInput));

  typeInput.addEventListener('change', (evt) => {
    const selectedInput = evt.target;
    const newPrice = typeToMinPrice[selectedInput.value];

    updatePrice(newPrice);
  });

  timeInInput.addEventListener('input', (evt) => {
    timeOutInput.value = evt.target.value;
  });

  timeOutInput.addEventListener('input', (evt) => {
    timeInInput.value = evt.target.value;
  });
};

export { enableAdForm };
