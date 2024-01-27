import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter, Img, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, id, img, descripcion}) => {

  return (

    <Card maxW='sm' h="lg" border='1px'>
      <CardBody>

        <Box 
          maxW="250px"
          maxH="280px"
          overflow="hidden"
        >
          <Image
            src={img}
            alt=''
            objectFit='cover'
            borderRadius='lg'
          />

        </Box>
        <Stack mt='4' spacing='2'>
          <Heading size='md'>{nombre}</Heading>
          <Text>{descripcion}</Text>
        </Stack>  
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to = {`/item/${id}`}>
            <Button colorScheme='yellow' variant='outline'> Ver detalle </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item