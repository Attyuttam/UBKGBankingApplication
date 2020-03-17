import {handleError, handleResponse} from "./apiUtils";

export function getTransactionsByAccount(accountID) {
    const url = "http://localhost:8080/getTransactionsByAccount/"+accountID;
    return fetch(url)
        .then(handleResponse)
        .catch(handleError)
}


export function getTransactionsByACA(acaID) {
    const url = "http://localhost:8080/getTransactionsByACA/"+acaID;
    return fetch(url)
        .then(handleResponse)
        .catch(handleError)
}


export function getTransactionsByCustomer(customerID) {
    const url = "http://localhost:8080/getTransactionsByCustomer/"+customerID;
    return fetch(url)
        .then(handleResponse)
        .catch(handleError)
}


export function getTransactions(startDate, endDate){
    const url = "http://localhost:8080/getTransactionsInRange/From/"+startDate+"/To/"+endDate;
    return fetch(url)
        .then(handleResponse)
        .catch(handleError)
}