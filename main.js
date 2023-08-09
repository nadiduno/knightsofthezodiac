async function userData() {
    await fetch("https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Estudando o JSON
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
}
userData()


