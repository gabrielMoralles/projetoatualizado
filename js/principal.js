
function geraProduto(form){

    var selQtd= form.querySelector(".inputQtd").value
    var selNome= form.querySelector(".inputProd").value
    var selPreco= form.querySelector(".inputPrec").value
    var selDataFab= form.querySelector(".inputFab").value
    var selDataVal= form.querySelector(".inputVal").value

    var produto = {
        
        contQtd:form.querySelector(".inputQtd").value,
        qtd: document.createTextNode(selQtd),
        
        contPreco: form.querySelector(".inputPrec").value,
        preco: document.createTextNode(selPreco),

        dataFab: document.createTextNode(selDataFab),
        dataVal: document.createTextNode(selDataVal),
        nome: document.createTextNode(selNome)
    
    }

    return produto

}

function geraSituacao(produto){


    console.log(isNaN(produto.contQtd))

    if (isNaN(produto.contQtd)){

        alert("Quantidade Invalida!")
        return false

    }else if(isNaN(produto.contPreco)){

        alert("Preco Invalido!")
        return false

    }else{


        return true
    }

}

function criaElementos(){

    var tabela=document.querySelector(".tabela")
    var tr=document.createElement("tr")

    var qtdTd= document.createElement("td")
    var nomeTd= document.createElement("td")
    var precoTd= document.createElement("td")
    var fabTd= document.createElement("td")
    var valTd= document.createElement("td")

    return appendaElementos(tabela,tr,qtdTd,nomeTd,precoTd,fabTd,valTd)

    }

function appendaElementos(tabela,tr,qtd,nome,preco,fab,val){


    tabela.appendChild(tr)

    var tabelaTr ={
        trQtd : tr.appendChild(qtd),
        trNome : tr.appendChild(nome),
        trPreco : tr.appendChild(preco),
        trFab : tr.appendChild(fab),
        trVal : tr.appendChild(val)
    }

return tabelaTr

}

function appendaProduto(produto,tabela){

    tabela.trQtd.appendChild(produto.qtd)
    tabela.trNome.appendChild(produto.nome)
    tabela.trPreco.appendChild(produto.preco)
    tabela.trFab.appendChild(produto.dataFab)
    tabela.trVal.appendChild(produto.dataVal)

}

function main(){

    var form =  document.querySelector(".inputs")
    var produto= geraProduto(form)

    if (geraSituacao(produto)){

        appendaProduto(produto,criaElementos())  

    }

}


 