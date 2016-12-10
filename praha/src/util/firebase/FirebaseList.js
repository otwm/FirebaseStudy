import {firebaseDatabase} from "./firebase";

export class FirebaseList {
    constructor(action, model, path = null) {
        this._action = action;
        this._model = model;
        this._path = path;
    }

    get path() {
        return this._path;
    }

    set path(path) {
        this._path = path;
    }

    push(value) {
        return new Promise((resolve, reject) => {
            firebaseDatabase.ref(this._path)
                .push(value, error => error ? reject(error) : resolve());
        });
    }
}