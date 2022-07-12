const disableForm = (formClassName) => {
  const form = document.querySelector(`.${formClassName}`);

  form.classList.add(`${formClassName}--disabled`);
  for (const child of form.children) {
    child.disabled = true;
  }
};

const enableForm = (formClassName) => {
  const form = document.querySelector(`.${formClassName}`);

  form.classList.remove(`${formClassName}--disabled`);
  for (const child of form.children) {
    child.disabled = false;
  }
};

export { disableForm, enableForm };
