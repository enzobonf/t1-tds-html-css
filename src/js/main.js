// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
// Import our custom CSS
import "../scss/styles.scss";
import "../scss/custom.scss";

const carros = [
  {
    marca: "PORSCHE",
    modelo: "911 3.0 24V H6 GASOLINA CARRERA PDK",
    preco: "R$ 789.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240401/porsche-911-3-0-24v-h6-gasolina-carrera-pdk-wmimagem17542128127.webp?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "FERRARI",
    modelo: "SF90 3.9 V8 TURBO PHEV STRADALE F1-DCT",
    preco: "R$ 5.200.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240121/ferrari-sf90-3.9-v8-turbo-phev-stradale-f1dct-wmimagem08035468985.jpg?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "FERRARI",
    modelo: "F8 SPIDER 3.9 V8 TURBO GASOLINA F1-DCT",
    preco: "R$ 4.599.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240321/ferrari-f8-spider-3.9-v8-turbo-gasolina-f1dct-wmimagem12135083897.jpg?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "PORSCHE",
    modelo: "911 3.0 24V H6 GASOLINA CARRERA PDK",
    preco: "R$ 789.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202404/20240401/porsche-911-3-0-24v-h6-gasolina-carrera-pdk-wmimagem17542128127.webp?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "FERRARI",
    modelo: "SF90 3.9 V8 TURBO PHEV STRADALE F1-DCT",
    preco: "R$ 5.200.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240121/ferrari-sf90-3.9-v8-turbo-phev-stradale-f1dct-wmimagem08035468985.jpg?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "FERRARI",
    modelo: "F8 SPIDER 3.9 V8 TURBO GASOLINA F1-DCT",
    preco: "R$ 4.599.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240321/ferrari-f8-spider-3.9-v8-turbo-gasolina-f1dct-wmimagem12135083897.jpg?s=fill&w=552&h=414&q=60",
  },
];

const CarroCard = (carro) => {
  const div = document.createElement("div");
  div.className = "col-lg-3 col-md-6 col-sm-12 card";
  div.innerHTML = `
        <img
        class="card-img-top"
        src="${carro.imagem}"
        alt="Card image cap"
        />
        <div class="card-body">
        <h5 class="card-title">
            ${carro.marca} ${carro.modelo}
        </h5>
        <p class="card-text">${carro.preco}</p>
        <a href="#" class="btn btn-primary">Ver mais</a>
        </div>
    `;
  return div;
};

function main() {
  const divCarros = document.getElementById("carros");
  const carrosHtml = carros.map(CarroCard);
{
  divCarros.append(...carrosHtml);
}

main();
