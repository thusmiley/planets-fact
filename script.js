// Open mobile nav
const ham = document.querySelector(".icon-ham");
const mobileMenu = document.getElementById("mobile-menu");
function openNav() {
  ham.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    ham.style.opacity = "0.5";
  });
}

// Update data
let data = [];
async function loadDefault() {
  const response = await fetch("./data.json");
  const parsedReponse = await response.json();
  data.push(...parsedReponse);
  openOverview();
}

let planetName = document.getElementById("name");
let planetOverview = document.getElementById("content");
let planetSource = document.getElementById("source");
let planetImage = document.getElementById("images");
let rotation = document.getElementById("rotation");
let revolution = document.getElementById("revolution");
let radius = document.getElementById("radius");
let temperature = document.getElementById("temperature");

function resetTabs(){
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
}

const planetIndexes = {MERCURY: 0, VENUS: 1, EARTH: 2, MARS: 3, JUPITER: 4, SATURN: 5, URANUS: 6, NEPTUNE: 7}

// Overview tab
function openOverview() {
  let planet = document.title.split(" ")[0];
  let index = planetIndexes[planet];
  if (document.title.includes("MERCURY")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#419EBB";
    document.querySelector("#overview").style.backgroundColor = "#419EBB";
  }
  if (document.title.includes("VENUS")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#EDA249";
    document.querySelector("#overview").style.backgroundColor = "#EDA249";
  }
  if (document.title.includes("EARTH")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#6f2ed6";
    document.querySelector("#overview").style.backgroundColor = "#6f2ed6";
  }
  if (document.title.includes("MARS")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#D14C32";
    document.querySelector("#overview").style.backgroundColor = "#D14C32";
  }
  if (document.title.includes("JUPITER")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#D83A34";
    document.querySelector("#overview").style.backgroundColor = "#D83A34";
  }
  if (document.title.includes("SATURN")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#CD5120";
    document.querySelector("#overview").style.backgroundColor = "#CD5120";
  }
  if (document.title.includes("URANUS")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#1ec2a4";
    document.querySelector("#overview").style.backgroundColor = "#1ec2a4";
  }
  if (document.title.includes("NEPTUNE")) {
    resetTabs();
    document.querySelector(".active-link").style.color = "#2d68f0";
    document.querySelector("#overview").style.backgroundColor = "#2d68f0";
  }
  document.querySelector(".active-link").style.opacity = "1";
  planetName.innerHTML = data[index].name.toUpperCase();
  planetOverview.innerHTML = data[index].overview.content;
  planetSource.href = data[index].overview.source;
  planetImage.src = data[index].images.planet;
  rotation.innerHTML = data[index].rotation;
  revolution.innerHTML = data[index].revolution;
  radius.innerHTML = data[index].radius;
  temperature.innerHTML = data[index].temperature;
}

// Internal Structure tab
function openInternal() {
  let planet = document.title.split(" ")[0];
  let index = planetIndexes[planet];
  if (document.title.includes("MERCURY")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#419EBB";
  }
  if (document.title.includes("VENUS")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#EDA249";
  }
  if (document.title.includes("EARTH")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#6f2ed6";
  }
  if (document.title.includes("MARS")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#D14C32";
  }
  if (document.title.includes("JUPITER")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#D83A34";
  }
  if (document.title.includes("SATURN")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#CD5120";
  }
  if (document.title.includes("URANUS")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#1ec2a4";
  }
  if (document.title.includes("NEPTUNE")) {
    resetTabs();
    document.querySelector("#internal").style.backgroundColor = "#2d68f0";
  }
  planetOverview.innerHTML = data[index].structure.content;
  planetSource.href = data[index].structure.source;
  planetImage.src = data[index].images.internal;
}

// Surface Geology tab
function openGeology() {
  let planet = document.title.split(" ")[0];
  let index = planetIndexes[planet];
  if (document.title.includes("MERCURY")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#419EBB";
  }
  if (document.title.includes("VENUS")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#EDA249";
  }
  if (document.title.includes("EARTH")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#6f2ed6";
  }
  if (document.title.includes("MARS")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#D14C32";
  }
  if (document.title.includes("JUPITER")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#D83A34";
  }
  if (document.title.includes("SATURN")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#CD5120";
  }
  if (document.title.includes("URANUS")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#1ec2a4";
  }
  if (document.title.includes("NEPTUNE")) {
    resetTabs();
    document.querySelector("#geology").style.backgroundColor = "#2d68f0";
  }
  planetOverview.innerHTML = data[index].geology.content;
  planetSource.href = data[index].geology.source;
  planetImage.src = data[index].images.geology;
}

loadDefault();