

//lien selectionné pour bouton lire suite article
let clique1 = document.querySelector('button.lien1')
let clique2 = document.querySelector('button.lien2')
let clique3 = document.querySelector('button.lien3')
let clique4 = document.querySelector('button.lien4')
let clique5= document.querySelector('button.lien5')
let clique6= document.querySelector('button.lien6')

let paragraphe1 = document.querySelector('p.invisible')
let paragraphe2= document.querySelector('p.invisible2')
let paragraphe3= document.querySelector('p.invisible3')
let paragraphe4= document.querySelector('p.invisible4')
let paragraphe5= document.querySelector('p.invisible5')
let paragraphe6= document.querySelector('p.invisible6')




// compteur 
let compteur1=0
let compteur2=0
let compteur3=0
let compteur4=0
let compteur5=0
let compteur6=0

const value1 = document.querySelector("#value1")
const value2 = document.querySelector("#value2")
const value3 = document.querySelector("#value3")
const value4 = document.querySelector("#value4")
const value5 = document.querySelector("#value5")
const value6 = document.querySelector("#value6")

//ecoute

clique1.addEventListener("click",hide1)
clique2.addEventListener('click',hide2)
clique3.addEventListener('click',hide3)
clique4.addEventListener('click',hide4)
clique5.addEventListener('click',hide5)
clique6.addEventListener('click',hide6)



//focntions pour chaque article lire plus et compteur




function hide1(){
    if(paragraphe1.className=='invisible'){
    paragraphe1.className="visible"
    compteur1++
    value1.textContent = compteur1;
    clique1.textContent= "voir moins"
}else{
    paragraphe1.className='invisible'
    clique1.textContent= "Lire la suite"
}
   
}


function hide2(){
    if(paragraphe2.className=='invisible'){
    paragraphe2.className="visible"
    compteur2++
    value2.textContent = compteur2
    clique2.textContent= "voir moins";
}else{
    paragraphe2.className='invisible'
    clique2.textContent= "Lire la suite"
}
   
}


function hide3(){
    if(paragraphe3.className=='invisible'){
    paragraphe3.className="visible"
    compteur3++
    value3.textContent = compteur3
    clique3.textContent= "voir moins";
}else{
    paragraphe3.className='invisible'
    clique3.textContent= "Lire la suite"
}
   
}


function hide4(){
    if(paragraphe4.className=='invisible'){
    paragraphe4.className="visible"
    compteur4++
    value4.textContent = compteur4
    clique4.textContent= "voir moins";
}else{
    paragraphe4.className='invisible'
    clique4.textContent= "Lire la suite"
}
   
}


function hide5(){
    if(paragraphe5.className=='invisible'){
    paragraphe5.className="visible"
    compteur5++
    value5.textContent = compteur5
    clique5.textContent= "voir moins";
}else{
    paragraphe5.className='invisible'
    clique5.textContent= "Lire la suite"
}
   
}


function hide6(){
    if(paragraphe6.className=='invisible'){
    paragraphe6.className="visible"
    compteur6++
    value6.textContent = compteur6
    clique6.textContent= "voir moins";
}else{
    paragraphe6.className='invisible'
    clique6.textContent= "Lire la suite"
}
   
}



// effet sur la navbar

let nav = document.querySelector('header')

addEventListener("scroll",changecolor)

function changecolor(){
    if(window.scrollY>0){
        nav.className='changenavbar'
    }else{
        nav.className='navbar'
    }
}


