import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ productos }) => {



  return (
    <div>

<Flex wrap = "wrap" justify="space-evenly" gap="3">

      {
        productos.map((p) => {
        
          return (

            
              <Item
                key = {p.id}
                nombre = {p.nombre}
                descripcion = {p.descripcion}
                precio = {p.precio}
                id = {p.id}
            
            />
            
        
            )
        
        })
      
      }

</Flex>

    </div>
  )
}

export default ItemList