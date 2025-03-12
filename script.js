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

//Remplissage Tables
function S1(){
    let trT=document.getElementById("trT")
    trT.classList.remove
    //legende
    let Tite=document.getElementById("Tite");
    Tite.innerHTML="SEMESTRE 5";
    //title
    let tlt=document.getElementById("tlt");
    tlt.innerHTML='CONNAISSANCES FONDAMENTALES';
    //LIGNE 1
    let UE1=document.getElementById("UE1");
    UE1.innerHTML='Outils Mathématiques';
    let ECUE1=document.getElementById("ECUE1");
    ECUE1.innerHTML="Mesure et Intégration<br>Analyse Complexe et calculs différentiels<br>Algèbre/Analyse tensorielle";
    let créditECUE1=document.getElementById("créditECUE1");
    créditECUE1.innerHTML='2<br>2<br>2';
    let créditUE1=document.getElementById("créditUE1");
    créditUE1.innerHTML='6'
    //LIGNE 2
    let UE2=document.getElementById("UE2");
    UE2.innerHTML='Probabilités-Statistiques';
    let ECUE2=document.getElementById("ECUE2");
    ECUE2.innerHTML="Probabilités de l'ingénieur<br>Statistiques de l'Ingénieur";
    let créditECUE2=document.getElementById("créditECUE2");
    créditECUE2.innerHTML='1<br>1';
    let créditUE2=document.getElementById("créditUE2");
    créditUE2.innerHTML='2'
        //LIGNE 3
        let UE3=document.getElementById("UE3");
        UE3.innerHTML='Informatique 1';
        let ECUE3=document.getElementById("ECUE3");
        ECUE3.innerHTML="Bureautique-Excel<br>Programmation python";
        let créditECUE3=document.getElementById("créditECUE3");
        créditECUE3.innerHTML='2<br>2';
        let créditUE3=document.getElementById("créditUE3");
        créditUE3.innerHTML='4'
            //title
let tlt2=document.getElementById("tlt2");
tlt2.innerHTML='';
    //LIGNE 1
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML=''
        //Ligne footer
        let presuivant=document.getElementById("presuivant");
        presuivant.innerHTML='<button class="navbutton" onclick="suivant0()">>>>></button>'
}let itera=0;
function affiche(){
    let trT=document.getElementById("trT")
    let trt=document.getElementById("trt")
    let tr1=document.getElementById("tr1")
    let tr2=document.getElementById("tr2")
    let tr3=document.getElementById("tr3")
    let trt2=document.getElementById("trt2")
    let tr4=document.getElementById("tr4")
    let bas=document.getElementById("bas")
    if(itera===0){
    trT.classList.remove('collapse')
    trt.classList.remove('collapse')
    tr1.classList.remove('collapse')
    tr2.classList.remove('collapse')
    tr3.classList.remove('collapse')
    trt2.classList.remove('collapse')
    tr4.classList.remove('collapse')
    bas.classList.remove('collapse')
    itera++
    }else{
        trT.classList.add('collapse')
        trt.classList.add('collapse')
        tr1.classList.add('collapse')
        tr2.classList.add('collapse')
        tr3.classList.add('collapse')
        trt2.classList.add('collapse')
        tr4.classList.add('collapse')
        bas.classList.add('collapse')
        itera--
    }
}
document.getElementById('S1').onclick = function() {
    affiche();
    S1();
};
function suivant0(){
    //title
let tlt=document.getElementById("tlt");
tlt.innerHTML='45';
    //LIGNE 1
    let UE1=document.getElementById("UE1");
    UE1.innerHTML='Mécanique des milieux déformables';
    let ECUE1=document.getElementById("ECUE1");
    ECUE1.innerHTML="Mécanique des milieux continus<br>Resistance des matériaux";
    let créditECUE1=document.getElementById("créditECUE1");
    créditECUE1.innerHTML='2<br>3';
    let créditUE1=document.getElementById("créditUE1");
    créditUE1.innerHTML='5'
    //LIGNE 2
    let UE2=document.getElementById("UE2");
    UE2.innerHTML='Mécanique et Energétique';
    let ECUE2=document.getElementById("ECUE2");
    ECUE2.innerHTML="Mécanique analytique<br>Stransfert thermique";
    let créditECUE2=document.getElementById("créditECUE2");
    créditECUE2.innerHTML='3<br>3';
    let créditUE2=document.getElementById("créditUE2");
    créditUE2.innerHTML='6'
    //LIGNE 3
    let UE3=document.getElementById("UE3");
    UE3.innerHTML='Description et calcul de base';
    let ECUE3=document.getElementById("ECUE3");
    ECUE3.innerHTML="Description coque de navire<br>Calcul de Structure du Navire";
    let créditECUE3=document.getElementById("créditECUE3");
    créditECUE3.innerHTML='2<br>2';
    let créditUE3=document.getElementById("créditUE3");
    créditUE3.innerHTML='4'
    //title
let tlt2=document.getElementById("tlt2");
tlt2.innerHTML='UE  CULTURE GENERALE';
    //LIGNE 1
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='Langue vivante';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="Anglais Technique 1<br>Anglais général<br>Technique d'expression";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='1<br>1<br>1';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML='3'
    //Ligne footer
    let presuivant=document.getElementById("presuivant");
    presuivant.innerHTML='<button class="navbutton" onclick="S1()"><<<<</button>'
}

//S2
