const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (const child of adForm.children) {
    child.disabled = true;
  }
  mapForm.classList.add('map__filters--disabled');
  for (const child of mapForm.children) {
    child.disabled = true;
  }
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (const child of adForm.children) {
    child.disabled = false;
  }
  mapForm.classList.remove('map__filters--disabled');
  for (const child of mapForm.children) {
    child.disabled = false;
  }
};

disableForm();
enableForm();
