let oc=0
//Profil
let textprofileorigine=document.getElementById("profil").innerText;
let textprofile=document.getElementById("profil");
textprofile.innerHTML="appuyez sur <strong>Profile</strong> pour afficher";
function showprofile(){
    if(oc===0){
    textprofile.innerHTML=textprofileorigine;
    oc++
    }else if(oc===1){
        textprofile.innerHTML="appuyez sur <strong>Profile</strong> pour afficher";
        oc--
    }else{
        textprofile.innerText="veillez raffraichir la page svp";
    }
}

//Cursus
let textcursusorigine=document.getElementById("cursus").innerHTML
let textcursus=document.getElementById("cursus")
textcursus.innerHTML="<center>appuyez sur <strong>Cursus</strong> pour afficher</center>";
function showcursus(){
    if(oc===0){
        textcursus.innerHTML=textcursusorigine;
        oc++
    }else if(oc==1){
        textcursus.innerHTML="<center>appuyez sur <strong>Cursus</strong> pour afficher</center>";
        oc--
    }else{
        textcursus.innerText="<center>veillez raffraichir la page svp</center>";
    }
}
//experience
let textexporigine=document.getElementById("expérience").innerHTML
let textexp=document.getElementById("expérience")
textexp.innerHTML="<center>appuyez sur <strong>expériences</strong> pour afficher</center>";
function showexp(){
    if(oc===0){
        textexp.innerHTML=textexporigine;
        oc++
    }else if(oc==1){
        textexp.innerHTML="<center>appuyez sur <strong>expériences</strong> pour afficher</center>";
        oc--
    }else{
        textexp.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//compétence
let textcomporigine=document.getElementById("compétence").innerHTML
let textcomp=document.getElementById("compétence")
textcomp.innerHTML="<center>appuyez sur <strong>compétences</strong> pour afficher</center>";
function showcomp(){
    if(oc===0){
        textcomp.innerHTML=textcomporigine;
        oc++
    }else if(oc==1){
        textcomp.innerHTML="<center>appuyez sur <strong>Compétences</strong> pour afficher</center>";
        oc--
    }else{
        textcomp.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//langue
let textlangorigine=document.getElementById("langue").innerHTML
let textlang=document.getElementById("langue")
textlang.innerHTML="<center>appuyez sur <strong>langues</strong> pour afficher</center>";
function showlang(){
    if(oc===0){
        textlang.innerHTML=textlangorigine;
        oc++
    }else if(oc==1){
        textlang.innerHTML="<center>appuyez sur <strong>langues</strong> pour afficher</center>";
        oc--
    }else{
        textlang.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//interet
let textintgorigine=document.getElementById("interet").innerHTML
let textint=document.getElementById("interet")
textint.innerHTML="<center>appuyez sur <strong>Centres d'intérêt</strong> pour afficher</center>";
function showinteret(){
    if(oc===0){
        textint.innerHTML=textintgorigine;
        oc++
    }else if(oc==1){
        textint.innerHTML="<center>appuyez sur <strong>Centres d'intérêt</strong> pour afficher</center>";
        oc--
    }else{
        textint.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//stages
let textstagegorigine=document.getElementById("stages").innerHTML
let textstage=document.getElementById("stages")
textstage.innerHTML="<center>appuyez sur <strong>stages</strong> pour afficher</center>";
function showstage(){
    if(oc===0){
        textstage.innerHTML=textstagegorigine;
        oc++
    }else if(oc==1){
        textstage.innerHTML="<center>appuyez sur <strong>stages</strong> pour afficher</center>";
        oc--
    }else{
        textstage.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//activités
let textactorigine=document.getElementById("activités").innerHTML
let textact=document.getElementById("activités")
textact.innerHTML="<center>appuyez sur <strong>activités extra-scolaires</strong> pour afficher</center>";
function showact(){
    if(oc===0){
        textact.innerHTML=textactorigine;
        oc++
    }else if(oc==1){
        textact.innerHTML="<center>appuyez sur <strong>activités extra-scolaires</strong> pour afficher</center>";
        oc--
    }else{
        textact.innerText="<center>veillez raffraichir la page svp</center>";
    }
}

//Commentaires

function comment1(){
    const trcible=document.getElementById("comt1")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment2(){
    const trcible=document.getElementById("comt2")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment3(){
    const trcible=document.getElementById("comt3")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment4(){
    const trcible=document.getElementById("comt4")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment5(){
    const trcible=document.getElementById("comt5")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment6(){
    const trcible=document.getElementById("comt6")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment7(){
    const trcible=document.getElementById("comt7")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment8(){
    const trcible=document.getElementById("comt8")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment9(){
    const trcible=document.getElementById("comt9")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
function comment10(){
    const trcible=document.getElementById("comt10")
    if(oc===0){
        trcible.classList.remove("collapse")
        oc++
    }else{
        trcible.classList.add("collapse")
        oc--
    }
}
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
