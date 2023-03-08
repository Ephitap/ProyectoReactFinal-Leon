import './styles.scss';
import React, {useState, useEffect} from 'react';
function ItemDetailContainer({greeting}) {

  
    const [user, setUsers] = useState([]);
  
    useEffect(() => {
      fetch("https://reqres.in/api/users")
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log('json', json);
        setUsers(json.data);
      });
    }, []);
  
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        
      </ul>
    </div>
  );
        
}

export default ItemDetailContainer;
