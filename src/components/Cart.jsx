import {useContext} from 'react'
import { Button } from '@chakra-ui/react'
import Form from './Form.jsx'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext.jsx'



const Cart = () => {

  const  { cart, finalValue, clearCart } = useContext(CartContext)

  
  console.log(cart);


  return (
    <div>
      <Link to={"/cart"}>

      {
        cart.map((producto) => (
          <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p>Valor unidad $ {producto.precio}</p>
            <p>Valor Total $ {producto.precio * producto.contador}</p>
            <p>Cantidad: {producto.contador}</p>

          </div>
          
          
        ))
      }

     {
     
     cart.length > 0 ?  
     <> 
      <h2> Precio Total: $ { finalValue() } </h2> 

      <Form/>

      <Button onClick = {clearCart}>
        Vaciar Carrito
      </Button>

      </> :
      <>
        <h2> El carrito está vacío </h2>

        <Link to={'/'}>
        <Button>
         Ir a la tienda
         </Button>
         </Link>
     
      </>
    } 
    

    
    
      {/* <Form /> */}

      </Link>
      
      </div>
  )
}

export default Cart