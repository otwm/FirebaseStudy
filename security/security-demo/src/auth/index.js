import firebase from '../firebase/firebase';

const auth = firebase.auth();

const User = {
    create(email, password, errorProcess = function (error) {
        console.error(error.code, error.message);
        throw error;
    }) {
        auth.createUserWithEmailAndPassword(email, password).catch(errorProcess);
    },
    login(){

    },
    logout(){

    },
    resetPassword(){

    }
}


export default User;