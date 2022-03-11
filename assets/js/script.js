var apiNames = "https://randomuser.me/api/"
fetch(
        apiNames
    )
    .then(function(nameResponse) {
        return cityResponse.json();
    });

var apiRaces = "https://www.dnd5eapi.co/api/races"
fetch(
        apiRaces
    )
    .then(function(raceResponse) {
        return raceResponse.json();
    });

var apiClasses = "https://www.dnd5eapi.co/api/classes"
fetch(
        apiClasses
    )
    .then(function(classResponse) {
        return classResponse.json();
    });