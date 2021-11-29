let counter = 0;

function fetchMatch(URL, playerId) {
    fetch(URL)
        .then(res => res.json())
        .then(match => {
            //const player = match.metadata.participants.filter(p => p == "tuVU3fSYF0SuHd86SMqS-m_P1EM8fDrxX4oIfZMpth57thGuKWYS8rd09qwys-nrfWW0ehMHoWYv6g")
            const ender = match.info.participants.filter(p => p.nexusKills == 1 || p.nexusTakedowns == 1)
            const aram = match.info.gameMode == "ARAM";
            for(let i = 0; i < ender.length; i++) {
                if(ender[i].puuid == playerId && aram) {
                    counter++
                    console.log("counting")
                }
            }
        })
}

function displayResults(playerName, count) {
    let case0 = "<h1>PHEW</h1> <span>"+playerName+" has not ended any recent arams. They are cool as a breeze.</span>  <span>Imagine tho?</span>"
    let case1 = "<h1>CRINGE ALERT!</h1> <h1>ARAM ENDER SPOTTED!</h1><span>"+playerName+" has ended " + count + " recent aram games</span>"
    if(count > 0) {
        document.getElementById("divBody").innerHTML = case1;
        document.getElementById("backgroundBody").style.backgroundImage = "url('large.jpg')";
    } else {
        document.getElementById("backgroundBody").style.backgroundImage = "url('pepepog.jpg')";
        document.getElementById("divBody").innerHTML = case0;
    }
    console.log("Summoner: " + playerName + " cringe: " + count)
    counter = 0;
    
}

function fetchOnePlayerMatches(URL, playerId, playerName, key) {
    fetch(URL)
        .then(res => res.json())
        .then(matches => {
            for(let i = 0; i < matches.length; i++) {
                fetchMatch("https://europe.api.riotgames.com/lol/match/v5/matches/"+matches[i]+"?api_key="+key, playerId)
            }
        }).then(()=> {
            console.log("displaying")
        setTimeout(() =>{
            displayResults(playerName, counter)
        }, 500)
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
