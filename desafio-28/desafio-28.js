(function () {
  "use strict";

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  let $form = document.querySelector('[data-js="form"]');
  let $cep = document.querySelector('[data-js="cep"]');
  let $logradouro = document.querySelector('[data-js="logradouro"]');
  let $bairro = document.querySelector('[data-js="bairro"]');
  let $estado = document.querySelector('[data-js="estado"]');
  let $cidade = document.querySelector('[data-js="cidade"]');

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let $input = document.querySelector('[data-js="input-cep"]').value;
    insertData(await getData($input));
  });

  const insertData = (data) => {
    $cep.textContent = `- ${data.cep}`;
    $logradouro.textContent = `- ${data.logradouro}`;
    $bairro.textContent = `- ${data.bairro}`;
    $estado.textContent = `- ${data.uf}`;
    $cidade.textContent = `- ${data.localidade}`;
  };

  async function getData(cep) {
    try {
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      let data = await response.json();
      return data;
    } catch (err) {
      alert("opora");
    }
  }

  // const getData = (cep) => {
  //   fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
})();
