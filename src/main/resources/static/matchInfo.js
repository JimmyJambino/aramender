function fetchMatch(URL, playerId) {
    //let aramEnderCount = 0; // need to be moved outside this scope
    fetch(URL)
        .then(res => res.json())
        .then(match => {
            //const player = match.metadata.participants.filter(p => p == "tuVU3fSYF0SuHd86SMqS-m_P1EM8fDrxX4oIfZMpth57thGuKWYS8rd09qwys-nrfWW0ehMHoWYv6g")
            const ender = match.info.participants.filter(p => p.nexusKills == 1 || p.nexusTakedowns == 1)

            for(let i = 0; i < ender.length; i++) {
                console.log("index:" + i)
                if(ender[i].puuid == playerId) {
                    return 1;
                }
            }
            return 0;
            })
    // Check for number of aramEnds and display number accordingly in html with different images?

}

function displayResults(playerName, count) {
    let body = document.getElementById("divBody").innerHTML;
    
}

function fetchOnePlayerMatches(URL, playerId, playerName) {
    fetch(URL)
        .then(res => res.json())
        .then(matches => {
            let counter = 0;
            for(let i = 0; i < matches.length; i++) {
                counter += fetchMatch("https://europe.api.riotgames.com/lol/match/v5/matches/"+matches[i]+"?api_key=RGAPI-1d43a225-d9fc-462b-985c-229b3c049d88", playerId)
            }
            displayResults(playerName, counter);
        })
}

function addMatchToDB(URL) {
    let options
    fetch(URL)
        .then(res => res.json())
        .then(match => {

            let mParticipants = match.info.participants; // array of players
            let array = []
            for(let i = 0; i < mParticipants.length; i++) {
                let player = {id: mParticipants[i].puuid, summonerName: mParticipants[i].summonerName, ends: mParticipants[i].nexusKills == 1 || mParticipants[i].nexusTakedowns==1 ? 1 : 0 }
                array.push(player)
            }
            console.log(array)
            let m = {mId: match.metadata.matchId, players: array}
            options = makeOptions("POST", m)
          })
        .then(()=> {
            fetch("/",options)
                .then();
        })
}
