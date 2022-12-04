function gerar(){
//Declarando as variaveis
var inicio = document.getElementById("txtinicio")
var final = document.getElementById("txtfim")
var passo = document.getElementById("txtpasso")
var resultado = document.getElementById("txtres")

if (inicio.value.lenght == 0 || final.value.lenght == 0 || passo.value.lenght == 0){
    window.alert("ERRO, DADOS NÃO PREENCHIDOS!")
} else{
    resultado.innerHTML = "Sequência gerada: "
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)
    if (p == 0){
        resultado.innerHTML += "PASSO INVALIDO"
    }else{
        if (i < f){
            while(i <= f){
                resultado.innerHTML += `${i} `
                i += p
        }} else{
            while(i >= f){
                resultado.innerHTML += `${i} `
                i -= p
    }}}

}
}
