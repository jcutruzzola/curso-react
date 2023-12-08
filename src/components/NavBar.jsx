import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
      <div>
            <Flex className = 'boxNavBar'>
                <Box p='4' ml='10'>

                    <Text fontSize='2rem' className = 'textNavBar'>

                   Via Milano

                   </Text>
                   
                </Box>

                <Spacer />


                <Menu >
                    <MenuButton className = 'textNavBar' fontSize='1.3rem' >
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Deportivo</MenuItem>
                        <MenuItem>Formal</MenuItem>
                        <MenuItem>Informal</MenuItem>
                        <MenuItem>Niños</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer/>

                <Box p='4' mr='10'>

                    <CartWidget />

                </Box>
            </Flex>
        </div>

  )
}

export default NavBar