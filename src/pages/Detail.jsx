import React from 'react'
import { Container } from '@chakra-ui/react'
import Hero from '../components/detail-program/Hero'
import Carousel from '../components/detail-program/Carousel'

export default function Detail() {
  return (
    <Container minWidth="100%">
      <Hero />
      <Carousel />
    </Container>
  )
}
