import React  from "react";


// const TituloPrincipal = (props) => {

    const TituloPrincipal = ({saludo}) => {
 
    // const {saludo} = props

    return (
              
        // Destucturing props
        //  <h1>{props.saludo}</h1>

        // Destructuring const:
          <h1>{saludo}</h1>
                    
             
      )
    }

    export default TituloPrincipal