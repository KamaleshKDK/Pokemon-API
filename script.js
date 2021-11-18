var board = document.createElement("div")
board.style.width = "1500%"
board.style.flexDirection = "row"
board.style.display = "flex"
board.style.flexWrap = "wrap"
board.style.backgroundColor = "lightgray";



let pokelist = [
    "dratini", "dragonair", "dragonite", "kingdra", "vibrava", "flygon",
    "altaria", "bagon", "shelgon", "salamence", "squirtle", "bulbasaur",
    "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok ", "pikachu ",
    "raichu", "sandshrew", "sandslash", "nidorina", "nidoqueen", "nidoran-m",
    "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "jigglypuff", "zubat",
    "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
    "diglett"]


var fetchMultiple = async (names) => {
    let jsonArray = []
    for (name of names) {
        var pokedata = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(response => response.json())
            .then(data => { jsonArray.push(data) })
    }
    return jsonArray
}

var display = (jsonArray) => {
    for (json of jsonArray) {
        var mydiv = document.createElement("div");
        mydiv.style.display = "flex";
        mydiv.style.flexDirection = "row";
        mydiv.style.flexWrap = "wrap";
        mydiv.style.margin = "0px 10px 0px 0px";
        mydiv.style.padding = "0px 30px";
        mydiv.innerHTML =
            '<h3>' + json.name + '</h3>' +
            '<img src="' + json.sprites.front_default + '" />' +
            '<h3>Weight:' + json.weight + " --- " + '</h3>' +
            '<h3> Moves:' + json.moves[0].move.name + " --- " + '</h3>' +
            '<h3> Ability:' + json.abilities[0].ability.name + '</h3>';

        document.querySelector('#results').appendChild(mydiv);
    }
}

fetchMultiple(pokelist).then(json => {
    display(json)

})

document.body.appendChild(board);
