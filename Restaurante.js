// Variavel para poder ler os inputs
const lerLinha = require("readline-sync");

// variaveis 
let cardapio = ["hamburguer","pizza","strogonoff","Esfirra","pastel","coxinha","cuzcuz",
    "refrigerante","suco natural","feijoada"];
let loginGerente = "Admin"
let senhaGerente = "1223"
let cadSenha = "food"

// Começo do Menu
console.log("===========================================================");
console.log("============= Bem-vindo ao Sabor e Código =================");
console.log("===========================================================");

// CÓDIGO PARA REGISTRAR LOGIN E SENHA
console.log("====> Para acessar a gerenciamente do cardapio digite o login e senha <====");
let loginDigitado = lerLinha.question();
let senhaDigitado = lerLinha.question();
if (loginDigitado === loginGerente && senhaDigitado === senhaGerente){
     console.log("Acesso liberado. Seja bem-vindo", loginDigitado);
} else{
    console.log("Acesso negado. Tente novamente.") 
}

// MENU + Input para ler 
console.log("======================= MENU =========================");
console.log("1 - Listar o Cardapio");
console.log("2 - Cadastrar Novos Pratos Para o Cardapio");
console.log("3 - Atualizar Cardapio");
console.log("4 - Excluir pratos do Cardapio ");
console.log("0 - Sair ");
console.log("DIGITE A OPÇÃO ESCOLHIDA: ");
let opcao = lerLinha.question();

// código das opções 
while (opcao -! "0"){
    // Código para listar o cardapio
   if (opcao === "1"){
    console.log("Aqui está todo o cardapio:");
    console.log(cardapio);

    // Código para adicionar mais pratos ao cardapio
   }else if (opcao === "2"){
    // código para colocar a contra-senha para conseguir acessar o gerenciamento.
    let novoPrato = lerLinha.question().toLowerCase();
    console.log("DIgite a Contra-senha para Continuar: ");
    let cadDigitado = lerLinha.question().toLowerCase();
     if(cadDigitado === cadSenha){
       console.log("Acesso Liberado");

    console.log("Informe o Prato que deseja adicionar ao cardapio: ")
    cardapio.push(novoPrato);
    console.log("Prato", novoPrato,"Adicionado com sucesso! ");
    console.log(cardapio);
    }else {
        console.log("Acesso Negado!");
    }

    // Código para atualizar um produto do cardapio
   }else if (opcao === "3"){
     console.log("DIgite a Contra-senha para Continuar: ");
    let cadDigitado = lerLinha.question().toLowerCase();
     if(cadDigitado === cadSenha){
       console.log("Acesso Liberado");

    console.log(cardapio)
    console.log("Informe qual prato deseja ser atualizado: ");
    let pratoAtualizado = lerLinha.question().toLowerCase();
    if(cardapio.includes(pratoAtualizado)){
        console.log("Qual o nome do novo Prato? ")
        let novoPrato = lerLinha.question().toLowerCase();
        let indice = cardapio.indexOf(pratoAtualizado);
        cardapio[indice] = novoPrato;
        console.log("O Produto",pratoAtualizado,"Foi atualizado com sucesso");
        console.log(cardapio)
        } else{
            console.log(novoPrato,"Não foi encontrado no cardapio!");
        }
    }else {
        console.log("Acesso Negado!");
    }

    // Código para remover pratos do cardapio
   } else if (opcao === "4"){
     console.log("DIgite a Contra-senha para Continuar: ");
    let cadDigitado = lerLinha.question().toLowerCase();
     if(cadDigitado === cadSenha){
       console.log("Acesso Liberado");

    console.log(cardapio);
    console.log("Qual prato do cardapio deseja Remover? ");
    let pratoRemover = lerLinha.question().toLowerCase();
    if(cardapio.includes(pratoRemover)){
        let indiceExcluir = cardapio.indexOf(pratoRemover);
        cardapio.splice(indiceExcluir,1);
        console.log(pratoRemover, "Foi removido com sucesso");
    }
   }else{
    console.log("Acesso Negado!");
   }
  }else {
      console.log("Opção Invalida!");
  }
   // Linha para repetir o menu e evitar o código de se repetir para sempre 
  console.log("======================= MENU =========================");
  console.log("1 - Listar o Cardapio");
  console.log("2 - Cadastrar Novos Pratos Para o Cardapio");
  console.log("3 - Atualizar Cardapio");
  console.log("4 - Excluir pratos do Cardapio ");
  console.log("0 - Sair ");
  console.log("DIGITE A OPÇÃO ESCOLHIDA: ");
  opcao = lerLinha.question();
}