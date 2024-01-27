import {useContext} from 'react'
import { Button, Card, CardHeader, Heading, CardBody, Stack, Box, Text, StackDivider, Flex, Spacer, HStack, Container} from '@chakra-ui/react'
import Form from './Form.jsx'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/ShoppingCartContext.jsx'



const Cart = () => {

  const  { cart, finalValue, clearCart } = useContext(CartContext)

  
  console.log(cart);


  return (
    <div>
      <Link to={"/cart"}/>

      {
        cart.map((producto) => (

            <Container backgroundColor='whitesmoke' key={producto.id} maxW='100%'>
              <Flex justify='center'>
                <Card className = "cardCompra" border='1px' backgroundColor='whitesmoke' borderColor='black' margin='2rem' padding='1rem' width='40rem' borderRadius='2rem'>
                  <CardHeader>
                    <Heading size='lg'>Tu compra de {producto.nombre}</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                      <Box>
                        <Heading size='xs' textTransform='uppercase'>
                          {producto.nombre}
                        </Heading>
                        <Heading as='h6' size='xs'>
                          Cantidad : {producto.contador}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                          Valor Unidad: $ {producto.precio}
                        </Text>
                        <Heading as='h6' size='xs'>
                          Valor Total: $ {producto.precio * producto.contador}
                        </Heading>
                      </Box>
                      </Stack>
                  </CardBody>
                </Card>
              </Flex>
            </Container>
        
        ))
      }

     {
     
     cart.length > 0 ?  
     <>
     <Container maxW='100%' height= "500px" backgroundColor='whitesmoke'>
      <Flex justify='center' >

        <HStack spacing='35px'>
          <Box border="1px" padding='1rem' borderRadius='10px'>
            <Heading size='lg'> 
            Precio Total: $ { finalValue() }
            </Heading>
          </Box>
         
        <Button onClick = {clearCart} colorScheme='teal' variant='outline'>
          Vaciar Carrito
        </Button>

        </HStack>

        </Flex>

      <Form/>

      </Container>

      </> :
      <>
      
        <Heading>El carrito está vacío</Heading>

        <Link to={'/'}>
        <Button>
         Ir a la tienda
         </Button>
         </Link>
     
      </>
    } 
    
      
      
      </div>
  )
}

export default Cart