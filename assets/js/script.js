var apiNames = "https://fungenerators.com/name/pokemon/"
fetch(
        apiNames
    )
    .then(function(nameResponse) {
        return cityResponse.json();
    });

var apiStats = "https://pokeapi.co/"
fetch(
        apiStats
    )
    .then(function(raceResponse) {
        return raceResponse.json();
    });