let nomeHeroi = ["HEITOR", "AQUILES"]
let xpHeroi = [100000, 5000]
let ranking = "FERRO"

const menssagem1 = "O heroi de nome "
const menssagem2 = " esta no nivel de "

for(let i=0; i<nomeHeroi.length; i++)

    if(xpHeroi[i] <= 1000){
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 2000){
        ranking = "BRONZE"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 5000){
        ranking = "PRATA"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 7000){
        ranking = "OURO"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 8000){
        ranking = "PLATINA"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 9000){
        ranking = "ASCENDENTE"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else if(xpHeroi[i] <= 10000){
        ranking = "IMORTAL"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
    else{
        ranking = "RADIANTE"
        console.log(menssagem1 + nomeHeroi[i] + menssagem2 + ranking)
    }
