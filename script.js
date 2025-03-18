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
    //LIGNE 4
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML=''
    //LIGNE 5
let UE5=document.getElementById("UE5");
UE5.innerHTML='';
let ECUE5=document.getElementById("ECUE5");
ECUE5.innerHTML='';
let créditECUE5=document.getElementById("créditECUE5");
créditECUE5.innerHTML='';
let créditUE5=document.getElementById("créditUE5");
créditUE5.innerHTML=''
    //LIGNE 6
    let UE6=document.getElementById("UE6");
    UE6.innerHTML='';
    let ECUE6=document.getElementById("ECUE6");
    ECUE6.innerHTML='';
    let créditECUE6=document.getElementById("créditECUE6");
    créditECUE6.innerHTML='';
    let créditUE6=document.getElementById("créditUE6");
    créditUE6.innerHTML=''
    //LIGNE 7
    let UE7=document.getElementById("UE7");
    UE7.innerHTML='';
    let ECUE7=document.getElementById("ECUE7");
    ECUE7.innerHTML='';
    let créditECUE7=document.getElementById("créditECUE7");
    créditECUE7.innerHTML='';
    let créditUE7=document.getElementById("créditUE7");
    créditUE7.innerHTML=''
            //LIGNE 8
            let UE8=document.getElementById("UE8");
            UE8.innerHTML='';
            let ECUE8=document.getElementById("ECUE8");
            ECUE8.innerHTML="";
            let créditECUE8=document.getElementById("créditECUE8");
            créditECUE8.innerHTML='';
            let créditUE8=document.getElementById("créditUE8");
            créditUE8.innerHTML=''   
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
    let tr5=document.getElementById("tr5")
    let tr6=document.getElementById("tr6")
    let tr7=document.getElementById("tr7")
    let tr8=document.getElementById("tr8")
    let trt3=document.getElementById("trt3")
    let bas=document.getElementById("bas")
    if(itera===0){
    trT.classList.remove('collapse')
    trt.classList.remove('collapse')
    tr1.classList.remove('collapse')
    tr2.classList.remove('collapse')
    tr3.classList.remove('collapse')
    trt2.classList.remove('collapse')
    tr4.classList.remove('collapse')
    //tr5.classList.remove('collapse')
    //tr6.classList.remove('collapse')
    //tr7.classList.remove('collapse')
    //trt3.classList.remove('collapse')
    //tr8.classList.remove('collapse')
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
        tr5.classList.add('collapse')
        tr6.classList.add('collapse')
        tr7.classList.add('collapse')
        trt3.classList.add('collapse')
        tr8.classList.add('collapse')
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
    //LIGNE 4
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='Langue vivante';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="Anglais Technique 1<br>Anglais général<br>Technique d'expression";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='1<br>1<br>1';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML='3'
//LIGNE 5
let UE5=document.getElementById("UE5");
UE5.innerHTML='';
let ECUE5=document.getElementById("ECUE5");
ECUE5.innerHTML='';
let créditECUE5=document.getElementById("créditECUE5");
créditECUE5.innerHTML='';
let créditUE5=document.getElementById("créditUE5");
créditUE5.innerHTML=''
    //LIGNE 6
    let UE6=document.getElementById("UE6");
    UE6.innerHTML='';
    let ECUE6=document.getElementById("ECUE6");
    ECUE6.innerHTML='';
    let créditECUE6=document.getElementById("créditECUE6");
    créditECUE6.innerHTML='';
    let créditUE6=document.getElementById("créditUE6");
    créditUE6.innerHTML=''
    //LIGNE 7
    let UE7=document.getElementById("UE7");
    UE7.innerHTML='';
    let ECUE7=document.getElementById("ECUE7");
    ECUE7.innerHTML='';
    let créditECUE7=document.getElementById("créditECUE7");
    créditECUE7.innerHTML='';
    let créditUE7=document.getElementById("créditUE7");
    créditUE7.innerHTML=''
        //LIGNE 8
        let UE8=document.getElementById("UE8");
        UE8.innerHTML='';
        let ECUE8=document.getElementById("ECUE8");
        ECUE8.innerHTML="";
        let créditECUE8=document.getElementById("créditECUE8");
        créditECUE8.innerHTML='';
        let créditUE8=document.getElementById("créditUE8");
        créditUE8.innerHTML=''      
    //Ligne footer
    let presuivant=document.getElementById("presuivant");
    presuivant.innerHTML='<button class="navbutton" onclick="S1()"><<<<</button>'
}

