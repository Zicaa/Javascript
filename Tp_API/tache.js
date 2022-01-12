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

const url = 'https://adrardev.fr/task/api/task.php?task=1';

let zone = document.querySelector('#zone');

async function showTaskApi(){
    const data =  await fetch(url);
    const json =  await data.json();
    for(let i in json){
        zone.innerHTML += "<p> id : " + json[i].id_task + ", Nom : " + json[i].name_task + ", Contenu : " + json[i].content_task + ", Date : " + json[i].date_task + "</p>"; 
    }
}
showTaskApi()


