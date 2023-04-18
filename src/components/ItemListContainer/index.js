import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import products from "../../products/products";
import { useParams } from "react-router-dom";

//--------------------------------------------------------------------------

//-------------------config firebase--------------------------

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where  } from "firebase/firestore";

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

// async await
//1.- obtener referencia a "products"
//2.-llamamos getDocs con dicha coleccion
//3.- dentro de la respeusta tenemos un array de documentos
//4.- destraemos los datos con doc.data()

async function getItemsFromDatabase() {

  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({...doc.data(), id: doc.id}));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL){
  const productsColectionRef = collection(db,"products");

  const q =query(productsColectionRef, where("category", "==", categoryURL));


  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({...doc.data(), id: doc.id}));
  return dataProducts;

}
//-------------------config firebase--------------------------

/*
function getItemsByCategoryFromDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productsFiltered = products.filter(item => item.category === categoryURL)
      resolve(productsFiltered)
    }, 1000);
  });
}*/
//-------------------------------------------------------------//

function ItemListContainer({ greeting }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await getItemsFromDatabase();
      setUsers(respuesta);
      setIsLoading(false);
    }
    else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory)
      setUsers(respuesta);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idCategory]);


  return (
    <>
      <h2>{greeting}</h2>
      {
        isLoading ?
          <p>Cargando...</p>
          :
          <ItemList users={users} />
      }

    </>
  );
}

export default ItemListContainer;
