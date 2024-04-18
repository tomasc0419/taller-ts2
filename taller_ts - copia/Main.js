import { series } from './Data.js';
window.onload = function () {
    var cardsHTML = '';
    for (var i = 0; i < series.length; i++) {
        var serie = series[i];
        cardsHTML += "\n      <div class=\"card\" style=\"width: 20rem;\">\n        <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=\"").concat(serie.website, "\" class=\"btn btn-primary\">Go to website</a>\n        </div>\n      </div>\n    ");
    }
    var cardsContainer = document.getElementById('cardsContainer');
    if (cardsContainer !== null) {
        cardsContainer.innerHTML = cardsHTML;
    }
};
