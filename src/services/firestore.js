import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/*cambiar esta shit */
//-------------------config firebase--------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCM1pRQ-La8eYYpG73hCt0hFhQds39VIB4",
  authDomain: "react-39575-17912.firebaseapp.com",
  projectId: "react-39575-17912",
  storageBucket: "react-39575-17912.appspot.com",
  messagingSenderId: "635849251715",
  appId: "1:635849251715:web:0e8c2266a1bdefdc0534b6",
  measurementId: "G-FXQHTN796C"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

/* Opcional*/
