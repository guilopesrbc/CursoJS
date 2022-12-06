function calcular(){
    var entrada = document.getElementById('txtnum')
    var res = document.getElementById('seltab')
    var num = Number(entrada.value)

    if (entrada.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else{
        res.innerHTML =""
        for (var x = 1; x <= 10; x++){
            var item = document.createElement('option')
            item.text = `${num} x ${x} = ${num*x}`
            res.appendChild(item)
           
        }
    }

}