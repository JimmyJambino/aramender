function fetchMatch(URL, playerId) {
    fetch(URL)
        .then(res => res.json())
        .then(match => {
            const players = match.metadata.participants
            //const player = match.metadata.participants.filter(p => p == "tuVU3fSYF0SuHd86SMqS-m_P1EM8fDrxX4oIfZMpth57thGuKWYS8rd09qwys-nrfWW0ehMHoWYv6g")
            const ender = match.info.participants.filter(p => p.nexusKills == 1 || p.nexusTakedowns == 1)
            for(let i = 0; i < match.metadata.participants.length; i++) {
                if(players[i] == "tuVU3fSYF0SuHd86SMqS-m_P1EM8fDrxX4oIfZMpth57thGuKWYS8rd09qwys-nrfWW0ehMHoWYv6g") { // checks for michael
                    console.log("Player number: " + i)
                }
            }
            for(let i = 0; i < ender.length; i++) {
                //console.log(ender[i].championName)
                //console.log(ender[i].puuid)
                console.log("index:" + i)
                if(ender[i].puuid == playerId) {
                    console.log("FILTHY ARAM ENDER")
                }
            }
            //console.log("Enders: " + JSON.stringify(ender))
            document.getElementById("mode").innerHTML = `${match.info.gameMode}`})
}

function fetchOnePlayerMatches(URL, playerId) {
    fetch(URL)
        .then(res => res.json())
        .then(matches => {
            for(let i = 0; i < matches.length; i++) {
                fetchMatch("https://europe.api.riotgames.com/lol/match/v5/matches/"+matches[i]+"?api_key=RGAPI-1d43a225-d9fc-462b-985c-229b3c049d88", playerId)
            }
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
