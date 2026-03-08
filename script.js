function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

let correctEmail="Jeanjacques.B2026@gmail.com"
let correctPassword="Nabil2026B"

if(email===correctEmail && password===correctPassword){

document.getElementById("loginPage").style.display="none"
document.getElementById("app").style.display="flex"

generateTransactions()
createChart()

}else{

document.getElementById("error").innerHTML="Email ou mot de passe incorrect"

}

}

function showSection(section){

document.querySelectorAll(".section").forEach(s=>{
s.style.display="none"
})

document.getElementById(section).style.display="block"

}

function blocked(){

alert("Transaction refusée : COMPTE BLOQUÉ")

}

/* 50 TRANSACTIONS */

function generateTransactions(){

let names=[
"Salaire","Supermarché","Restaurant","Essence",
"Netflix","Amazon","Apple","Transport",
"Cinéma","Pharmacie","Électricité","Internet"
]

let container=document.getElementById("transactions")

for(let i=0;i<50;i++){

let amount=(Math.random()*200).toFixed(2)

let type=Math.random()>0.5?"+":"-"

let div=document.createElement("div")

div.className="transaction"

div.innerHTML=`

<span>${names[Math.floor(Math.random()*names.length)]}</span>
<span class="${type==="+"?"plus":"minus"}">${type}${amount} €</span>

`

container.appendChild(div)

}

}

/* GRAPHIQUE */

function createChart(){

let ctx=document.getElementById("chart")

new Chart(ctx,{
type:"pie",
data:{
labels:["Logement","Transport","Alimentation","Loisirs","Épargne"],

datasets:[{
data:[800,150,300,120,500]
