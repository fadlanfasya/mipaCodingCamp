import { Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Container as="footer" marginTop="20px" minWidth="100%" textAlign="center">
        <Text fontSize="sm">©<span>{currentYear}</span> · MIPA Coding Camp · All rights reserved</Text>
    </Container>
  )
}
