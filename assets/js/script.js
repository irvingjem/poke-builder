// Global Variables
var abilitiesList = document.getElementById("abilities");
let pokeNickname = document.getElementById("pokeNickname");
let pokeDiv = document.getElementById("pokeDetails");
let saveBtn = document.getElementById("saveBtn");
let deleteBtn = document.getElementById("deleteBtn");
var pokeSearchesArray = [];

// Grab pokemon name / and image
var fetchPokeData = function (pokeName) {
  var pokeNameURL =
    "https://pokeapi.co/api/v2/pokemon/" + pokeName.toLowerCase();
  fetch(pokeNameURL)
    .then(function (pokeNameResponse) {
      return pokeNameResponse.json();
    })
    .then(function (pokeNameData) {
      console.log("pokeNameData", pokeNameData.name);
      if (pokeSearchesArray.indexOf(pokeNameData.name) === -1) {
        pokeSearchesArray.push(pokeNameData.name);
        localStorage.setItem(
          "Search History",
          JSON.stringify(pokeSearchesArray)
        );
      }
      resetScreen();

      //setting up the character name
      var dataTypes = pokeNameData["name"];
      document.getElementById("pokename").textContent =
        "Name: " + dataTypes[0].toUpperCase() + dataTypes.substring(1);
      //Calling the ability fetch based on the character name data
      fetchPokeAbility(dataTypes);

      var imgElement = document.getElementById("charcterImg");
      console.log("charcterImg", pokeNameData.sprites.front_default);
      imgElement.setAttribute("src", pokeNameData.sprites.front_default);
      imgElement.setAttribute("alt", dataTypes);
    });
};
// Removed old Data from past seach
function resetScreen() {
  //need to fill
  abilities.innerHTML = "";
}
// Display Name Function -
let getPokeName = function () {
  pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
  var pTag = document.createElement("p");
  pTag.setAttribute("id", "pokename");
  pTag.textContent = "Name: ";
  console.log(pTag);
  pokeDiv.append(pTag);
};
getPokeName();
// Nickname Randomizer
function getNameGen() {
  var nameGenApi = "https://namey.muffinlabs.com/name.json?frequency=rare";
  fetch(nameGenApi)
    .then(function (nameResponse) {
      return nameResponse.json();
    })
    .then(function (nameData) {
      console.log("random name", nameData[0]);
      pokeNickname.append("(" + nameData[0] + ")");
    });
  pokeNickname.textContent = "";
}

// Fetch Abilities Function -- Jem

var fetchPokeAbility = function (pokeName) {
  var pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
  fetch(pokeAbilityURL)
    .then(function (pokeAbilityResponse) {
      return pokeAbilityResponse.json();
    })
    .then(function (pokeAbilityData) {
      var dataAbility = pokeAbilityData.abilities;
      console.log("pokeAbilityData", pokeAbilityData.abilities);
      var dataFirstAbility = dataAbility[0];
      var dataSecondAbility = dataAbility[1];
      var dataThirdAbility = dataAbility[2];
      console.log("first", dataFirstAbility, "second", dataSecondAbility);
      //createElement
      var liTag = document.createElement("li");
      liTag.textContent =
        // a lot of code to capitalize the first letter
        dataFirstAbility.ability.name.charAt(0).toUpperCase() +
        dataFirstAbility.ability.name.slice(1);
      //append it to ul List
      abilitiesList.append(liTag);
      //createElement
      var liTag2 = document.createElement("li");
      liTag2.textContent =
        // a lot of code to capitalize the first letter
        dataSecondAbility.ability.name.charAt(0).toUpperCase() +
        dataSecondAbility.ability.name.slice(1);
      //append it to ul List
      abilitiesList.append(liTag2);
      //createElement
      var liTag3 = document.createElement("li");
      liTag3.textContent =
        // a lot of code to capitalize the first letter
        dataThirdAbility.ability.name.charAt(0).toUpperCase() +
        dataThirdAbility.ability.name.slice(1);
      //append it to ul List
      abilitiesList.append(liTag3);
    });
};

// Save local | load local (last priority) | Delete Local

// var loadHistory = function() {
//     searchArray = JSON.parse(localStorage.getItem("pokeSearch"));

//     if (searchArray) {
//         searchHistoryArray = JSON.parse(localStorage.getItem("weatherSearch"));
//         for (let i = 0; i < searchArray.length; i++) {
//             var searchHistoryEl = document.createElement('button');
//             searchHistoryEl.className = "btn";
//             searchHistoryEl.setAttribute("data-city", searchArray[i])
//             searchHistoryEl.innerHTML = searchArray[i];
//             historyButtonsEl.appendChild(searchHistoryEl);
//             historyCardEl.removeAttribute("style");
//         }

//     }
// }

//loadHistory();

// form listener for generate click/submit
var submitListener = document.getElementById("submitListener");
submitListener.addEventListener("submit", function (event) {
  event.preventDefault();
  var searchText = document.getElementById("characterName").value;
  var showData = document.getElementById("invisible");
  showData.classList.remove("invisible");
  if (document.getElementById("renamePokemon").checked) {
    getNameGen();
    fetchPokeData(searchText);
  } else {
    fetchPokeData(searchText);
    characterName.value = "";
  }
});
