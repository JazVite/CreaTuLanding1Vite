// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './assets/componentes/Boton/Boton.css'
// import Boton from './assets/componentes/Boton/Boton.'
import './assets/componentes/NavBar/NavBar.css'
import NavBar from './assets/componentes/NavBar/NavBar'
import './assets/componentes/CarWidget/CarWidget.css'
import './assets/componentes/ItemListContainer/ItemListContainer.css'
import ItemListContainer from './assets/componentes/ItemListContainer/ItemListContainer'





const App = () => {

    return (
    <>

<NavBar/>

<ItemListContainer saludo="¡Saludos!"/>
  
    </>
  )
}

export default App
