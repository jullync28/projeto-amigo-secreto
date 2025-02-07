//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

  function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
  

  if (nome == "") {
    alert("Por favor, insira um nome!")
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();

  }

  function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

   
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

  }

  function sortearAmigo() {
    if(amigos.length < 3){
        alert("Adicione um amigo antes de sortear!");
        return;
    }

  


    let indiceSorteado = Math.floor(Math.random()*amigos.length);

    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O amigo sorteado é: <strong> ${amigoSorteado}</strong></li>`;

  }
