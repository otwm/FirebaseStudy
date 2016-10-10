import config from './firebase.config';
import FireBase from 'firebase';

const fireBase = FireBase.initializeApp(config);

export default fireBase;