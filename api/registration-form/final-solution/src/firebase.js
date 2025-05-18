// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEICHkoOjyrgV58GLK35_Y9suneHRlIPo',
  authDomain: 'registration-form-c42dd.firebaseapp.com',
  projectId: 'registration-form-c42dd',
  storageBucket: 'registration-form-c42dd.firebasestorage.app',
  messagingSenderId: '20904561513',
  appId: '1:20904561513:web:59ec503cb50c27e4cecbf8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
