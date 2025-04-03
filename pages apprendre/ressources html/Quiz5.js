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
    const input11=document.getElementById("input11")
    const input11value=input11.value
    const input12=document.getElementById("input12")
    const input12value=input12.value
    const input13=document.getElementById("input13")
    const input13value=input13.value
    const input14=document.getElementById("input14")
    const input14value=input14.value
    const input15=document.getElementById("input15")
    const input15value=input15.value
    const input16=document.getElementById("input16")
    const input16value=input16.value
    const input17=document.getElementById("input17")
    const input17value=input17.value
    const input18=document.getElementById("input18")
    const input18value=input18.value
    const input19=document.getElementById("input19")
    const input19value=input19.value
    const input20=document.getElementById("input20")
    const input20value=input20.value
    const affichageclass=document.querySelector('p');


    if(input1value=='B'){
        oc++
    }else{
    }
    if(input2value=='C'){
        oc++
    }else{

    }
    if(input3value=='B'){
        oc++
    }else{

    }
    if(input4value=='A'){
        oc++
    }else{

    }
    if(input5value=='A'){
        oc++
    }else{

    }
    if(input6value=='B'){
        oc++
    }else{

    }
    
    if(input7value=='B'){
        oc++
    }else{

    }
    
    if(input8value=='B'){
        oc++
    }else{

    }
    if(input9value=='B'){
        oc++
    }else{}

    if(input10value=='A'){
        oc++
    }else{}

    if(input11value=='C'){
        oc++
    }else{}

    if(input12value=='B'){
        oc++
    }else{}

    if(input13value=='B'){
        oc++
    }else{}

    if(input14value=='B'){
        oc++
    }else{}

    if(input15value=='A'){
        oc++
    }else{}

    if(input16value=='C'){
        oc++
    }else{}

    if(input17value=='A'){
        oc++
    }else{}

    if(input18value=='B'){
        oc++
    }else{}

    if(input19value=='B'){
        oc++
    }else{}

    if(input20value=='C'){
        oc++
    }else{}

    if(oc<10){
        affichageclass.classList.add("alert-warning");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:red;">'+oc+'/20, C\'est insuffisant</span> revoyez le cours si necessaire pour reprendre le Quiz';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz5.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre5.html">Revoir le Cours</a></button>'
    }else if(oc>=10 && oc<=15){
        affichageclass.classList.add("alert-secondary");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:blue;">'+oc+'/20 C\'est bien</span> vous pouvez passer au chapitre suivant';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre5.html">Revoir le Cours</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz5.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre6.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
    }else{
        affichageclass.classList.add("alert-success");
        document.getElementById('divalert').innerHTML = 'Vous avez eux une moyenne de <span style="color:green;">'+oc+'/20 C\'est très bien</span> vous pouvez passer au chapitre suivant';
        document.getElementById('forme').innerHTML ='<button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre5.html">Revoir le Cours</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="Quiz5.html">Refaire le Quiz</a></button><button class="buttonrefreshquiz"><a class="buttonrefreshquiz" href="chapitre6.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
    }
    //document.getElementById('forme').innerHTML ='<button id="buttonrefreshquiz"><a id="buttonrefreshquiz" href="Quiz5.html">Refaire le Quiz</a></button><button id="buttonrefreshquiz"><a id="buttonrefreshquiz" href="chapitre6.html">Chapitre Suivant</a></button><br><br>Vous pouvez le faire autant de fois que vous le voulez';
}
