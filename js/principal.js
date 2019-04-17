
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

function criaElementos(img){

    var tabela=document.querySelector(".tabela")
    var tr=document.createElement("tr")
    var qtdTd= document.createElement("td")
    qtdTd.setAttribute("class", ("qtdTd"+x))
    
    
    

    var nomeTd= document.createElement("td")
    var precoTd= document.createElement("td")
    var fabTd= document.createElement("td")
    var valTd= document.createElement("td")
 
   

    

    return appendaElementos(tabela,tr,qtdTd,nomeTd,precoTd,fabTd,valTd,img)

    }

function appendaElementos(tabela,tr,qtd,nome,preco,fab,val){

  

    tabela.appendChild(tr)

    var tabelaTr ={


        trQtd : tr.appendChild(qtd),
        trNome : tr.appendChild(nome),
        trPreco : tr.appendChild(preco),
        trFab : tr.appendChild(fab),
        trVal : tr.appendChild(val),
        
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


        x= x+1
        appendaProduto(produto,criaElementos())  
        zeraInput(form)
        $("td").on("dblclick",function(){
            var pai= this.parentNode;
            console.log("fui clickado")
            pai.classList.add("fade-out");
            setInterval(function(){

                pai.remove();


            },1000)


        
        
        
        })

    }else{

        zeraInput(form)
    }
    console.log(x)


    
}


 