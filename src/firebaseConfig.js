// src/firebaseAuth.js
import firebaseApp from './firebaseConfig';
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);
export default auth;
