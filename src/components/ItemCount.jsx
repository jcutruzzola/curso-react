import { useEffect, useState, useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ( {producto} ) => {

  const {cart, setCart, addToCart} = useContext(CartContext)


  const [contador, setContador] = useState(0)
  const mostrarMensaje = () => {
    alert (`Agregado al carrito ${contador} unidades`)
  
  }

  //   Ponerle validadores para que no supere x numeros y no sea menos de 0.

  const sumar = () => {

    if (contador < 10) {

      setContador(contador + 1)
    }
  
  }

  const restar = () => {

    if(contador > 0 )
    setContador(contador - 1)

  }
   

  // console.log(cart);


  return (
    <div>

      <Button colorScheme='teal' size='xs' onClick={restar}>
        -
      </Button>

      <Button onClick = {()=> { addToCart (producto, contador)} }>
        Agregar al carrito {contador}
      </Button>

      <Button colorScheme='teal' size='xs' onClick={sumar}>
        +
      </Button>

    </div>
  )

}


export default ItemCount