let oc=0;
//Outil 01
function convert(){
    let message=document.querySelector('.ecran1');
let userInput=document.getElementById("input").value;
const userSelect=document.getElementById("userSelect").value;
let result=0;
if(userSelect==="Km to m"){
    result=1000*userInput;
    message.innerHTML=userInput+' Km est équivalent à <span>'+result+' m</span>'

}else if(userSelect==="m to Km"){
    result=userInput/1000;
    message.innerHTML=userInput+' m est équivalent à <span>'+result+' Km</span>'
}else if(userSelect==="Kg to g"){
    result=userInput*1000;
    message.innerHTML=userInput+' Kg est équivalent à <span>'+result+' g</span>'
}else if(userSelect==="g to Kg"){
    result=userInput/1000;
    message.innerHTML=userInput+' g est équivalent à <span>'+result+' Kg</span>'
}else{
    message.innerHTML="Convertion <span style='color:red'>"+userSelect+"</span> indisponible pour l'instant"
}
}

let explan=document.querySelector('.explication');
function explaine(){
    if(oc===0){
        explan.innerHTML="Comment jouer à mon jeu de devinette ?🎮 <br>Vous êtes prêts à relever le défi ? Voici les règles simples de ce jeu captivant : Moi Sana je choisis secrètement un nombre compris entre <strong>0 et 100</strong>. <strong>Votre mission</strong> : le deviner ! Vous avez droit à <strong>autant d'essais que vous voulez</strong>, enfin tant que votre conscience ne vous gronde pas🤣. Utilisez-les avec sagesse. À chaque tentative, je vous donnerai un indice précieux : <strong>mon choix est plus grand !</strong> si votre proposition est trop basse. <strong>mon choix est plus petit !</strong> si votre proposition est trop élevée. Si vous devinez le bon nombre, vous gagnez ! Sinon, vous aurez le poids de votre conscience sur les épaules.Alors, êtes-vous prêt à me defier et à prouver votre intuition ?! 😊";
        oc++
    }else{
        explan.innerHTML="";
        oc--
    }
}

let ecran=document.querySelector(".ecran2");
let essaie=document.getElementById("executé")
let input=document.getElementById("inputnumber")
let IAchoiX=Math.floor(Math.random()*101);
let essai=0;

function valider(){
        if(IAchoiX>input.value){
            ecran.innerHTML="mon choix est plus grand";
            essai++
            essaie.innerHTML=essai
        }else if(IAchoiX<input.value){
            ecran.innerHTML="mon choix est plus petit";
            essai++
            essaie.innerHTML=essai
        }else if(IAchoiX==input.value){
            essai++
            essaie.innerHTML=essai
            ecran.innerHTML="Félicitation tu à deviné le nombre correct en "+essai+" essais";
        }else{
            essai++
            essaie.innerHTML=essai
            ecran.innerHTML="saisir un nombre valide svp";
        }
    }
