import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, id}) => {

  return (

    <Card maxW='sm'>
      <CardBody>
        <Image
          src=''
          alt=''
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
        </Stack>  
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to = {`/item/${id}`}>
            <Button> Ver detalle </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item