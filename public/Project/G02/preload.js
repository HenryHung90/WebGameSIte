const woodImage = new Image();
const makiImage = new Image();
const branchImage = new Image();
const elfImage = new Image();
const keyImage = new Image();
const backgroundImage = new Image();
const dialog1Image = new Image();
const dialog2Image = new Image();
const flowerImage = new Image();
const mold1Image = new Image();
const mold2Image = new Image();
const mold3Image = new Image();
const nightMarketImage = new Image();
const startScreenImage = new Image();
const startButtonImage = new Image();
const strangeWorldImage = new Image();
const starImage = new Image();

function preload() {
  woodImage.src = "./assets/sprites/wooden.png";
  makiImage.src = "./assets/sprites/Makis-2-removebg.png";
  branchImage.src = "./assets/sprites/Branches.png";
  elfImage.src = "./assets/sprites/elf.png";
  keyImage.src = "./assets/sprites/Key.png";
  backgroundImage.src = "./assets/sprites/trees.png";
  dialog1Image.src = "./assets/sprites/dialog1-01.png";
  dialog2Image.src = "./assets/sprites/dialog2-01.png";
  flowerImage.src = "./assets/sprites/Flower.png";
  mold1Image.src = "./assets/sprites/Mold1.png";
  mold2Image.src = "./assets/sprites/Mold2.png";
  mold3Image.src = "./assets/sprites/Mold3.png";
  nightMarketImage.src = "./assets/sprites/nightMarket.png";
  startScreenImage.src = "./assets/sprites/start.jpg";
  startButtonImage.src = "./assets/sprites/startbutton.png";
  strangeWorldImage.src = "./assets/sprites/strangeworld.jpg";
  starImage.src = "./assets/sprites/Star.png";

  return new Promise(function (resolve, reject) {
    let pStarImage = new Promise(function (resolve, reject) {
      starImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pWoodImage = new Promise(function (resolve, reject) {
      woodImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pBranchImage = new Promise(function (resolve, reject) {
      branchImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pElfImage = new Promise(function (resolve, reject) {
      elfImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pKeyImage = new Promise(function (resolve, reject) {
      keyImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pBackgroundImage = new Promise(function (resolve, reject) {
      backgroundImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pDialog1Image = new Promise(function (resolve, reject) {
      dialog1Image.addEventListener("load", function () {
        resolve();
      });
    });
    let pDialog2Image = new Promise(function (resolve, reject) {
      dialog2Image.addEventListener("load", function () {
        resolve();
      });
    });
    let pFlowerImage = new Promise(function (resolve, reject) {
      flowerImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pMold1Image = new Promise(function (resolve, reject) {
      mold1Image.addEventListener("load", function () {
        resolve();
      });
    });
    let pMold2Image = new Promise(function (resolve, reject) {
      mold2Image.addEventListener("load", function () {
        resolve();
      });
    });
    let pMold3Image = new Promise(function (resolve, reject) {
      mold3Image.addEventListener("load", function () {
        resolve();
      });
    });
    let pNightMarketImage = new Promise(function (resolve, reject) {
      nightMarketImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pStartScreenImage = new Promise(function (resolve, reject) {
      startScreenImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pStartButtonImage = new Promise(function (resolve, reject) {
      startButtonImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pStrangeWorldImage = new Promise(function (resolve, reject) {
      strangeWorldImage.addEventListener("load", function () {
        resolve();
      });
    });
    let pMakiImage = new Promise(function (resolve, reject) {
      makiImage.addEventListener("load", function () {
        resolve();
      });
    });

    let BigPromise = Promise.all([
      pStarImage,
      pWoodImage,
      pBranchImage,
      pElfImage,
      pKeyImage,
      pBackgroundImage,
      pDialog1Image,
      pDialog2Image,
      pFlowerImage,
      pMold1Image,
      pMold2Image,
      pMold3Image,
      pNightMarketImage,
      pStartButtonImage,
      pStartScreenImage,
      pStrangeWorldImage,
      pMakiImage,
    ]);
    BigPromise.then(function () {
      resolve();
    });
  });
}
