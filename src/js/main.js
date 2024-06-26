import * as bootstrap from "bootstrap";
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
    marca: "BMW",
    modelo: "X6 4.4 V8 BITURBO GASOLINA M COMPETITION AUTOMÁTICO",
    preco: "R$ 1.190.950",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240221/bmw-x6-4-4-v8-biturbo-gasolina-m-competition-automatico-wmimagem12050681314.webp?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "BMW",
    modelo: "M3 3.0 I6 TWINTURBO GASOLINA COMPETITION M STEPTRONIC",
    preco: "R$ 829.950",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/bmw-m3-3-0-i6-twinturbo-gasolina-competition-m-steptronic-wmimagem21414963452.webp?s=fill&w=552&h=414&q=60",
  },
  {
    marca: "AUDI",
    modelo: "RS6 4.0 AVANT V8 TWINTURBO MHEV TIPTRONIC",
    preco: "R$ 920.000",
    imagem:
      "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202403/20240326/audi-rs6-4-0-avant-v8-twinturbo-mhev-tiptronic-wmimagem14232647131.webp?s=fill&w=552&h=414&q=60",
  },
];

const marcasTipos = {
  1: [
    "Aston Martin",
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "Honda",
    "Mercedes",
    "Mercedes-Benz",
    "Porsche",
    "Toyota",
    "Volkswagen",
  ],
  2: [
    "BMW",
    "Ducati",
    "Harley-Davidson",
    "Honda",
    "Kawasaki",
    "Suzuki",
    "Triumph",
    "Yamaha",
  ],
};

const CarroCard = (carro) => {
  const div = document.createElement("div");
  div.className = "col-lg-3 col-md-5 col-sm-12 card";
  div.innerHTML = `
        <img
          class="card-img-top imgCarro"
          src="${carro.imagem}"
          alt="Imagem do carro"
        />
        <div class="card-body">
          <h5 class="card-title">
              ${carro.marca} ${carro.modelo}
          </h5>
          <p class="card-text">${carro.preco}</p>
          <a href="#" class="btn btn-primary btnVerMais">Ver mais</a>
        </div>
    `;

  const img = div.querySelector(".imgCarro");
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

  return div;
};

const changeMarcas = (idTipoVeiculo, marcaSelect) => {
  const marcasTipo = marcasTipos[idTipoVeiculo];
  marcaSelect.innerHTML = `
        <option value="">Selecione uma marca</option>
        ${marcasTipo.map(
          (marca) => `<option value="${marca}">${marca}</option>`
        )}
    `;
};

const initChangeMarcas = function () {
  const tipoVeiculoSelect = document.getElementById("tipoVeiculo");
  const marcaSelect = document.getElementById("marcaVeiculo");

  tipoVeiculoSelect.addEventListener("change", (event) =>
    changeMarcas(event.target.value, marcaSelect)
  );

  changeMarcas(1, marcaSelect);
};

const initAnosSelect = () => {
  const anoSelect = document.getElementById("anoVeiculo");
  const anoAtual = new Date().getFullYear();

  let selected = true;
  for (let i = anoAtual; i >= 1920; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    option.selected = selected;
    anoSelect.appendChild(option);
    selected = false;
  }
};

const initInputQuiometragem = () => {
  const radios = document.getElementsByName("condicaoVeiculoRadio");
  const inputQuilometragem = document.getElementById("kmVeiculo");
  radios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const idCondicao = +event.target.value;
      switch (idCondicao) {
        case 1:
          inputQuilometragem.setAttribute("disabled", true);
          inputQuilometragem.value = "0";
          break;
        case 2:
          inputQuilometragem.removeAttribute("disabled");
          break;
      }
    });
  });
};

const loadCarros = () => {
  const divCarros = document.getElementById("carros");
  const carrosHtml = carros.map(CarroCard);
  divCarros.append(...carrosHtml);
};

const initForm = () => {
  const form = document.getElementById("formAnunciar");
  const modalForm = new bootstrap.Modal(document.getElementById("formModal"));
  const modalSucesso = new bootstrap.Modal(
    document.getElementById("successModal")
  );

  const sucessoText = document.getElementById("sucessoText");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    sucessoText.textContent = `${data.marcaVeiculo} ${data.modeloVeiculo} ${data.anoVeiculo}`;
    modalForm.hide();
    modalSucesso.show();
    form.reset();
  });
};

function main() {
  loadCarros();
  initChangeMarcas();
  initAnosSelect();
  initInputQuiometragem();
  initForm();
}

main();
