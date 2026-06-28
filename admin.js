// ==========================
// LISTA DE PRODUTOS
// ==========================

let produtos = JSON.parse(
localStorage.getItem("produtosGT")
) || [];

let editando = -1;

// ==========================
// SALVAR PRODUTO
// ==========================

function salvarProduto(){

let nome =
document.getElementById("nome").value;

let preco =
document.getElementById("preco").value;

let categoria =
document.getElementById("categoria").value;

let imagem =
document.getElementById("imagem").value;

let descricao =
document.getElementById("descricao").value;


if(
nome==="" ||
preco==="" ||
imagem===""
){

alert("Preencha os campos");

return;

}

const produto={

nome,
preco,
categoria,
imagem,
descricao

};


if(editando==-1){

produtos.push(produto);

}else{

produtos[editando]=produto;

editando=-1;

}

localStorage.setItem(
"produtosGT",
JSON.stringify(produtos)
);

document.getElementById("nome").value="";
document.getElementById("preco").value="";
document.getElementById("imagem").value="";
document.getElementById("descricao").value="";

mostrarProdutos();

}



// ==========================
// MOSTRAR PRODUTOS
// ==========================

function mostrarProdutos(){

const lista=
document.getElementById(
"listaProdutos"
);

lista.innerHTML="";


produtos.forEach((produto,index)=>{

lista.innerHTML +=`

<div class="card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p class="preco">
${produto.preco}
</p>

<p>
${produto.categoria}
</p>

<button
onclick="editar(${index})">

Editar

</button>

<button
class="excluir"
onclick="excluir(${index})">

Excluir

</button>

</div>

`;

});

}


// ==========================
// EXCLUIR
// ==========================

function excluir(index){

let confirmar=
confirm(
"Deseja excluir?"
);

if(confirmar){

produtos.splice(
index,
1
);

localStorage.setItem(
"produtosGT",
JSON.stringify(produtos)
);

mostrarProdutos();

}

}


// ==========================
// INICIAR
// ==========================

mostrarProdutos();

function editar(index){

let produto=
produtos[index];

document.getElementById(
"nome"
).value=produto.nome;

document.getElementById(
"preco"
).value=produto.preco;

document.getElementById(
"categoria"
).value=produto.categoria;

document.getElementById(
"imagem"
).value=produto.imagem;

document.getElementById(
"descricao"
).value=produto.descricao || "";

editando=index;

window.scrollTo({

top:0,
behavior:"smooth"

});

}