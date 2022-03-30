// Global Variables
var abilitiesList = document.getElementById("abilities");
let pokeNickname = document.getElementById("pokeNickname");
let pokeDiv = document.getElementById("pokeDetails");
var submitListener = document.getElementById("submitListener");
var saveListener = document.getElementById("saveListener");
var deleteListener = document.getElementById("deleteListener");
let deleteBtn = document.getElementById("deleteBtn");
let storedPoke = localStorage.getItem('searchHistory');
var historyButtonsEl = document.getElementById("searchHistory");
var pokeSearchesArray = JSON.parse(localStorage.getItem("Search History")) || [];
console.log(pokeSearchesArray);

// Grab pokemon name / and image
var fetchPokeData = function(pokeName) {
    var pokeNameURL =
        "https://pokeapi.co/api/v2/pokemon/" + pokeName.toLowerCase();
    fetch(pokeNameURL)
        .then(function(pokeNameResponse) {
            return pokeNameResponse.json();
        })
        .then(function(pokeNameData) {
            console.log("pokeNameData", pokeNameData.name);
            resetScreen();

            // Save local to storage 
            savePokemon(pokeNameData.name);
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

function savePokemon(pokeName) {
    console.log("save btn", pokeName);
    if (pokeSearchesArray.indexOf(pokeName) === -1) {
        pokeSearchesArray.push(pokeName);
        localStorage.setItem(
            "Search History",
            JSON.stringify(pokeSearchesArray)
        );

        //reload search history 
        loadHistory();
    }
}

// Removed old Data from past seach
function resetScreen() {
    //need to fill
    abilities.innerHTML = "";
}
// Display Name Function -
let getPokeName = function() {
    pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
    var pTag = document.createElement("p");
    pTag.setAttribute("id", "pokename");
    pTag.textContent = "Name: ";
    pokeDiv.append(pTag);
};
getPokeName();
// Nickname Randomizer
function getNameGen() {

    var nameGenApi = "https://namey.muffinlabs.com/name.json?frequency=rare";
    fetch(nameGenApi)
        .then(function(nameResponse) {
            return nameResponse.json();
        })
        .then(function(nameData) {
            console.log("random name", nameData[0]);
            pokeNickname.append("(" + nameData[0] + ")");
        });

    pokeNickname.textContent = "";
}

// Fetch Abilities Function -- Jem

var fetchPokeAbility = function(pokeName) {
    var pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(pokeAbilityURL)
        .then(function(pokeAbilityResponse) {
            return pokeAbilityResponse.json();
        })
        .then(function(pokeAbilityData) {
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
//show the pokemon save in searches array


// view saved pokemon function
function viewPokemon() {
    if (localStorage.getItem('pokemonSearchesArray') != null) {
        document.getElementById('searchHistory').innerHTML = savePokemon.textContent = "";
    }
}

if (storedPoke) {
    pokename.textContent = storedPoke
};

var loadHistory = function() {
    //pokeSearchesArray = JSON.parse(localStorage.getItem("Search History"));
    console.log(pokeSearchesArray, pokeSearchesArray.length);
    var loopCOunt = 0;
    //reset the li tags 
    historyButtonsEl.innerHTML = "";

    if (pokeSearchesArray) {
        //searchHistoryArray = JSON.parse(localStorage.getItem("Search History"));
        if (pokeSearchesArray.length > 6) {
            loopCOunt = 6
        } else {
            loopCOunt = pokeSearchesArray.length;
        }
        for (let i = 0; i < loopCOunt; i++) {
            var searchHistoryEl = document.createElement("li");
            searchHistoryEl.className = "btn";
            searchHistoryEl.setAttribute("data-pokemon", pokeSearchesArray[i]);
            searchHistoryEl.innerHTML = pokeSearchesArray[i];
            historyButtonsEl.appendChild(searchHistoryEl);
            //historyCardEl.removeAttribute("style");
        }
    }
};


submitListener.addEventListener("submit", function(event) {
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
        pokeNickname.textContent = "";
    }
});

saveListener.addEventListener("click", function(event) {
    event.preventDefault();

    var searchText = document.getElementById("characterName").value;
    // var showData = document.getElementById("invisible");
    // showData.classList.remove("invisible");
    // if (document.getElementById("renamePokemon").checked) {
    //     getNameGen();
    //     fetchPokeData(searchText);
    // } else {
    //     fetchPokeData(searchText);
    //     characterName.value = "";
    //     pokeNickname.textContent = "";
    // }
    savePokemon(searchText);
});

deleteListener.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("Search History");
    //reset the li tags 
    historyButtonsEl.innerHTML = "";
    pokeSearchesArray = JSON.parse(localStorage.getItem("Search History")) || [];
    loadHistory();
});

loadHistory();