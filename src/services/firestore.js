import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,doc,collection,writeBatch,} from "firebase/firestore";

/*cambiar esta shit */
//-------------------config firebase--------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCM1pRQ-La8eYYpG73hCt0hFhQds39VIB4",
  authDomain: "react-39575-17912.firebaseapp.com",
  projectId: "react-39575-17912",
  storageBucket: "react-39575-17912.appspot.com",
  messagingSenderId: "635849251715",
  appId: "1:635849251715:web:0e8c2266a1bdefdc0534b6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

/* Opcional */
export async function exportData() {
  //for ... of
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const { id } = await addDoc(collectionRef, item);
    console.log("Documento creado", id);
  }
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");

  for (let item of products) {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, item);
  }

  const resp = await batch.commit();
  console.log(resp);
}