// Global Variables
var pokeListItems = document.querySelectorAll('.list-item');
var pokeTypeOne = document.querySelector('.poke-type-one');
var pokeTypeTwo = document.querySelector('.poke-type-two');

// Grab pokemon by name Fetch Name Function -- Jem
var fetchPokeData = function(pokeName) {
    var pokeName = "https://pokeapi.co/api/v2/pokemon/pikachu"
    fetch(
            pokeName
        )
        .then(function(pokeDataresponse) {
            return pokeDataresponse.json();
        })
        .then(function(pokeDataresponse) {
            console.log(pokeDataresponse)
            resetScreen();

            var dataTypes = data['types'];
            var dataFirstType = dataTypes[0];
            var dataSecondType = dataTypes[1];
            pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']['abilities']);
            if (dataSecondType) {
                pokeTypeTwo.classList.remove('hide');
                pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']['abilities']);
            } else {
                pokeTypeTwo.classList.add('hide');
                pokeTypeTwo.textContent = '';
            }
            mainScreen.classList.add(dataFirstType['type']['name']);

            pokeName.textContent = capitalize(data['name']);
            pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
            pokeWeight.textContent = data['weight'];
            pokeHeight.textContent = data['height'];
            pokeFrontImage.src = data['sprites']['front_default'] || '';
            pokeBackImage.src = data['sprites']['back_default'] || '';
        });
};


// Display Name Function -- Jem


// Fetch Abilities Function -- Jem

var apiStats = "https://pokeapi.co/api/v2/pokemon/25"
fetch(
        apiStats
    )
    .then(function(statsResponse) {
        return statsResponse.json();
    });

// Display Abilities function -- Jem



// Event listener for Generate, Save, Delete -- TBD

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