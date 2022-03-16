// Fetch Name Function

var apiNames = "https://fungenerators.com/name/pokemon/";
fetch(apiNames).then(function (namesResponse) {
  return namesResponse.json();
});

// Display Name Function

// Fetch Abilities Function

var apiStats = "https://pokeapi.co/";
fetch(apiStats).then(function (statsResponse) {
  return statsResponse.json();
});

// Display Abilities function

var abilitiesList = document.getElementById("abilities");
var moves = ["Static", "Lightning Rod"];
// for each of the moves listed above
// creates a div with classes and inner html generated for each move
// template literals ${move} apply to each row
moves.forEach(function (move) {
  var moveListEl = document.createElement("li");
  //   moveListEl.classList.add("text-gray-l");
  moveListEl.innerHTML = `${move}`;
  // appends to container
  abilitiesList.append(moveListEl);
  console.log(this);
});

// Event listener for Generate, Save, Delete

// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     // get city name value from input element
//     var cityname = cityNameInputEl.value.trim();

//     // Set city name in local storage and generate search history
//     if (cityname) {
//         searchHistoryArray.push(cityname);
//         localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
//         var searchHistoryEl = document.createElement('button');
//         searchHistoryEl.className = "btn";
//         searchHistoryEl.setAttribute("data-city", cityname)
//         searchHistoryEl.innerHTML = cityname;
//         historyButtonsEl.appendChild(searchHistoryEl);
//         historyCardEl.removeAttribute("style")
//         getWeatherInfo(cityname);
//         cityNameInputEl.value = "";
//     } else {
//         alert("Please enter a City name");
//     }

// }

// Function to grab local image (for now)

// Look in assets folder append to child probably div and create the img

// Save local | load local (last priority) | Delete Local

// var loadHistory = function() {
//     searchArrray =
// }

// var loadHistory = function() {
//     searchArray = JSON.parse(localStorage.getItem("weatherSearch"));

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
