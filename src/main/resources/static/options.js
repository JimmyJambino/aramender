function makeOptions(method, body) {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if(body) {
        options.body = JSON.stringify(body)
    }
    return options;
}

