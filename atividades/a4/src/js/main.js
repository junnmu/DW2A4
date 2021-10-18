import { masks } from "./modules/mask.js";
import { validations } from "./modules/valid.js"

document.querySelectorAll('input.mask').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener('input', e => {
    e.target.value = masks[field](e.target.value)
  }, false)
})

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  document.querySelectorAll('input').forEach($input => {
    const input = $input.dataset.js;
    validations.validate(input);
  })
})