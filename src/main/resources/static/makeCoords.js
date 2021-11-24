function showPosition(position) {
    document.getElementById("coords").innerText = "("+position.coords.latitude+","+position.coords.altitude+")"

}

function getCoords() {
    navigator.geolocation.getCurrentPosition(showPosition)
}