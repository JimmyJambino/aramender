function fetchSummoners(URL) {
    fetch(URL)
        .then(res => res.json())
        .then(data => data.map(summ => `<tr><td>${summ.id}</td><td>${summ.accountId}</td><td>${summ.puuid}</td><td>${summ.name}</td><td>${summ.revisionDate}</td><td>${summ.summonerLevel}</td></tr>`).join(""))// returns data.map()
        .then(string => document.getElementById("tbody").innerHTML = string) // string is now data.map() value
}
function fetchSummoner(URL) {
    fetch(URL)
        .then(res => res.json())
        .then(summ => document.getElementById("tbody1").innerHTML = `<td>${summ.name}</td><td>${summ.summonerLevel}</td>`)
}