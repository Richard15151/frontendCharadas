### Curso Técnico de Desenvolvimento de Sistemas - Senai Itapeva

![Imagem de capa](/gifs/CHARADASFRONT.gif)

**Descrição:**

Este projeto fornece uma interface web intuitiva e fácil de usar para um jogo de charadas. A interface, construída com HTML, CSS e JavaScript, interage com uma API externa (separada) para fornecer charadas e validar as respostas dos jogadores, oferecendo uma experiência simples e agradável.

## Índice

* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Como Executar](#como-executar)
* [Estrutura de Arquivos](#estrutura-de-arquivos)
* [API](#api)
* [Autor](#autor) 
* [Licença](#licença) 

## Funcionalidades

* **Solicitação de nova charada:** O usuário pode solicitar uma nova charada com um clique de botão.  A charada é obtida de forma assíncrona a partir da API.
* **Resposta à charada:** O usuário digita sua resposta em um campo de texto.
* **Validação da resposta:** Ao clicar em "Validar", a resposta é enviada para a API para verificação. A interface exibe se a resposta está correta ou incorreta, mostrando a resposta correta em caso de erro.

## Tecnologias Utilizadas

![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## Como Executar

1.  **Certifique-se de que a API esteja funcionando:** A API REST (não incluída neste repositório) deve estar em execução e acessível. Acesse o repositório da API: https://github.com/Richard15151/APIcharada e em seguida ligue o app.py. Atualize a variável `baseUrl` em `script.js` com o endereço correto da sua API. Exemplo: `const baseUrl = "http://seu-ip:sua-porta/";`
2.  **Abra os arquivos:** Abra o arquivo `index.html` em um navegador web.


## Estrutura de Arquivos

*   `index.html`: Arquivo principal da interface web.
*   `style.css`: Arquivo de estilos CSS para a interface.
*   `script.js`: Arquivo JavaScript contendo a lógica da interface e a comunicação com a API.

## API

Esta interface depende de uma API REST externa (não incluída neste repositório) para fornecer as charadas e validar as respostas. A API deve fornecer os seguintes endpoints:

*   **GET `/charadas`:** Retorna uma charada aleatória em formato JSON (ex: `{"pergunta": "...", "resposta": "..."}`).
*   A API deve ser configurada adequadamente para lidar com solicitações CORS (Cross-Origin Resource Sharing).

Você precisará ter a API em execução para que este front-end funcione corretamente. O endereço da API deve ser configurado na variável `baseUrl` no arquivo `script.js`.

Acesse o repósitorio da API neste link: https://github.com/Richard15151/APIcharada

## Autor

- Richard - https://github.com/Richard15151 - richard.oliveira.senai@gmail.com

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.