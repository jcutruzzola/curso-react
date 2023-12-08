import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {

  const mensaje = "Bienvenidos a la tienda!"

  return (

    <>
    <div>
      <NavBar/>

      <ItemListContainer
        greetings = {mensaje}
      />

    </div>

    </>
  )
}

export default App