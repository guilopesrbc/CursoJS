// definindo variaveis
var entrada = document.getElementById('txtnum')
var tabela = document.getElementById('seladd')
var res = document.getElementById('res')
var valores = []

// função de adição na lista
function adicionar(){
    // caso não há nada digitado na entrada
    if (entrada.value.length == 0){
        alert('Digite um número válido')
    } else{
            res.innerHTML = ''
            var num = Number(entrada.value)
            // caso o valor seja diferente do intervalo 
            if (num < 1 || num > 100){
                alert('Digite um número no intervalo permitido')
            } else{
                // verificação se o número já está na lista
                // não está
                if(valores.indexOf(num) == -1){
                    valores.push(num)
                    var item = document.createElement('option')
                    item.text = `Valor ${num} adicionado`
                    tabela.appendChild(item)
                // já foi adicionado
                } else{
                    alert('Número já esta na lista') 
                }   
            } 
        }
        entrada.value = ""
        entrada.focus()
    }


// função de finalização 
function finalizar(){  
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = ''
        var max = Math.max(...valores)
        var min = Math.min(...valores)
        var soma = 0
        for (var i in valores){
            soma += valores[i]
        }
        var media = soma / valores.length
        res.innerHTML += `<p>Ao todo, temos ${valores.length} elementos cadastrados.<p>`
        res.innerHTML += `<p>O maior valor informado é ${max}<p>`
        res.innerHTML += `<p>O menor valor informado é ${min}<p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}<p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}<p>`
    }
    
    

}
