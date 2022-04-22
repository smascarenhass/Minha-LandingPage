var textominhamensagem = document.querySelector('input#texto')
var minhamensagem = document.querySelector('#msgbot')
var rsptbot = document.querySelector('#mensagembot')
var fase = 0

function backpage(){
    window.history.back()
}

function enviar(){
    minhamensagem = textominhamensagem.value
    // Algumas falas somarão a (fase) 
    if (minhamensagem == "oi" && fase == 0){
        rsptbot.innerHTML = "tudo bem?"
        fase += 1
     }
     else if (minhamensagem == "oi" && fase >= 1){
        rsptbot.innerHTML = "ja nos cumprimentamos..."
        fase += 1
     }
     else if (minhamensagem == "desculpe" && fase > 0){
         rsptbot.innerHTML = "Sou um robô, não me incomoda."
     }
     else if (minhamensagem == "sim" || minhamensagem == "tudo" || minhamensagem == "aham" && fase == 1){
         rsptbot.innerHTML = "Que bom. Em que posso ajudar?"
     }
     else if (minhamensagem == "sim e com você?" || minhamensagem == "sim e com voce?" && fase >= 1){
         rsptbot.innerHTML = "Sou um computador, enquanto haver energia estarei bem. Mas diga-me, em que posso ajudar?"
         fase += 1
     }
     else if (minhamensagem == "para o que você serve?" && fase >= 1){
         rsptbot.innerHTML = "Bem, fui desenvolvido para te ajudar a saber mais sobre meu programador. Mas sou capaz de conversar sobre alguns assuntos."
        }
        else if (minhamensagem == "para o que você serve?" && fase >= 0){
            rsptbot.innerHTML = "Bem, não é poque sou um algorítimo que não gosto de um oi, mas enfim, fui desenvolvido para te ajudar a saber mais sobre meu programador. Mas sou capaz de comversar sobre alguns assuntos."
           }

     else{
         rsptbot.innerHTML = "Desculpe, meu programador não me forneceu informações o suficiente para te compreender."
     }
}