//S2
//Remplissage Tables
function S2(){
    let trT=document.getElementById("trT")
    trT.classList.remove
    //legende
    let Tite=document.getElementById("Tite");
    Tite.innerHTML="SEMESTRE 6";
    //title
    let tlt=document.getElementById("tlt");
    tlt.innerHTML='UE CONNAISSANCES FONDAMENTALES';
    //LIGNE 1
    let UE1=document.getElementById("UE1");
    UE1.innerHTML='Analyse numérique et Vibrations Mécaniques';
    let ECUE1=document.getElementById("ECUE1");
    ECUE1.innerHTML="Equations aux Dérivées Partielles (EDP)<br>Méthodes Numériques<br>Mécanique Vibratoire";
    let créditECUE1=document.getElementById("créditECUE1");
    créditECUE1.innerHTML='2<br>2<br>2';
    let créditUE1=document.getElementById("créditUE1");
    créditUE1.innerHTML='6'
    //LIGNE 2
    let UE2=document.getElementById("UE2");
    UE2.innerHTML='Electricité';
    let ECUE2=document.getElementById("ECUE2");
    ECUE2.innerHTML="Installation Electrique";
    let créditECUE2=document.getElementById("créditECUE2");
    créditECUE2.innerHTML='2';
    let créditUE2=document.getElementById("créditUE2");
    créditUE2.innerHTML='2'
        //LIGNE 3
        let UE3=document.getElementById("UE3");
        UE3.innerHTML='';
        let ECUE3=document.getElementById("ECUE3");
        ECUE3.innerHTML='';
        let créditECUE3=document.getElementById("créditECUE3");
        créditECUE3.innerHTML='';
        let créditUE3=document.getElementById("créditUE3");
        créditUE3.innerHTML=''
            //title
let tlt2=document.getElementById("tlt2");
tlt2.innerHTML='UE SPECIALITES';
    //LIGNE 4
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='Mécanique des Fluides ';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="Hydrostatique<br>Hydrodynamique";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='2<br>3';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML='5'
    //LIGNE 5
    let UE5=document.getElementById("UE5");
    UE5.innerHTML='Elasto-Viscoplasticié';
    let ECUE5=document.getElementById("ECUE5");
    ECUE5.innerHTML='Elasticité Linéaire<br>Viscoplasticité';
    let créditECUE5=document.getElementById("créditECUE5");
    créditECUE5.innerHTML='3<br>2';
    let créditUE5=document.getElementById("créditUE5");
    créditUE5.innerHTML='5'
        //LIGNE 6
        let UE6=document.getElementById("UE6");
        UE6.innerHTML='Matériaux et Calcul de Structure';
        let ECUE6=document.getElementById("ECUE6");
        ECUE6.innerHTML='Sciences des matériaux<br>Calcul de Structure Navire<br>';
        let créditECUE6=document.getElementById("créditECUE6");
        créditECUE6.innerHTML='3<br>2';
        let créditUE6=document.getElementById("créditUE6");
        créditUE6.innerHTML='5'
        //LIGNE 7
        let UE7=document.getElementById("UE7");
        UE7.innerHTML='Informatique 2';
        let ECUE7=document.getElementById("ECUE7");
        ECUE7.innerHTML='Programmation Matlab<br>Dessin Assisté par Ordinateur';
        let créditECUE7=document.getElementById("créditECUE7");
        créditECUE7.innerHTML='2<br>2';
        let créditUE7=document.getElementById("créditUE7");
        créditUE7.innerHTML='4'
    //title
let tlt3=document.getElementById("tlt3");
tlt3.innerHTML='UE CULTURE GENERALE';
    //LIGNE 8
    let UE8=document.getElementById("UE8");
    UE8.innerHTML='Droit et Anglais Technique 2';
    let ECUE8=document.getElementById("ECUE8");
    ECUE8.innerHTML="Droit du Travail<br>Anglais Technique 2";
    let créditECUE8=document.getElementById("créditECUE8");
    créditECUE8.innerHTML='1<br>2';
    let créditUE8=document.getElementById("créditUE8");
    créditUE8.innerHTML='3'
    //Ligne footer
    let presuivant=document.getElementById("presuivant");
    presuivant.innerHTML=''
};
function affiche1(){
    let trT=document.getElementById("trT")
    let trt=document.getElementById("trt")
    let tr1=document.getElementById("tr1")
    let tr2=document.getElementById("tr2")
    let tr3=document.getElementById("tr3")
    let trt2=document.getElementById("trt2")
    let tr4=document.getElementById("tr4")
    let tr5=document.getElementById("tr5")
    let tr6=document.getElementById("tr6")
    let tr7=document.getElementById("tr7")
    let tr8=document.getElementById("tr8")
    let trt3=document.getElementById("trt3")
    //let bas=document.getElementById("bas")
    if(oc===0){
    trT.classList.remove('collapse')
    trt.classList.remove('collapse')
    tr1.classList.remove('collapse')
    tr2.classList.remove('collapse')
    //tr3.classList.remove('collapse')
    trt2.classList.remove('collapse')
    tr4.classList.remove('collapse')
    tr5.classList.remove('collapse')
    tr6.classList.remove('collapse')
    tr7.classList.remove('collapse')
    trt3.classList.remove('collapse')
    tr8.classList.remove('collapse')
    //bas.classList.remove('collapse')
    oc++
    }else{
        trT.classList.add('collapse')
        trt.classList.add('collapse')
        tr1.classList.add('collapse')
        tr2.classList.add('collapse')
        //tr3.classList.add('collapse')
        trt2.classList.add('collapse')
        tr4.classList.add('collapse')
        tr5.classList.add('collapse')
        tr6.classList.add('collapse')
        tr7.classList.add('collapse')
        trt3.classList.add('collapse')
        tr8.classList.add('collapse')
        //bas.classList.add('collapse')
        oc--
    }
}
document.getElementById('S2').onclick = function() {
    affiche1();
    S2();
};
//S3

