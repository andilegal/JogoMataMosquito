var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquito= 1500
nivel = window.location.search

if (nivel === 'normal') {
criaMosquito=1500

}else if(nivel ==='dificil'){
criaMosquito=1000
}else if(nivel === 'chucknorris'){
criaMosquito=750
}


function ajustaTamanho () {
	// body... 
	 altura = window.innerHeight
	 largura = window.innerWidth
	// console.log(largura,altura)
}

ajustaTamanho()

var cronometro = setInterval(function(){
	tempo-= 1

	if (tempo< 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
window.location.href ='vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML= tempo
	}
	
	
}, 1000)
function posicaoRandom() {
//remover o mosquito anterior caso exista
if(document.getElementById('mosquito')){
document.getElementById('mosquito').remove()
if (vidas> 3) {
	window.location.href= 'fim_de_jogo.html'
}else{
document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
vidas++
}
}
var posicaoX = Math.floor( Math.random() * largura )- 120
var posicaoY = Math.floor( Math.random() * altura ) - 120
//console.log(posicaoY,posicaoX)

posicaoX = posicaoX < 0 ? 0 : posicaoX

posicaoY = posicaoY < 0 ? 0 : posicaoY

// criar elemento html
 var mosquito = document.createElement('img')
 mosquito.src = 'imagens/matheus2.jpeg'
 mosquito.className=tamanhoAleatorio()+' ' + ladoAleatorio()
 mosquito.style.left=posicaoX + 'px'
 mosquito.style.top = posicaoY + 'px'
 mosquito.style.position = 'absolute'
 mosquito.id= 'mosquito'
mosquito.onclick = function(){
	this.remove()
}

 document.body.appendChild( mosquito)


}
function tamanhoAleatorio () {

	var classe = Math.floor( Math.random() * 3)
	switch (classe) {
		case 0:
		return ' mosquito '
		case 1:
		return ' mosquito1 '
		case 2:
		return ' mosquito2 '
			
	}
}
function ladoAleatorio () {
	 var classe = Math.floor( Math.random() * 2)
	switch (classe) {
		case 0:
		return ' ladoA '
		case 1:
		return ' ladoB '
		
}
}
