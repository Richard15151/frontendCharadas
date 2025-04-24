const baseUrl = "https://ap-icharada.vercel.app/";
const aleatorio = "charadas";
let res = document.getElementById('textocharada');
let respostaElemento = document.getElementById('response');
const respostaUsuarioInput = document.getElementById('respostaUsuario');
const validateButton = document.getElementById('validate-btn')
let charadaDados
let isValidated = false


async function getCharada() {
    res.innerHTML = ''
    respostaElemento.innerHTML =''
    respostaElemento.classList.add('hidden')
    respostaElemento.classList.remove('bg-green-100', 'text-green-800', 'border-green-300', 'bg-red-100', 'text-red-800', 'border-red-300', 'bg-yellow-100', 'text-yellow-800', 'border-yellow-300')
    validateButton.disabled = false
    isValidated = false
    respostaUsuarioInput.value = ''
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
        res.innerHTML += `<p>${pergunta || 'Não foi possível carregar a pergunta.'}</p>`
    } catch (error) {
        console.log("Erro ao chamar a API: " + error);
        res.innerHTML = `<p style="color: red;">Erro ao carregar charada. Tente novamente.</p>`;
        validateButton.disabled = true;
    }
};

async function validateResponse() {
    if (isValidated) {
        console.log("Já validado.");
        return;
    }

    respostaElemento.classList.remove('bg-green-100', 'text-green-800', 'border-green-300', 'bg-red-100', 'text-red-800', 'border-red-300', 'bg-yellow-100', 'text-yellow-800', 'border-yellow-300');

    try {
        let respostaUsuario = document.getElementById('respostaUsuario').value.trim();

        let respostaCorreta = charadaDados.resposta;

        if (respostaUsuario === '') {
            respostaElemento.innerHTML = `<p><strong>Atenção:</strong> Por favor, digite uma resposta.</p>`;
            respostaElemento.classList.add('bg-yellow-100', 'text-yellow-800', 'border-yellow-300');
            respostaElemento.classList.remove('hidden');
            return;
        }

        if (!charadaDados || typeof charadaDados.resposta === 'undefined') {
            throw new Error("Dados da charada ou resposta não carregados corretamente.");
       }
        
        if (respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
            respostaElemento.innerHTML = `<p><strong>Parabéns!</strong> A resposta "${respostaCorreta}" está correta.</p>`;
            respostaElemento.classList.add('bg-green-100', 'text-green-800', 'border-green-300');
        } else {
            respostaElemento.innerHTML = `<p><strong>Ops!</strong> Resposta errada. A resposta correta era "${respostaCorreta}".</p>`;
            respostaElemento.classList.add('bg-red-100', 'text-red-800', 'border-red-300');
        }
        isValidated = true;
        validateButton.disabled = true;
        respostaElemento.classList.remove('hidden');
    } catch (error) {
        console.error("Erro ao validar a resposta: ", error);
        respostaElemento.classList.remove('hidden');
        respostaElemento.classList.add('bg-red-100', 'text-red-800', 'border-red-300');
        respostaElemento.innerHTML = `<p><strong>Erro:</strong> ${error.message || 'Não foi possível verificar a resposta.'}</p>`;
        isValidated = true;
        validateButton.disabled = true;
    }
}
getCharada(); 