//Remplissage Tables
function S3(){
    let trT=document.getElementById("trT")
    trT.classList.remove
    //legende
    let Tite=document.getElementById("Tite");
    Tite.innerHTML="SEMESTRE 7";
    //title
    let tlt=document.getElementById("tlt");
    tlt.innerHTML='UE SPECIALITES';
    //LIGNE 1
    let UE1=document.getElementById("UE1");
    UE1.innerHTML='Projet Boucle Navire 1';
    let ECUE1=document.getElementById("ECUE1");
    ECUE1.innerHTML="Boucle Navire 1";
    let créditECUE1=document.getElementById("créditECUE1");
    créditECUE1.innerHTML='2';
    let créditUE1=document.getElementById("créditUE1");
    créditUE1.innerHTML='2'
    //LIGNE 2
    let UE2=document.getElementById("UE2");
    UE2.innerHTML='Stabilité et calcul avancé de structure';
    let ECUE2=document.getElementById("ECUE2");
    ECUE2.innerHTML="Stabilité Statique du navire<br>Calcul avancé des Structures flottantes et Fatigue";
    let créditECUE2=document.getElementById("créditECUE2");
    créditECUE2.innerHTML='3<br>3';
    let créditUE2=document.getElementById("créditUE2");
    créditUE2.innerHTML='6'
        //LIGNE 3
        let UE3=document.getElementById("UE3");
        UE3.innerHTML='';
        let ECUE3=document.getElementById("ECUE3");
        ECUE3.innerHTML='';
        let créditECUE3=document.getElementById("créditECUE3");
        créditECUE3.innerHTML='';
        let créditUE3=document.getElementById("créditUE3");
        créditUE3.innerHTML=''
            //title
let tlt2=document.getElementById("tlt2");
tlt2.innerHTML='UE METHODOLOGIE';
    //LIGNE 4
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='Introduction à la Méthode des éléments finis';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="Techniques d'approximation de solutions des équations differentielles<br>Approche par la  Méthode des éléments Finis";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='2<br>4';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML='6'
    //LIGNE 5
    let UE5=document.getElementById("UE5");
    UE5.innerHTML='Calcul de Structure Avancé';
    let ECUE5=document.getElementById("ECUE5");
    ECUE5.innerHTML=' Calcul avancé des Structures navales et offshore et Fatigue';
    let créditECUE5=document.getElementById("créditECUE5");
    créditECUE5.innerHTML='3';
    let créditUE5=document.getElementById("créditUE5");
    créditUE5.innerHTML='3'
        //LIGNE 6
        let UE6=document.getElementById("UE6");
        UE6.innerHTML="Méthode des Volumes Finis";
        let ECUE6=document.getElementById("ECUE6");
        ECUE6.innerHTML='Méthode des Volumes Finis';
        let créditECUE6=document.getElementById("créditECUE6");
        créditECUE6.innerHTML='3';
        let créditUE6=document.getElementById("créditUE6");
        créditUE6.innerHTML='3'
        //LIGNE 7
        let UE7=document.getElementById("UE7");
        UE7.innerHTML="Techniques d'Assemblage";
        let ECUE7=document.getElementById("ECUE7");
        ECUE7.innerHTML='Techniques de collage et de rivetage<br>Techniques de Soudage ';
        let créditECUE7=document.getElementById("créditECUE7");
        créditECUE7.innerHTML='2<br>4';
        let créditUE7=document.getElementById("créditUE7");
        créditUE7.innerHTML='6'
    //title
let tlt3=document.getElementById("tlt3");
tlt3.innerHTML='UE CULTURE GENERALE';
    //LIGNE 8
    let UE8=document.getElementById("UE8");
    UE8.innerHTML='Entrepreunariat et Communication';
    let ECUE8=document.getElementById("ECUE8");
    ECUE8.innerHTML="Anglais Technique 3<br>Entrepreunariat<br>Techniques de Redaction";
    let créditECUE8=document.getElementById("créditECUE8");
    créditECUE8.innerHTML='2<br>1<br>1';
    let créditUE8=document.getElementById("créditUE8");
    créditUE8.innerHTML='4'
    //Ligne footer
    let presuivant=document.getElementById("presuivant");
    presuivant.innerHTML=''
};
function affiche2(){
    let trT=document.getElementById("trT")
    let trt=document.getElementById("trt")
    let tr1=document.getElementById("tr1")
    let tr2=document.getElementById("tr2")
    let tr3=document.getElementById("tr3")
    let trt2=document.getElementById("trt2")
    let tr4=document.getElementById("tr4")
    let tr5=document.getElementById("tr5")
    let tr6=document.getElementById("tr6")
    let tr7=document.getElementById("tr7")
    let tr8=document.getElementById("tr8")
    let trt3=document.getElementById("trt3")
    //let bas=document.getElementById("bas")
    if(oc===0){
    trT.classList.remove('collapse')
    trt.classList.remove('collapse')
    tr1.classList.remove('collapse')
    tr2.classList.remove('collapse')
    //tr3.classList.remove('collapse')
    trt2.classList.remove('collapse')
    tr4.classList.remove('collapse')
    tr5.classList.remove('collapse')
    tr6.classList.remove('collapse')
    tr7.classList.remove('collapse')
    trt3.classList.remove('collapse')
    tr8.classList.remove('collapse')
    //bas.classList.remove('collapse')
    oc++
    }else{
        trT.classList.add('collapse')
        trt.classList.add('collapse')
        tr1.classList.add('collapse')
        tr2.classList.add('collapse')
        //tr3.classList.add('collapse')
        trt2.classList.add('collapse')
        tr4.classList.add('collapse')
        tr5.classList.add('collapse')
        tr6.classList.add('collapse')
        tr7.classList.add('collapse')
        trt3.classList.add('collapse')
        tr8.classList.add('collapse')
        //bas.classList.add('collapse')
        oc--
    }
}
document.getElementById('S3').onclick = function() {
    affiche2();
    S3();
};

