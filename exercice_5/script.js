// Section 1
const firstname = "margaux";
const lastname = "coppi";
let newp = document.createElement('p');
let firstsection = document.getElementById("firstsection");

newp.textContent = "Votre nom est " + lastname + " et votre prénom est " + firstname + ".";
firstsection.append(newp);

// Section 2
let div = document.getElementById("stylechanges");
div.addEventListener("click", function(){
   div.classList.add("divstylechange");
});

// Section 3

let movies = ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars, épisode VII : Le Réveil de la Force', 'Avengers : Infinity War'];
let btnrandom = document.getElementById('btn');
let random = Math.floor(Math.random() * movies.length);
let newp2 = document.createElement('p');
let thridsection = document.getElementById('thirdsection');

btnrandom.addEventListener("click", function(){
    newp2.textContent = (random, movies[random]);
    thridsection.append(newp2);
})

// Section 4

let valueinput = document.getElementById("text").value;
let btn4 = document.getElementById('btnsection4');
let p4 = document.getElementById('psection4');

btn4.addEventListener("click", function(){
    p4.innerHTML = input;
})