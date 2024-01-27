import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import ShoppingCartContext from './context/ShoppingCartContext.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'


const App = () => {

  const mensaje = "Bienvenidos!"

  return (

    <BrowserRouter>
    <ShoppingCartContext>

      <NavBar/>

      <Routes>

        <Route exact path = '/' element = {<ItemListContainer greetings = {mensaje}/>} />
        <Route exact path = '/cart' element = {<Cart/>} />
        <Route exact path = '/category/:categoryId' element = {<ItemListContainer/>} />
        <Route exact path = '/item/:id' element = {<ItemDetailContainer/>} />
      
      </Routes>

      {/* <Footer/> */}
      
      </ShoppingCartContext>
    </BrowserRouter>

  )

}

export default App