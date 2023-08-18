import { Container, Grid, GridItem, Heading, Image, OrderedList, ListItem, Flex, Card } from '@chakra-ui/react'
import React from 'react'
import bgImg from '../assets/siapa-background.svg'
import '../style/OrderedList.css'

const lists = [
    { body: 'Mahasiswa Fakultas FMIPA Unpad'},
    { body: 'Menyukai Teknologi'},
    { body: 'Komitmen Dalam Mengikuti Kegiatan'},
    { body: 'Bersedia Mengikuti Seluruh Rangkaian Kegiatan'}
]

export default function Siapa() {
  return (
    <Container minWidth="100%">
        <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan="1">
                <Flex justifyContent="center">
                    <Image src={bgImg} width="400px" height="400px" />
                </Flex>
            </GridItem>
            <GridItem colSpan="1" marginRight="30px" maxHeight="80%">
                <Card border="1px solid" padding="30px" boxShadow="8px 8px">
                <Heading>Siapa Saja yang Bisa Ikut</Heading>
                <Heading color="#03B36B">MIPA Coding Camp?</Heading>
                <OrderedList className='ol' marginTop="20px">
                    {lists.map(list => (
                        <ListItem fontWeight="bold" fontSize="2xl">{list.body}</ListItem>
                    ))}
                </OrderedList>
                </Card>
            </GridItem>
        </Grid>
    </Container>
  )
}
