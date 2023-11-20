// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDsyKuY8SaxS23QhQC4P1n9xMxpVjfQuSE",
  authDomain: "cognitrails.firebaseapp.com",
  projectId: "cognitrails",
  storageBucket: "cognitrails.appspot.com",
  messagingSenderId: "385081534845",
  appId: "1:385081534845:web:461dc715bda152cadf8414",
  measurementId: "G-SW6H1S7V0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

async function getCities(db: any) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }