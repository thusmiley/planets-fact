let planetName = document.getElementById("name");
let planetOverview = document.getElementById("content");
let planetSource = document.getElementById("source");
let planetImage = document.getElementById("images");
let rotation = document.getElementById("rotation");
let revolution = document.getElementById("revolution");
let radius = document.getElementById("radius");
let temperature = document.getElementById("temperature");
//Contains the indexes used to access the proper data for each planet
const planetIndexes = {MERCURY: 0, VENUS: 1, EARTH: 2, MARS: 3, JUPITER: 4, SATURN: 5, URANUS: 6, NEPTUNE: 7};

//Opens mobile nav
const ham = document.querySelector(".icon-ham");
const mobileMenu = document.getElementById("mobile-menu");
function openNav() {
  ham.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    ham.style.opacity = "0.5";
  });
}

//Sets active-link style
document.querySelector(".active-link").style.opacity = "1";

//Opens the tab based on what is clicked
function openTab(tab) {
  //Pulls the planet name form the document title which is used to select the proper style
  let planet = document.title.split(" ")[0];
  //Index which is used to access the proper data
  let index = planetIndexes[planet];
  //Resets the tabs' styles to default before resetting them
  document.querySelector("#overview").style.backgroundColor = "";
  document.querySelector("#structure").style.backgroundColor = "";
  document.querySelector("#geology").style.backgroundColor = "";
  //Sets the tab style based on what is clicked
  switch(planet){
    case "MERCURY":
      document.querySelector(".active-link").style.color = "#419EBB";
      document.querySelector(`#${tab}`).style.backgroundColor = "#419EBB";
      break;
    case "VENUS":
      document.querySelector(".active-link").style.color = "#EDA249";
      document.querySelector(`#${tab}`).style.backgroundColor = "#EDA249";
      break;
    case "EARTH":
      document.querySelector(".active-link").style.color = "#6f2ed6";
      document.querySelector(`#${tab}`).style.backgroundColor = "#6f2ed6";
      break;
    case "MARS":
      document.querySelector(".active-link").style.color = "#D14C32";
      document.querySelector(`#${tab}`).style.backgroundColor = "#D14C32";
      break;
    case "JUPITER":
      document.querySelector(".active-link").style.color = "#D83A34";
      document.querySelector(`#${tab}`).style.backgroundColor = "#D83A34";
      break;
    case "SATURN":
      document.querySelector(".active-link").style.color = "#CD5120";
      document.querySelector(`#${tab}`).style.backgroundColor = "#CD5120";
      break;
    case "URANUS":
      document.querySelector(".active-link").style.color = "#1ec2a4";
      document.querySelector(`#${tab}`).style.backgroundColor = "#1ec2a4";
      break;
    case "NEPTUNE":
      document.querySelector(".active-link").style.color = "#2d68f0";
      document.querySelector(`#${tab}`).style.backgroundColor = "#2d68f0";
    break;
  }
  //Displays the proper data
  planetOverview.innerHTML = data[index][tab].content;
  planetSource.href = data[index][tab].source;
  //Switch to choose the correct image as image paths do not match tab names
  switch(tab){
    case "overview":
      planetImage.src = data[index].images.planet;
      break;
    case "structure":
      planetImage.src = data[index].images.internal;
      break;
    case "geology":
      planetImage.src = data[index].images.geology;
      break;
  }
}

//Parses data and sets default data to display
let data = [];
async function loadData() {
  //Parses data
  const response = await fetch("./data.json");
  const parsedReponse = await response.json();
  data.push(...parsedReponse);
  //Sets default data to display
  let planet = document.title.split(" ")[0];
  let index = planetIndexes[planet];
  openTab("overview")
  planetName.innerHTML = data[index].name.toUpperCase();
  rotation.innerHTML = data[index].rotation;
  revolution.innerHTML = data[index].revolution;
  radius.innerHTML = data[index].radius;
  temperature.innerHTML = data[index].temperature;
}

loadData();