//Aula 1 - Introdução ao JavaScript

/*
var nome = "Will"
var idade = 18
var frase = "Não tenho nenhum time"
alert("Bem vindo " + nome)
alert("Você tem " + idade + " anos, certo?")

console.log(nome)
console.log(idade * 1)
console.log(frase.replace("tenho", "gosto de"))
console.log(frase.toUpperCase())
alert(frase.replace("tenho", "gosto de"))
*/

//Aula 2 Array e Dicionário

/*
var lista = ["Um", "Três","Cinco"]
lista.push("Sete", "Nove")
lista.pop()

console.log(lista)
console.log(lista.reverse())
console.log(lista[2])
console.log(lista.length)
//alert(lista[2])

console.log(lista.reverse())
console.log(lista.toString())

console.log(lista[1]);
console.log(lista.toString()[2])
console.log(lista.join(" - "))

var biblioteca = {cliente:"Will", ano:2002}
console.log(biblioteca)
console.log(biblioteca.cliente)
//alert(biblioteca.ano)

var biblioteca2 = [{livro:"L1", preco:100}, {livro:"L2", preco:200}]
console.log(biblioteca2)
*/

//Aula 3 - Condicionais, laços de repetição e Date

/*
var idade = prompt("Qual a idade?")
if (idade >=18){
	alert("Você é de maior")}
else{
	alert("Você é de menor")}

var count = 0
while (count <= 3){
	console.log(count)
	count ++}


var count;
for(count 1; count<=5; count++){
	alert(count)}


var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())
*/

//Aula 4 - Desenvolva páginas web com JavaScript

/*
function soma(n1, n2){
return n1 + n2}

function setReplace(frase, nome,novonome){
	return frase.replace(nome, novonome)}

alert(setReplace("Vai japão", "japão", "brasil"))

 
 function validaIdade(idade){
	 var validar;
	 if (idade >= 18){
	 validar = true}
	 
	 else{
		validar = false}
		
	 return (validar)}
 
var idade = prompt("Qual idade? ")
console.log(validaIdade(idade))
*/

//Aula 5 - Manipulando elementps da página

/*
function botão(){
	//alert("Obrigado")
	//console.log(document.getElementById("agradecimento"))
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b>"}

function redirecionar(){
	window.open("https://github.com/WillOliv")
	//window.location.href = "https://github.com/WillOliv"}

function dentro(elemento){
	//document.getElementById("mousemove").innerHTML = ("passe denovo")
	elemento.innerHTML = "Pode retirar"}

function fora(elemento){
	//document.getElementById("mousemove").innerHTML = ("Thanks")
	//alert("Não encosta")
	elemento.innerHTML = "Passe o mouse aqui"}

function loading(){
	//alert("A página carregou")}

function funcaochange(elemento){
	console.log(elemento.value)}
*/