//Remplissage Tables
function S4(){
    let trT=document.getElementById("trT")
    trT.classList.remove
    //legende
    let Tite=document.getElementById("Tite");
    Tite.innerHTML="SEMESTRE 8";
    //title
    let tlt=document.getElementById("tlt");
    tlt.innerHTML='UE SPECIALITES';
    //LIGNE 1
    let UE1=document.getElementById("UE1");
    UE1.innerHTML='Systemes Hydrauliques';
    let ECUE1=document.getElementById("ECUE1");
    ECUE1.innerHTML="Pompes , Turbines et Verins";
    let créditECUE1=document.getElementById("créditECUE1");
    créditECUE1.innerHTML='3';
    let créditUE1=document.getElementById("créditUE1");
    créditUE1.innerHTML='3'
    //LIGNE 2
    let UE2=document.getElementById("UE2");
    UE2.innerHTML="Méthode avancée de l'élément fini";
    let ECUE2=document.getElementById("ECUE2");
    ECUE2.innerHTML="Calcul de structure flottante par élément fini";
    let créditECUE2=document.getElementById("créditECUE2");
    créditECUE2.innerHTML='3';
    let créditUE2=document.getElementById("créditUE2");
    créditUE2.innerHTML='3'
        //LIGNE 3
        let UE3=document.getElementById("UE3");
        UE3.innerHTML='Projet et Organisation de Chantier Naval et Offshore';
        let ECUE3=document.getElementById("ECUE3");
        ECUE3.innerHTML='Boucle Navire 2<br>Organisation de Chantier Naval et Offshore';
        let créditECUE3=document.getElementById("créditECUE3");
        créditECUE3.innerHTML='2<br>2';
        let créditUE3=document.getElementById("créditUE3");
        créditUE3.innerHTML='4'
            //title
let tlt2=document.getElementById("tlt2");
tlt2.innerHTML='UE METHODOLOGIE';
    //LIGNE 4
    let UE4=document.getElementById("UE4");
    UE4.innerHTML='Traitement des Matériaux';
    let ECUE4=document.getElementById("ECUE4");
    ECUE4.innerHTML="Méthode des Eléments Finis structures<br>Construction en Bois";
    let créditECUE4=document.getElementById("créditECUE4");
    créditECUE4.innerHTML='3<br>3';
    let créditUE4=document.getElementById("créditUE4");
    créditUE4.innerHTML='6'
    //LIGNE 5
    let UE5=document.getElementById("UE5");
    UE5.innerHTML='Machines Thermiques et électriques';
    let ECUE5=document.getElementById("ECUE5");
    ECUE5.innerHTML='Machines Thermiques<br>Machines électriques';
    let créditECUE5=document.getElementById("créditECUE5");
    créditECUE5.innerHTML='2<br>3';
    let créditUE5=document.getElementById("créditUE5");
    créditUE5.innerHTML='5'
        //LIGNE 6
        let UE6=document.getElementById("UE6");
        UE6.innerHTML="Propulsion";
        let ECUE6=document.getElementById("ECUE6");
        ECUE6.innerHTML="Resistance à l'avancement<br>Systèmes de Propulsion";
        let créditECUE6=document.getElementById("créditECUE6");
        créditECUE6.innerHTML='3<br>3';
        let créditUE6=document.getElementById("créditUE6");
        créditUE6.innerHTML='6'
        //LIGNE 7
        let UE7=document.getElementById("UE7");
        UE7.innerHTML="";
        let ECUE7=document.getElementById("ECUE7");
        ECUE7.innerHTML='';
        let créditECUE7=document.getElementById("créditECUE7");
        créditECUE7.innerHTML='';
        let créditUE7=document.getElementById("créditUE7");
        créditUE7.innerHTML=''
    //title
let tlt3=document.getElementById("tlt3");
tlt3.innerHTML='UE CULTURE GENERALE';
    //LIGNE 8
    let UE8=document.getElementById("UE8");
    UE8.innerHTML='Gestion de Projet et Communication';
    let ECUE8=document.getElementById("ECUE8");
    ECUE8.innerHTML="Gestion de Projet<br>Anglais maritime 1";
    let créditECUE8=document.getElementById("créditECUE8");
    créditECUE8.innerHTML='1<br>2';
    let créditUE8=document.getElementById("créditUE8");
    créditUE8.innerHTML='3'
    //Ligne footer
    let presuivant=document.getElementById("presuivant");
    presuivant.innerHTML=''
};
function affiche3(){
    let trT=document.getElementById("trT")
    let trt=document.getElementById("trt")
    let tr1=document.getElementById("tr1")
    let tr2=document.getElementById("tr2")
    let tr3=document.getElementById("tr3")
    let trt2=document.getElementById("trt2")
    let tr4=document.getElementById("tr4")
    let tr5=document.getElementById("tr5")
    let tr6=document.getElementById("tr6")
    let tr7=document.getElementById("tr7")
    let tr8=document.getElementById("tr8")
    let trt3=document.getElementById("trt3")
    //let bas=document.getElementById("bas")
    if(oc===0){
    trT.classList.remove('collapse')
    trt.classList.remove('collapse')
    tr1.classList.remove('collapse')
    tr2.classList.remove('collapse')
    tr3.classList.remove('collapse')
    //trt2.classList.remove('collapse')
    tr4.classList.remove('collapse')
    tr5.classList.remove('collapse')
    tr6.classList.remove('collapse')
    //tr7.classList.remove('collapse')
    trt3.classList.remove('collapse')
    tr8.classList.remove('collapse')
    //bas.classList.remove('collapse')
    oc++
    }else{
        trT.classList.add('collapse')
        trt.classList.add('collapse')
        tr1.classList.add('collapse')
        tr2.classList.add('collapse')
        tr3.classList.add('collapse')
        //trt2.classList.add('collapse')
        tr4.classList.add('collapse')
        tr5.classList.add('collapse')
        tr6.classList.add('collapse')
        //tr7.classList.add('collapse')
        trt3.classList.add('collapse')
        tr8.classList.add('collapse')
        //bas.classList.add('collapse')
        oc--
    }
}
document.getElementById('S4').onclick = function() {
    affiche3();
    S4();
};
