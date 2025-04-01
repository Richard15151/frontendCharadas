const baseUrl = "http://127.0.0.1:5000/";
const aleatorio = "charadas";
let res = document.getElementById('textocharada');
let respostaElemento = document.getElementById('response');
const respostaUsuarioInput = document.getElementById('respostaUsuario');
let charadaDados;

async function getCharada() {
    res.innerHTML = '';
    respostaElemento.innerHTML ='';
    respostaElemento.classList.add('hidden');
    respostaUsuarioInput.value = '';
    try {
        const charada = await fetch(baseUrl + aleatorio, {
            method: "GET",
            headers: {
                "Content-Type": "application/json" 
            },
            mode: "cors",
        });
        charadaDados = await charada.json(); 
        let pergunta = charadaDados.pergunta;
        res.innerHTML += `<p>${pergunta}</p>`;
    } catch (error) {
        console.log("Erro ao chamar a API: " + error);
    }
};

async function validateResponse() {
    try {
        let respostaUsuario = document.getElementById('respostaUsuario').value;
        let respostaCorreta = charadaDados.resposta; 
        if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
            respostaElemento.innerHTML = `<p>Parabéns! A resposta era ${respostaCorreta}</p>`;
        } else {
            respostaElemento.innerHTML = `<p>Resposta errada! A resposta era ${respostaCorreta}</p>`;
        } respostaElemento.classList.remove('hidden');
    } catch (error) {
        console.log("Erro ao validar a resposta: " + error);
        respostaElemento.classList.remove('hidden');
        respostaElemento.innerHTML = `<p>Erro ao verificar a resposta. Tente novamente.</p>`;
    }
}
getCharada(); 