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

// Overview tab
function openOverview() {
  let index;
  if (document.title.includes("MERCURY")) {
    document.querySelector(".active-link").style.color = "#419EBB";
    document.querySelector("#overview").style.backgroundColor = "#419EBB";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 0;
  }
  if (document.title.includes("VENUS")) {
    document.querySelector(".active-link").style.color = "#EDA249";
    document.querySelector("#overview").style.backgroundColor = "#EDA249";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 1;
  }
  if (document.title.includes("EARTH")) {
    document.querySelector(".active-link").style.color = "#6f2ed6";
    document.querySelector("#overview").style.backgroundColor = "#6f2ed6";
    index = 2;
  }
  if (document.title.includes("MARS")) {
    document.querySelector(".active-link").style.color = "#D14C32";
    document.querySelector("#overview").style.backgroundColor = "#D14C32";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 3;
  }
  if (document.title.includes("JUPITER")) {
    document.querySelector(".active-link").style.color = "#D83A34";
    document.querySelector("#overview").style.backgroundColor = "#D83A34";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 4;
  }
  if (document.title.includes("SATURN")) {
    document.querySelector(".active-link").style.color = "#CD5120";
    document.querySelector("#overview").style.backgroundColor = "#CD5120";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 5;
  }
  if (document.title.includes("URANUS")) {
    document.querySelector(".active-link").style.color = "#1ec2a4";
    document.querySelector("#overview").style.backgroundColor = "#1ec2a4";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 6;
  }
  if (document.title.includes("NEPTUNE")) {
    document.querySelector(".active-link").style.color = "#2d68f0";
    document.querySelector("#overview").style.backgroundColor = "#2d68f0";
    document.querySelector("#internal").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 7;
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
  let index;
  if (document.title.includes("MERCURY")) {
    document.querySelector("#internal").style.backgroundColor = "#419EBB";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 0;
  }
  if (document.title.includes("VENUS")) {
    document.querySelector("#internal").style.backgroundColor = "#EDA249";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 1;
  }
  if (document.title.includes("EARTH")) {
    document.querySelector("#internal").style.backgroundColor = "#6f2ed6";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 2;
  }
  if (document.title.includes("MARS")) {
    document.querySelector("#internal").style.backgroundColor = "#D14C32";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 3;
  }
  if (document.title.includes("JUPITER")) {
    document.querySelector("#internal").style.backgroundColor = "#D83A34";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 4;
  }
  if (document.title.includes("SATURN")) {
    document.querySelector("#internal").style.backgroundColor = "#CD5120";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 5;
  }
  if (document.title.includes("URANUS")) {
    document.querySelector("#internal").style.backgroundColor = "#1ec2a4";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 6;
  }
  if (document.title.includes("NEPTUNE")) {
    document.querySelector("#internal").style.backgroundColor = "#2d68f0";
    document.querySelector("#overview").style.backgroundColor = "";
    document.querySelector("#geology").style.backgroundColor = "";
    index = 7;
  }
  planetOverview.innerHTML = data[index].structure.content;
  planetSource.href = data[index].structure.source;
  planetImage.src = data[index].images.internal;
}

// Surface Geology tab
function openGeology() {
let index;
if (document.title.includes("MERCURY")) {
  document.querySelector("#geology").style.backgroundColor = "#419EBB";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 0;
}
if (document.title.includes("VENUS")) {
  document.querySelector("#geology").style.backgroundColor = "#EDA249";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 1;
}
if (document.title.includes("EARTH")) {
  document.querySelector("#geology").style.backgroundColor = "#6f2ed6";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 2;
}
if (document.title.includes("MARS")) {
  document.querySelector("#geology").style.backgroundColor = "#D14C32";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 3;
}
if (document.title.includes("JUPITER")) {
  document.querySelector("#geology").style.backgroundColor = "#D83A34";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 4;
}
if (document.title.includes("SATURN")) {
  document.querySelector("#geology").style.backgroundColor = "#CD5120";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 5;
}
if (document.title.includes("URANUS")) {
  document.querySelector("#geology").style.backgroundColor = "#1ec2a4";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 6;
}
if (document.title.includes("NEPTUNE")) {
  document.querySelector("#geology").style.backgroundColor = "#2d68f0";
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#internal").style.backgroundColor = "";
  index = 7;
}
planetOverview.innerHTML = data[index].geology.content;
planetSource.href = data[index].geology.source;
planetImage.src = data[index].images.geology;
}

loadDefault();
