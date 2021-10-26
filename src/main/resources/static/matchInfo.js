function fetchMatch(URL) {
    fetch(URL)
        .then(res => res.json())
        .then(match => document.getElementById("tbody").innerHTML = `<td>${summ.name}</td><td>${summ.summonerLevel}</td>`)
}