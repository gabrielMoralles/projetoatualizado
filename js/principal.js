
 $().keypress("")
var x=0

function zeraInput(form){

    form.querySelector(".inputQtd").value= ""
    form.querySelector(".inputProd").value=""
    form.querySelector(".inputPrec").value =""
    form.querySelector(".inputFab").value=""
    form.querySelector(".inputVal").value=""


}


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

    var form =  document.querySelector(".inputs")
    var selQtd= form.querySelector(".inputQtd").value
    var selNome= form.querySelector(".inputProd").value
    var selPreco= form.querySelector(".inputPrec").value
    var selDataFab= form.querySelector(".inputFab").value
    var selDataVal= form.querySelector(".inputVal").value

    console.log(isNaN(produto.contQtd))


    if (selQtd == "" || selNome == "" || selPreco == "" || selDataFab == "" || selDataVal =="" ){


        alert("algum campo ficou vazio")
        zeraInput(form)
        return false



    } 



    if (isNaN(produto.contQtd)){

        alert("Quantidade Invalida!")
        zeraInput(form)
        return false

    }else if(isNaN(produto.contPreco)){
       
        alert("Preco Invalido!")
        zeraInput(form)
        return false

    }else if (selDataFab > selDataVal){

        alert("Datas invalidas")
        zeraInput(form)
        return false

    }else{


        return true
    }

}

function criaElementos(){

    var tabela=document.querySelector(".tabela");
    var tr=document.createElement("tr");
    var qtdTd= document.createElement("td");
 
    var img=document.createElement("img");
        $(img).attr("src","lixo.png");
        $( img ).click(function() {
            $( this.parentNode ).fadeOut( "slow", function() {
              // After animation completed:
              $( this ).remove();
            });
          });
    

    var nomeTd= document.createElement("td");
    var precoTd= document.createElement("td");
    var fabTd= document.createElement("td");
    var valTd= document.createElement("td");
 
   

    

    return appendaElementos(tabela,tr,qtdTd,nomeTd,precoTd,fabTd,valTd,img)

    }

function appendaElementos(tabela,tr,qtd,nome,preco,fab,val,img){

  

    tabela.appendChild(tr)

    var tabelaTr ={


        trQtd : tr.appendChild(qtd),
        trNome : tr.appendChild(nome),
        trPreco : tr.appendChild(preco),
        trFab : tr.appendChild(fab),
        trVal : tr.appendChild(val),
        trImg : tr.appendChild(img)
        
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

function createDiv(td){


    console.log(td)
    var divMae=document.createElement("div")
    divMae.classList.add("divMae")
    var input=document.createElement("input")
    input.classList.add("inputEdit")
    divMae.appendChild(input)
    var divFilha=document.createElement("div")
    divFilha.classList.add("divFilha")
    var botaoX=document.createElement("button")
    var botaoO=document.createElement("button")
   
    
    $(botaoX).text("X")
    $(botaoO).text("O")
    divMae.appendChild(divFilha)
    divFilha.appendChild(botaoX)
    divFilha.appendChild(botaoO)   
    
    td.appendChild(divMae)


    $(botaoX).on("click",function(){

        var pai= this.parentNode
        pai.parentNode.remove()


    })


           

}


function main(){


    
    
    
    var form =  document.querySelector(".inputs")
    var produto= geraProduto(form)
  
    
    if (geraSituacao(produto)){


        x= x+1
        appendaProduto(produto,criaElementos())  
        zeraInput(form)
        $("td").on("dblclick",function(){


            eleMesmo=this
            createDiv(eleMesmo)


        })

    }else{

        zeraInput(form)
    }
    console.log(x)


    
}


 