const { descLst } = require("./descricoes");

const uuid = require("uuid").v4;
const fs = require("fs").promises;
const nomesLst = require("./nomes").nomesLst;

const enumTipo = {
  Magia: "magia",
  Criatura: "criatura",
};

const enumClasse = {
  Mago: "mago",
  Paladino: "paladino",
  Caçador: "caçador",
  Druida: "druida",
  Qualquer: "qualquer",
};

const allCards = [];

for (let i = 0; i < 100; i++) {
  const card = {
    id: uuid(),
    nome: generateNomes(),
    descricao: generateDescs(),
    ataque: generateRandomInt(),
    defesa: generateRandomInt(),
    tipo: generateRandomTipo(),
    classe: generateRandomClasse(),
  };
  allCards.push(card);
}

async function start() {
  fs.writeFile("./allCards.json", JSON.stringify({ allCards }, null, 2));
}

function generateRandomInt() {
  return Math.floor(Math.random() * 10) + 1;
}

function generateRandomTipo() {
  const rnd = Math.floor(Math.random() * Object.keys(enumTipo).length);
  return enumTipo[Object.keys(enumTipo)[rnd]];
}

function generateRandomClasse() {
  const rnd = Math.floor(Math.random() * Object.keys(enumClasse).length);
  return enumClasse[Object.keys(enumClasse)[rnd]];
}

function generateNomes() {
  const rnd = Math.floor(Math.random() * nomesLst.length);
  return nomesLst[rnd];
}

function generateDescs() {
  const rnd = Math.floor(Math.random() * descLst.length);
  return descLst[rnd];
}

start();
