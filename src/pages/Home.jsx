import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import Kenapa from '../components/Kenapa'
import Benefit from '../components/Benefit'
import Siapa from '../components/Siapa'

const bgImg = {
  url: 'https://i.ibb.co/Lxcv3ZG/full-3.jpg',
  size: 'cover'
}

export default function Home() {
  return (
    <Grid backgroundImage={bgImg.url} backgroundSize={bgImg.size} gap={20}>
      <Hero/>
      <Kenapa/>
      <Benefit/>
      <Siapa/>
    </Grid>
  )
}
