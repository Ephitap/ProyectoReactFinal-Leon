import{ createContext, useState } from "react";


const cartContext= createContext({
    cart: [],
});

//Crear custom provider

function CartContextProvider(props){
    const [cart,setCart] = useState([]);

    function addItem(user,count){

        const newCart = [...cart];

        user.count = count
        newCart.push(user);

        setCart(newCart);
        //setCart([...cart,user])

    }
    function removeItem(id){
            
    }
    function clear(){
            
    }
    function getCountInCart(){
        let total=0;
        for(let i=0; i<cart.length; i++)
        cart.forEach( item => total + item.count)
        return total;
    }

    // pasar la prop value
    return (
    <cartContext.Provider value={{cart: cart, addItem}}>
        {props.children}
        </cartContext.Provider>
    );
}


export {CartContextProvider};
export default cartContext;