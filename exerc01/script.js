function verificar() {
  
var imagem = window.document.getElementById('imagem')

var entrada = document.getElementById('txtidade')

var resultado = document.querySelector('div#res')

var date = new Date()
var ano = date.getFullYear()

if (entrada.value == 0 || entrada.value > ano) {
    window.alert('Verifique os dados e tente novamente!')
} else {

    var dif = Number(ano - entrada.value)
    var sexo = document.getElementsByName('radsex')
    
    if (sexo[0].checked) {
        if (dif < 2) {
            imagem.src = 'fotobebemenino.jpg'
            resultado.innerHTML = `Está pessoa é um Homem com ${dif} ano(s) de idade.`
        } else if (dif > 2 && dif <= 13 ) {
            imagem.src = 'fotomenino.jpg'
            resultado.innerHTML = `Está pessoa é um Homem com ${dif} ano(s) de idade.`
        } else if (dif > 13 && dif <= 23 ) {
            imagem.src = 'jotodojovem.jpg'
            resultado.innerHTML = `Está pessoa é um Homem com ${dif} ano(s) de idade.`
        } else if (dif > 23 && dif <= 60 ) {
            imagem.src = 'fotoadulto.jpg'
            resultado.innerHTML = `Está pessoa é um Homem com ${dif} ano(s) de idade.`
        } else if (dif > 60) {
            imagem.src = 'fotoidoso.jpg'
            resultado.innerHTML = `Está pessoa é um Homem com ${dif} ano(s) de idade.`
        }


    } else{ 
        if (dif <= 2) {
            imagem.src = 'fotobebemenina.jpg'
            resultado.innerHTML = `Está pessoa é uma Mulher com ${dif} ano(s) de idade.`
        } else if (dif > 2 && dif <= 13 ) {
            imagem.src = 'fotomenina.jpg'   
            resultado.innerHTML = `Está pessoa é uma Mulher com ${dif} ano(s) de idade.`
        } else if (dif > 13 && dif <= 23 ) {
            imagem.src = 'fotodajovem.jpg'
            resultado.innerHTML = `Está pessoa é uma Mulher com ${dif} ano(s) de idade.`
        } else if (dif > 23 && dif <= 60 ) {
            imagem.src = 'fotoadulta.jpg'
            resultado.innerHTML = `Está pessoa é uma Mulher com ${dif} ano(s) de idade.`
        } else if (dif > 60) {
            imagem.src = 'fotoidosa.jpg'
            resultado.innerHTML = `Está pessoa é uma Mulher com ${dif} ano(s) de idade.`
        }
}



}
}   