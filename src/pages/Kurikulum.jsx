import { Container, Grid } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/kurikulum/Hero'
import Apa from '../components/kurikulum/Apa'
import Komponen from '../components/kurikulum/Komponen'
import Kelas from '../components/kurikulum/Kelas'

const bgImg = {
  url: 'https://i.ibb.co/0Kwzkw6/kurikulum-1.jpg',
  size: 'cover'
}

export default function Kurikulum() {
  return (
    <Grid minWidth="100%" textAlign="center" gap={20} backgroundImage={bgImg.url} backgroundSize={bgImg.size}>
      <Hero />
      <Apa />
      <Komponen />
      <Kelas />
    </Grid>
  )
}
