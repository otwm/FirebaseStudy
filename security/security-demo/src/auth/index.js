import firebase from "../firebase/firebase";
import messageUtils from "../error/messageUtil";

const auth = firebase.auth();

import {browserHistory} from 'react-router';
import * as error from "../error/errorCode";

const User = {
    create(email, password, errorProcess = function (error) {
        console.error(error.code, error.message);
        throw error;
    }) {
        auth.createUserWithEmailAndPassword(email, password).catch(errorProcess);
    },
    login(email, password, errorHandler = (error) => {
        alert(messageUtils.message(error.code));
    }){
        auth.signInWithEmailAndPassword(email, password).catch(errorHandler);
    },
    logout(successHandler = () => {
        alert('로그 아웃 되었습니다.');
        browserHistory.push('/login');
    }, errorHandler = (error) => {
        alert(messageUtils.message(error.code));
    }){
        firebase.auth().signOut().then(successHandler, errorHandler);
    },
    resetPassword(){

    }
}


export default User;