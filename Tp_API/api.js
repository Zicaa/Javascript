 /*
Documentation de l’API :
Récupérer la liste des tâches :
http://localhost/task/api/task.php?task=1
Retourne un json.
Récupérer la liste des tâches entre 2 dates (2022-01-10 et 2022-01-20):
http://localhost/task/api/task.php?task=1&deb=’2022-01-10’&end=’2022-01-20’
Retourne un json.
Récupérer la liste des catégories :
http://localhost/task/api/task.php?cat
Retourne un json.
Récupérer la liste des comptes utilisateurs :
http://localhost/task/api/task.php?user
Retourne un json.}


// je crée la variable dans laquelle je stocke les bases de l'url de l'API
const url = "http://localhost/task/api/task.php?task=1";

// Récupérer la liste des tâches :
async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
 
    return data;
 }
 
 async function processData(url) {
    const data = await fetchApi(url);
 
 }
 processData("http://localhost/task/api/task.php?cat");


 // Récupérer la liste des comptes utilisateurs :
 async function fetchApi(url) {
    const response = await fetch(url);
    const data = await response.json();
 
    return data;
 }
 
 async function processData(url) {
    const data = await fetchApi(url);
 
 }
 processData("http://localhost/task/api/task.php?user");

 */


 // Récupérer la liste des comptes utilisateurs :
let listUser = document.getElementById("listUser");

// Récupérer la liste des tâches :
let listTask = document.getElementById("listTask");

// Récupérer la liste des catégories :
let listCat = document.getElementById("listCat");

// Afficher les éléments
const urlTask = "http://localhost/task/api/task.php?task=1";
const urlCat = "http://localhost/task/api/task.php?cat";
const urlUser = "http://localhost/task/api/task.php?user";

function displayTask (url){
    
}


