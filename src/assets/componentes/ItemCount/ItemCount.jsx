import { useState } from "react"

const ItemCount = () =>  {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        if(contador < 10){
            setContador(contador +1)
        }
    }

    const decrementar = () => {
    if(contador > 1){
        setContador(contador -1)
    }
    }

    console.log(contador)

    return(

        <div>
        <h1>Contador</h1>
        <button onClick={incrementar}> + </button>
        <button onClick={decrementar}> - </button>

        </div>
    )
    
}


export default ItemCount