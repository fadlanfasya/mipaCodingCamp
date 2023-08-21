import { Card, Center, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
  return (
    <Container paddingBottom="60px" justify="center" flexWrap="wrap">
        <Center height="30vh">
          <Card border="1px solid" backgroundColor="#03B36B" boxShadow="8px 8px" p="30px">
            <Heading fontSize="5xl" color="white" textShadow="4px 4px black" letterSpacing="2px">Detail Program</Heading>
          </Card>
        </Center>
    </Container>
  )
}
