// Global Variables
var abilitiesList = document.getElementById("abilities");

// Grab pokemon name / and image
var fetchPokeData = function(pokeName) {
    var pokeNameURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName.toLowerCase();
    fetch(
            pokeNameURL
        )
        .then(function(pokeNameResponse) {
            return pokeNameResponse.json();
        })
        .then(function(pokeNameData) {
            console.log("pokeNameData", pokeNameData);
            resetScreen();

            //setting up the character name 
            var dataTypes = pokeNameData['name'];
            document.getElementById("pokename").textContent = "Name: " + dataTypes;

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

// Display Name Function - Youre doing this one Austin // I updated this to make sure it was printing correctly
let pokeDiv = document.getElementById("pokeDetails");
let getPokeName = function() {
    pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
    var pTag = document.createElement("p");
    pTag.setAttribute("id", "pokename");
    pTag.textContent = "Name: ";
    console.log(pTag);
    //pokeDiv.innerHTML = 'Name: <p id="pokename"></p>';
    //append html to display name
    pokeDiv.append(pTag);
};

//End of Austin work
getPokeName(); //

//Austin note
/*
var hours = [“09”, “10", “11”, “12", “13”, “14", “15”, “16", “17”];
// for each of the hours listed above
// creates a div with classes and inner html generated for each hour
// template literals ${hour} apply to each row
    
let containerEl = document.ElementById("pokename")
hours.forEach(function (hour) {
  
var pokeDiv = document.createElement(“div”);
let getPokeName = function() {
    pokeDiv.classList.add(“font-bold”, “text-xl”, "mb-2");
    pokeDiv.innerHTML = `Name: <p id="pokename"></p>'
}
  <textarea class=“col-md-10 description ${timeColor(hour)}“>${
    localStorage.getItem(hour) || “”
  
  
  </textarea>
  <button data-hour=“${hour}” class=“btn saveBtn col-md-1” onclick=“saveText(this)“>
    <i class=“fas fa-save”></i>
  </button>`;
  // appends to container
  pokeDiv.append(getPokeName);
}); 
*/
//End Austin note

// Fetch Abilities Function -- Jem



var fetchPokeAbility = function(pokeName) {
    var pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(
            pokeAbilityURL
        )
        .then(function(pokeAbilityResponse) {
            return pokeAbilityResponse.json();
        })
        .then(function(pokeAbilityData) {
            console.log("pokeAbilityData", pokeAbilityData)
                //resetScreen();

            var dataAbility = pokeAbilityData.abilities;
            var dataFirstAbility = dataAbility[0];
            var dataSecondAbility = dataAbility[1];
            console.log("first", dataFirstAbility, dataSecondAbility);
            //createElement
            var liTag = document.createElement("li");
            liTag.textContent = dataFirstAbility.ability.name;
            //append it to ul List 
            abilitiesList.append(liTag);
            //createElement
            var liTag2 = document.createElement("li");
            liTag2.textContent = dataSecondAbility.ability.name;
            //append it to ul List 
            abilitiesList.append(liTag2);
            /*
            pokeAbilityOne.textContent = capitalize(dataFirstAbility['ability']);
            if (dataSecondType) {
                pokeAbilityTwo.classList.remove('hide');
                pokeAbilityTwo.textContent = capitalize(dataSecondAbility['ability']);
            } else {
                pokeAbilityTwo.classList.add('hide');
                pokeAbilityTwo.textContent = '';
            }
            mainScreen.classList.add(dataFirstType['abilities']);

            pokeName.textContent = capitalize(data['abilities']);
            pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
            pokeFrontImage.src = data['sprites']['front_default'] || '';
            pokeBackImage.src = data['sprites']['back_default'] || '';
            */
        });
};



// Display Abilities function -- Andy

// var moves = ["Static", "Lightning Rod"];
// for each of the moves listed above
// creates a div with classes and inner html generated for each move
// template literals ${move} apply to each row
// moves.forEach(function(move) {
//     var moveListEl = document.createElement("li");
//     //   moveListEl.classList.add("text-gray-l");
//     moveListEl.innerHTML = `${move}`;
//     // appends to container
//     abilitiesList.append(moveListEl);
//     console.log(this);
// });

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

//on page load call the functions 
//fetchPokeData();
var btnGen = document.getElementById("btnGenerate");
btnGen.addEventListener("click", function() {
    var searchText = document.getElementById("charcterName").value;

    fetchPokeData(searchText);
});