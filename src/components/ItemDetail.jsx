import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
import ItemCount from './ItemCount.jsx'

const ItemDetail = ( { producto } ) => {

  return (

    <Card maxW='sm'>
      <CardBody>
        <Image
          src=''
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{producto.nombre}</Heading>
          <Text>
            {producto.descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${producto.precio}
          </Text>
        </Stack>  
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>

          <ItemCount/>

        </ButtonGroup>
      </CardFooter>
    </Card>

  )
}

export default ItemDetail