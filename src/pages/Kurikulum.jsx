import { Container } from '@chakra-ui/react'
import React from 'react'

import Hero from '../components/kurikulum/Hero'
import Apa from '../components/kurikulum/Apa'

export default function Kurikulum() {
  return (
    <Container minWidth="100%" textAlign="center">
      {/* <Hero /> */}
      <Apa />
    </Container>
  )
}
