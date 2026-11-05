const lerLinha = require("readline-sync");


let usuarioCorreto = "Robin";
let senhaCorreta = "1223";
let produtos = ["teclado", "monitor", "mouse", "bateria"];

console.log("====================================================");
console.log("============= Bem-vindo ao Estoque =================");
console.log("====================================================");

// PEGANDO OS DADOS DO USUÁRIO 
console.log("Digite o usuário: ");
let usuarioDigitado = lerLinha.question();
console.log("Digite A senha: ");
let senhaDigitada = lerLinha.question();

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Acesso Liberado!");
} else  {
    console.log("Acesso Negado!")
}
 
console.log("ESCOLHA SUA OPÇÃO! ");
console.log("1 - Listar produtos");
console.log("2 - Cadastrar Novos Produtos");
console.log("3 - Atualizar Produtos");
console.log("4 - Excluir produtos ");
console.log("0 - Sair ");
console.log("DIGITE SUA ESCOLHA: ");
let opcao = lerLinha.question();

while (opcao != "0"){
    if (opcao === "1") {
      console.log(produtos);  
} else if (opcao === "2"){
    console.log("Informe o produto que deseja adicionar: ");
    let novoProduto = lerLinha.question().toLowerCase();
    produtos.push(novoProduto);
    console.log("Produto", novoProduto,"Adicionado com sucesso! ");
    console.log(produtos);
    
} else if (opcao === "3"){
    console.log(produtos)
    console.log("Qual produto deseja atualizar? ");
    let produtoAtualizar = lerLinha.question().toLowerCase();
    if(produtos.includes(produtoAtualizar)){
        console.log("Qual o nome do novo produto? ")
        let novoNome = lerLinha.question().toLowerCase();
        let indice = produtos.indexOf(produtoAtualizar);
        produtos[indice] = novoNome;
        console.log("O Produto", produtoAtualizar,"Foi atualizado com sucesso");
        console.log(produtos)

    } else{
        console.log("Produto não encontrado!");
    }

} else if (opcao === "4"){
    console.log(produtos)
    console.log("Qual produto deseja Remover? ");
    let produtoRemover = lerlinha.question().toLowerCase();
    if(produtos.includes(produtoRemover)){
        let indiceExcluir = produtos.indexOf(produtoRemover);
        produtos.splice(indiceExcluir,1);

    } else {
        console.log("Produto não encontrado!")
    }
} else {
    console.log("Opção Invalida!");
}
console.log("Escolha uma Opção: ");
opcao = lerLinha.question();
}