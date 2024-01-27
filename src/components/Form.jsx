import {useState, useEffect, useContext} from 'react'
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import { Input, Button, ButtonGroup, Text, Card, CardBody, Box, StackDivider, Stack, Flex, Container } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { CartContext } from '../context/ShoppingCartContext.jsx'


const Form = () => {

  const { cart } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {

        e.preventDefault();

        if (nombre && apellido && email !== "") {

          const order = {
            cliente: {nombre, apellido, email},
            items: {cart}
          
          }
          
        
          const ordersCollection = collection(db, "order")

          addDoc(ordersCollection, order)
            .then(({id}) => {
              setOrderId(id);

              Swal.fire({

                title: "Compra finalizada!",
                html: `
                <p style="margin-bottom: 10px;">Nos contactaremos a ${email}.</p>
                <p>El id de tu compra es: ${id}.</p>
              `,

                icon: "success"
        
              });
    
              setNombre("");
              setEmail("");
          

            })

            .catch((err) => {
              Swal.fire("Hubo un error al procesar la compra.")
            
            })

      } else {
    
        Swal.fire("Ingrese sus datos!")
    
    }

  }


  return (

    <div>
      
    <Flex direction="column"justify='center' alignItems='center'>
      <Box className='form' border='1px' p='7' borderRadius='10px' backgroundColor='#171D23'> 

        <form action="" onSubmit={handleSubmit}>
          <Stack>
            <Input placeholder='Nombre' size='md' type='text' onChange={(e)=> setNombre(e.target.value)} value={nombre} backgroundColor='#171D23' color='whitesmoke'/> 
            <Input placeholder='Apellido' size='md' type='text' onChange={(e)=> setApellido(e.target.value)} value={apellido} backgroundColor='#171D23' color='whitesmoke'/> 
            <Input placeholder='E-mail' size='md' type="email" onChange={(e)=> setEmail(e.target.value)}value={email} backgroundColor='#171D23' color='whitesmoke'/>

            <Flex justify='center'>
            <ButtonGroup>
            <Button colorScheme='teal' variant='solid'  type="submit" size='lg'> Finalizar Compra </Button>
            </ButtonGroup>
            </Flex>

          </Stack>
        </form>

      </Box>

      <Box>
      <Text fontSize='lg' as='b'>
            {`El id de su compra es: ${orderId}`}
        </Text>
      </Box>
    </Flex>
  

    </div>


  )

}

export default Form