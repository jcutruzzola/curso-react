import React from 'react'
import  {useContext} from 'react'
import cart from '../assets/cart.svg'
import { Text } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

const {amountInCart} = useContext(CartContext)

  return (
    <div>
      <div className = 'textNavBar'>
       <img src={cart}/>

       <Text as='b'>
        {amountInCart()}
       </Text>
        
      </div>
        
        
    </div>
  )
}

export default CartWidget