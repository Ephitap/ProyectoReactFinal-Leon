import { useState } from "react";
import Button from "../Button";

const ItemCount = ({initial, stock,OnAddToCart}) => {
const [count, setCount] = useState(initial);


const decrease = () => {
    if (count >initial) {
        setCount(count -1);
    }
};

const increase = () => {
    if (count < stock){
        setCount(count +1);
    }
};
return(
    <div>
        <Button width="10px" onTouchButton={decrease}> - </Button>
        <span className="contador">{count}</span>
        <Button width="10px" onTouchButton={increase}> + </Button>
        <br></br>
        <Button onTouchButton={() =>OnAddToCart(count)}>
            Agregar al carrito</Button>
    </div>
);
};
export default ItemCount

