// je crée des variables dans lesquelles je stocke les bases de l'url de l'API
const url ="http://localhost/task/api/task.php?cat";

async function fetchApi(url){

    let response;
    let data;

    response = await fetch(url, {mode: "no-cors"});
    data = await response.json();

    return data;
}
console.log(fetchApi(url + "cat"));

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
Retourne un json.}*/
