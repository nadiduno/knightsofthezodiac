async function userData() {
    await fetch("https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Estudando os dados 
            console.log(data)

            // Criando o DOM com JS
            let zodicName = document.createElement('p')
            let zodicImg = document.createElement('img')

            zodicName.textContent = data["record"]["Zodic"]["0"]["name"]
            zodicImg.src = data["record"]["Zodic"]["0"]["avatar"]


            zodicName.className = 'textZodiac';
            zodicImg.className = 'imgZodiac';

            root.append(zodicName, zodicImg)
        })
        .catch((error) => {
            console.error(error)
        })
}
userData()

// Falando de Clases

// O ClassName em JavaScript serve para manipular o atributo class de um elemento HTML.

// Define uma classe para o elemento
// zodicImg.className = 'imgZodiac';
// Adiciona uma nova classe
// div.className += 'imgAnimate';
// Remove todas as classes
// div.className = ''; 
