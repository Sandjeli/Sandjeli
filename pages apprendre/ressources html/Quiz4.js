let oc=0;
function Valider(){
    const input1=document.getElementById("input1")
    const input1value=input1.value
    const input2=document.getElementById("input2")
    const input2value=input2.value
    const input3=document.getElementById("input3")
    const input3value=input3.value
    const input4=document.getElementById("input4")
    const input4value=input4.value
    const input5=document.getElementById("input5")
    const input5value=input5.value
    const input6=document.getElementById("input6")
    const input6value=input6.value
    const input7=document.getElementById("input7")
    const input7value=input7.value
    const input8=document.getElementById("input8")
    const input8value=input8.value
    const input9=document.getElementById("input9")
    const input9value=input9.value
    const input10=document.getElementById("input10")
    const input10value=input10.value
    const affichageclass=document.querySelector('p');


    if(input1value=='B'){
        oc+=2
    }else{
    }
    if(input2value=='B'){
        oc+=2
    }else{

    }
    if(input3value=='A'){
        oc+=2
    }else{

    }
    if(input4value=='C'){
        oc+=2
    }else{

    }
    if(input5value=='B'){
        oc+=2
    }else{

    }
    if(input6value=='B'){
        oc+=2
    }else{

    }
    
    if(input7value=='A'){
        oc+=2
    }else{

    }
    
    if(input8value=='B'){
        oc+=2
    }else{

    }
    if(input9value=='B'){
        oc+=2
    }else{

    }
    if(input10value=='A'){
        oc+=2
    }else{
    }

    if(oc<10){
        affichageclass.classList.add("alert-warning");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:red;">'+oc+'/20, C\'est insuffisant</span> revoyez le cours si necessaire pour reprendre le Quiz';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz4.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre4.html">Revoir le Cours</a></button>'
    }else if(oc>=10 && oc<=15){
        affichageclass.classList.add("alert-secondary");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:blue;">'+oc+'/20 C\'est bien</span> vous pouvez passer au chapitre suivant';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre4.html">Revoir le Cours</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz4.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre5.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
    }else{
        affichageclass.classList.add("alert-success");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:green;">'+oc+'/20 C\'est très bien</span> vous pouvez passer au chapitre suivant';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre4.html">Revoir le Cours</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz4.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre5.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
    }
    //document.getElementById('forme').innerHTML ='<button id="buttonrefreshquiz"><a id="buttonrefreshquiz" href="Quiz4.html">Refaire le Quiz</a></button><button id="buttonrefreshquiz"><a id="buttonrefreshquiz" href="chapitre5.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
}
