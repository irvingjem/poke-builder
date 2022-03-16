var apiNames = "https://fungenerators.com/name/pokemon/"
fetch(
        apiNames
    )
    .then(function(namesResponse) {
        return namesResponse.json();
    });

var apiStats = "https://pokeapi.co/"
fetch(
        apiStats
    )
    .then(function(statsResponse) {
        return statsResponse.json();
    });