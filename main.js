
async function userData() {
    await fetch("https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Estudando os dados 
            console.log(data)

            let zodicName = document.createElement('p')
            let zodicImg = document.createElement('img')

            zodicName.textContent = data["record"]["Zodic"]["0"]["name"]
            zodicImg.src = data["record"]["Zodic"]["0"]["avatar"]

            root.append(zodicName, zodicImg)
        })
        .catch((error) => {
            console.error(error)
        })
}
userData()