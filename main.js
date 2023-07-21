const urlApi = "https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0";
fetch(urlApi)
fetch(urlApi)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Estudando o JSON
        console.log("API dos Cavaleiros do Zodíaco: https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0")
        console.log(data)

        let nomeZodiaz = data["record"]["Zodic"]["0"]["name"]
        let avatarZodiac = data["record"]["Zodic"]["0"]["avatar"]
        document.getElementById("zodicName").innerHTML = nomeZodiaz
        document.getElementById("zodicImg").setAttribute('src', avatarZodiac)


    })
    .catch((error) => {
        console.log(error)
    })