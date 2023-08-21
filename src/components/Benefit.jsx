import { Card, CardBody, Container, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

import benefit1 from '../assets/benefit-1.svg'
import benefit2 from '../assets/benefit-2.svg'
import benefit3 from '../assets/benefit-3.svg'
import benefit4 from '../assets/benefit-4.svg'

const benefitContent = [
    {
        id: 1,
        title: 'Pelatihan Intensif',
        body: 'Belajar kompetensi teknis, soft skill, dan bahasa Inggris, yang dibuat oleh pakar industri.',
        img: benefit1,
    },
    {
        id: 2,
        title: 'Akses Materi Selamanya',
        body: 'Dapatkan akses materi belajar gratis yang bisa diakses kapan saja.',
        img: benefit2,
    },
    {
        id: 3,
        title: 'Mentorship',
        body: 'Kesempatan untuk belajar bersama mentor yang berpengalaman di bidangnya.',
        img: benefit3,
        themeColor: '#F3AD00'
    },
    {
        id: 4,
        title: 'Rekomendasi Peluang Kerja',
        body: 'Peserta akan mendapatkan rekomendasi peluang kerja setelah proses pelatihan.',
        img: benefit4,
        themeColor: '#00124E'
    }
]

export default function Benefit() {
  return (
    <Container minWidth="80%" textAlign="center">
        <Heading>Apa Yang Didapat Dari</Heading>
        <Heading color="#03B36B" marginBottom="20px">MIPA Coding Camp?</Heading>
        <Flex>
            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
                {benefitContent.map(benefit => (
                <GridItem rowSpan="1">
                    <Card 
                    direction={{ base: 'column', sm: 'row' }} 
                    alignItems="center" 
                    p="20px" 
                    border="1px solid"
                    boxShadow="8px 8px">
                        <Image src={benefit.img} width="100px" height="100px" />
                        <CardBody textAlign="left">
                            <Heading fontSize="2xl">{benefit.title}</Heading>
                            <Text>{benefit.body}</Text>
                        </CardBody>
                    </Card>
                </GridItem>
                ))}
            </Grid>
        </Flex>
    </Container>
  )
}
