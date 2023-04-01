import React from 'react'

function Button(props) {
    
    const stylesButton = {
        background: props.color ||"linear-gradient(0deg, rgba(9, 9, 9, 1) 0%, rgba(244, 3, 3, 1) 100%)",
        textAlign: "center",
        fontSize:" 16px",
        margin: "4px 2px",
        color:"aliceblue",
        fontWeight: "900",
        display:" inline-block",
        textDecoration: "none",
        cursor: "pointer",
        padding: "16px 32px",
        width: props.width|| "200px",
        };

  return(
     <button style={stylesButton} onClick={props.onTouchButton}>
        {props.children}
        </button>
  );
}

export default Button