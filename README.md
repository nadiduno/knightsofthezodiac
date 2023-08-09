[![Author](https://img.shields.io/badge/Dev-Nadi%20Duno-blueviolet%20)](https://portfolio-nadi.vercel.app/)
[![Social](https://img.shields.io/twitter/follow/nadiduno?label=%40nadiduno&style=social)](https://twitter.com/nadiduno)
[![Linkedin](https://img.shields.io/badge/in-Nadi%20Duno-blue)](https://www.linkedin.com/in/nadiduno/)
<br />
<br />

# App Cavaleiros do zodíaco

<div>
  <img 
    alt="Portfólio de Nadi Duno"
    src="https://github.com/nadiduno/knightsofthezodiac/blob/main/.github/ImgApp.png" 
    width="70%"
  >
  <br />
</div>


# Link Cavaleiros do zodíaco

https://api.jsonbin.io/v3/b/64ba1bd4b89b1e2299c1dbc0

# Códifo de JavaScript

 ```JS
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

            root.append(zodicName, zodicImg)
        })
        .catch((error) => {
            console.error(error)
        })
}
userData()

```

# Clonar o projeto

 ```Bash

git clone https://github.com/nadiduno/knightsofthezodiac

```
# Deploy 

[Ver app](https://knightsofthezodiac.vercel.app/)

# Cria tua propria API

Dado curioso:  Eu criei esta API para poder consumir.

Cria tua propria API - Ver este [post](https://devrelnadiduno.blogspot.com/2023/08/criando-uma-api-publica-dos-cavaleiros.html) que fiz com muito amor

[Criando uma API pública dos Cavaleiros do Zodíaco](https://devrelnadiduno.blogspot.com/2023/08/criando-uma-api-publica-dos-cavaleiros.html)

<br />
Com <💜 /> [Nadi Duno](https://www.linkedin.com/in/nadiduno/) © 2023