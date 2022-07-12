import { AD_FORM_CLASS_NAME, FILTER_FORM_CLASS_NAME } from './const.js';
import { loadMap } from './map.js';
import { disableForm } from './utils.js';

disableForm(AD_FORM_CLASS_NAME);
disableForm(FILTER_FORM_CLASS_NAME);
loadMap();
