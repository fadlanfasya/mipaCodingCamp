import { Box, Button, Flex, HStack, Image, List, ListItem, Spacer } from '@chakra-ui/react'
import { NavLink, Link} from 'react-router-dom';
import React from 'react'
import mainLogo from '../assets/logo-main.svg'

import '../style/Nav.css'

export default function Navbar() {
    const navMenu = [
        {
            id: 1,
            name: 'MIPA Coding Camp',
            url: '/',
            backgroundColor: 'white'
        },
        {
            id: 2,
            name: 'Kurikulum',
            url: '/kurikulum',
            backgroundColor: 'white'
        },
        {
            id: 3,
            name: 'Detail Program',
            url: '/detail',
            backgroundColor: 'white'
        },
        {
            id: 4,
            name: 'Daftar Sekarang',
            url: '/daftarsekarang',
            backgroundColor: 'white'
        }
    ]

  return (
    <Flex 
    as="nav" 
    paddingX="70px" 
    paddingY="20px" 
    position="sticky" 
    top="0"
    zIndex="1"
    backgroundColor="white"
    boxShadow="lg">
        <Image src={mainLogo} width="200px"/>
        <Spacer/>
        <HStack spacing={8}>
            {navMenu.map(nav => {
                return (
                    <Button key={nav.id} id='navbar' backgroundColor={nav.backgroundColor}>
                        <NavLink 
                        to={nav.url} 
                        >{nav.name}</NavLink>
                    </Button>
                )
            })}
        </HStack>
    </Flex>
  )
}
