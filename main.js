const urlApi = "https://old-shrimp-28.loca.lt/zodic";
fetch(urlApi)
fetch(urlApi)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data)
        let zodic = data[0]["avatar"]
        document.getElementById("zodicName").innerHTML = data[0]["name"]
        document.getElementById("zodicImg").setAttribute('src', zodic)
    })
    .catch((error) => {
        console.log(error)
    })