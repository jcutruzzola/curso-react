import React from 'react'
import { Text, Flex, Center } from '@chakra-ui/react'

const ItemListContainer = ({ greetings }) => {
  return (

    <div>
        <Center>

        <Text fontSize = '4xl'>
        {greetings}
        </Text>

        </Center>
    </div>
  )
}

export default ItemListContainer