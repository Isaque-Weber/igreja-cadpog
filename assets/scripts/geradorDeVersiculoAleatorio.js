async function gerarVersiculoAleatorio() {
    return fetch('https://bible-api.com/?random=verse&translation=almeida')
        .then(response => response.json())
        .then(data => {
            return {text: data.text, reference: data.reference}
        })
        .catch(error => {
            console.error('Erro ao buscar versículo', error)
            return {
                text: "apagaram a força do fogo, escaparam ao fio da espada, da fraqueza tiraram forças, tornaram-se poderosos na guerra, puseram em fuga exércitos estrangeiros",
                reference: "Hebreus 11:34"
            }
        });
}
