import React from 'react'
import cart from '../assets/cart.svg'
import { Text } from '@chakra-ui/react'


const CartWidget = () =>
{
  return (
    <div>
      <div className = 'textNavBar'>
       <img src={cart}/>

       <Text as='b'>
        7 
       </Text>
        
      </div>
        
        
    </div>
  )
}

export default CartWidget