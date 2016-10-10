import firebase from '../firebase/firebase';

const auth = firebase.auth();

export default class User {
    constructor(email, password, errorProcess = function (error) {
        console.error(error.code, error.message);
        throw error;
    }) {
        auth.createUserWithEmailAndPassword(email, password).catch(errorProcess);
    }
}