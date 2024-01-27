import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
      <div>
            <Flex className = 'boxNavBar'>
                <Box p='4' ml='10'>

                <Link to ={"/"}>
                    
                    <Text fontSize='2rem' className = 'textNavBar'>

                   Via Milano

                   </Text>

                </Link>

                </Box>

                <Spacer />


                <Menu >
                    <MenuButton className = 'textNavBar' fontSize='1.3rem' >
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <Link to = {'/category/deportivo'}>
                            <MenuItem>Deportivo</MenuItem>
                        </Link>
                        <Link to = {'/category/formal'}>
                            <MenuItem>Formal</MenuItem>
                        </Link>
                        <Link to = {'/category/informal'}>
                            <MenuItem>Informal</MenuItem>
                        </Link>
                        <Link to = {'/category/ninios'}>
                            <MenuItem>Niños</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>

                <Spacer/>

                <Box p='4' mr='10'>
                    <Link to = {"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </div>

  )
}

export default NavBar