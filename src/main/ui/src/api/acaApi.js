import {handleError, handleResponse} from "./apiUtils";


export function saveACA(aca) {
    //console.log("TO SAVE ACA: "+JSON.stringify(aca));
    return fetch("http://localhost:8080/addAca", {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json", "authorization": "Bearer " + sessionStorage.getItem("token") },
        body: JSON.stringify({
            ...aca
        })
    })
        .then(handleResponse)
        .catch(handleError);
}


export function getAcas(){
    return fetch("http://localhost:8080/getAllAca",{
        method: "GET",
        headers: {'authorization': 'Bearer ' + sessionStorage.getItem("token")}
    })
        .then(handleResponse)
        .catch(handleError);
}