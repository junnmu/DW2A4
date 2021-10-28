import { mask } from './modules/mask.js';

document.getElementById('cep').addEventListener('input', e => {
  e.target.value = mask.cep(e.target.value);
}, false)

function findState(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}

function findCovidData(uf) {
  return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
}

function clearText() {
  cases.innerHTML = ''; 
  deaths.innerHTML = ''; 
  suspects.innerHTML = ''; 
  refuses.innerHTML = ''; 
}

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const cep = document.getElementById('cep');
  const state = document.getElementById('state');
  const cases = document.getElementById('cases');
  const deaths = document.getElementById('deaths');
  const refuses = document.getElementById('refuses');
  const suspects = document.getElementById('suspects');

  let unmaskedCep = cep.value.replace('-', '');

  findState(unmaskedCep)
    .then(response => response.json())
    .then(response => {
      if (response.uf) {
        findCovidData(response.uf)
          .then(response => response.json())
          .then(response => {
            state.innerHTML = `Estado: ${response.uf}`
            cases.innerHTML = `Casos: ${response.cases}`; 
            deaths.innerHTML = `Mortes: ${response.deaths}`; 
            suspects.innerHTML = `Suspeitas: ${response.suspects}`; 
            refuses.innerHTML = `Recusas: ${response.refuses}`; 
          })
      } else {
        state.innerHTML = `CEP Inválido!`
        clearText(); 
      }
    })
    .catch(error => {
      state.innerHTML = "Cep Inválido!";
      clearText();
    })
})