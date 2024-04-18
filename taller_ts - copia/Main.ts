import { series } from './Data.js';

window.onload = function() {
  let cardsHTML = '';

  for (let i = 0; i < series.length; i++) {
    const serie = series[i];
    cardsHTML += `
      <div class="card" style="width: 20rem;">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.website}" class="btn btn-primary">Go to website</a>
        </div>
      </div>
    `;
  }

  const cardsContainer = document.getElementById('cardsContainer');
  if (cardsContainer !== null) {
    cardsContainer.innerHTML = cardsHTML;
  }
}
