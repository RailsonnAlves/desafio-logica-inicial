let nomeHeroi = "HEITOR"
let xpHeroi = 100000
let ranking = "FERRO"

const menssagem1 = "O heroi de nome "
const menssagem2 = " esta no nivel de "

if(xpHeroi <= 1000){
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 2000){
    ranking = "BRONZE"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 5000){
    ranking = "PRATA"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 7000){
    ranking = "OURO"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 8000){
    ranking = "PLATINA"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 9000){
    ranking = "ASCENDENTE"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else if(xpHeroi <= 10000){
    ranking = "IMORTAL"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}
else{
    ranking = "RADIANTE"
    console.log(menssagem1 + nomeHeroi + menssagem2 + ranking)
}