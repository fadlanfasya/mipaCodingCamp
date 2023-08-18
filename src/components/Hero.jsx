import { Card, CardBody, CardHeader, Container, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logoUnpad from '../assets/logo-unpad.png'

const bgImg = {
    url: 'https://i.ibb.co/XXr7PgV/hero.jpg',
    size: 'cover'
}

export default function Hero() {
  return (
    <Container as="main"  minWidth="100%">
        <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan="2" p="20px 50px 0px 50px">
                <Card maxWidth="xl" border="1px solid" borderRadius="15px" boxShadow="8px 8px">
                    <CardHeader marginBottom="-20px">
                        <Heading>Apa itu <span style={{color: '#03B36B'}}>MIPA Coding Camp?</span></Heading>
                    </CardHeader>
                    <CardBody>
                    <Text marginBottom="20px">
                        MIPA Coding Camp merupakan pelatihan kompetensi coding untuk mahasiswa
                        FMIPA Unpad sebagai solusi untuk mengikuti industri teknologi yang berkembang
                        cepat.
                    </Text>
                    <Text marginBottom="20px">
                        Melalui pelatihan kompetensi dan cara berpikir yang tepat, kami ingin menghasilkan 
                        talenta teknologi yang kritis, gigih, tangguh, dan berdaya saing tinggi, 
                        sehingga mampu menghadapi tantangan masa depan. 
                    </Text>
                    <Text>
                        Program ini diharapkan bisa mempercepat proses transformasi digital sekaligus menjadikan 
                        teknologi sebagai agen perubahan yang positif di Indonesia.
                    </Text>
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem colSpan="2" p="20px 50px" width="80%" marginTop="21px">
                <Grid templateRows="repeat(2, 1fr)" gap={10}>
                    <GridItem colSpan="1">
                        <Card backgroundColor="#03B36B" boxShadow="8px 8px">
                            <CardBody>
                                <Heading color="black" fontSize="5xl" textShadow="2px 4px white" >Code Your Way <br/>to Success</Heading>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem colSpan="1">
                        <Card maxWidth="-webkit-max-content" border="1px solid" boxShadow="8px 8px">
                            <CardBody>
                                <Flex justifyContent="center">
                                    <Image src={logoUnpad} />
                                </Flex>
                            </CardBody>
                        </Card>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Container>
  )
}
