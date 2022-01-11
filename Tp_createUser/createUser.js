
//variables qui récupèrent les éléments html

let name = document.getElementById("name").value;
let firstname = document.getElementById("firstname").value;
let login = document.getElementById("login").value;
let mdp = document.getElementById("mdp").value;

// variables du tableau

let tab = [];

// variable cpt

let cpt = 0;

// variables qui récupèrent les éléments html résultat et compte

let resultat = document.querySelector("#resultat");
let compte = document.querySelector("#nbrCompte");

// fonction creer qui va ajouter des utilisateurs

function creer() {
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("firstname").value;
    let login = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;
    let add = 0;
    if (tab.length >= 1) {
        add = (tab[0]) + 1;
    }
    return add;
    console.log(name, firstname, login, mdp);
}

// fonction verif qui va vérifier si les variables contiennent une donnée

function verif() {
    let tab = [];
    if(name != "" && firstname != "" && login != "" && mdp != ""){
    return tab;
    } 
}console.log(verif([tab]));

// creation de la fonction ajouter

function ajouter() {
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("firstname").value;
    let login = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;
    error.innerHTML = "";

    if(name != "" && firstname != "" && login != "" && mdp != ""){
    tab.push([name, firstname, login, mdp]);  
    console.log(tab[0][0]);
    resultat.innerHTML+="<p>" + tab[0][0] + " " + tab[0][1] + " " + tab[0][2] + " " + tab[0][3] + "</p>";
    cpt++;
    nbrCompte.innerHTML = "il y'a " + cpt + "comptes utilisateurs";
    form.reset();
}
else {
    error.innerHTML = "Merci de remplir le champ vide !";
}
form.reset();
}

