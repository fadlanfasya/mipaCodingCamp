import { Card, Center, Container, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const contents = [
    {
        id: 1,
        img: 'https://svgshare.com/i/wiV.svg',
        text: 'Pembelajaran self-paced pada materi pra dan pasca kelas'
    },
    {
        id: 2,
        img: 'https://svgshare.com/i/whU.svg',
        text: 'Online, Berbasis kelompok - Sesi yang dipimpin instruktur'
    },
    {
        id: 3,
        img: 'https://svgshare.com/i/wis.svg',
        text: 'Magang dan pengalaman berbasis proyek'
    },
    {
        id: 4,
        img: 'https://svgshare.com/i/whk.svg',
        text: 'Sesi pendampingan intensif dari mentor dan insinyur perangkat lunak'
    }
]

export default function Komponen() {
  return (
    <Container minWidth="80%" marginBottom="50px">
        <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan="1">
                <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" gap={3}>
                    {contents.map(content => (
                        <GridItem key={content.id}>
                            <Card p="30px" width="250px" height="200px" border="1px solid" boxShadow="8px 8px" gap={3}>
                                <Center>
                                    <Image src={content.img} width="70px" />
                                </Center>
                                <Text textAlign="left">{content.text}</Text>
                            </Card>
                        </GridItem>
                    ))}
                </Grid>
            </GridItem>
            <GridItem p="30px" textAlign="left">
                <Heading>Komponen</Heading>
                <Heading color="#F3AD00">Kurikulum</Heading>
                <Text marginTop="10px" fontSize="lg">
                    Kami merancang program pembelajaran yang tidak hanya dapat meningkatkan 
                    keterampilan teknis kamu tetapi juga keterampilan dasarmu 
                    (pemikiran kritis, pemecahan masalah)
                </Text>
            </GridItem>
        </Grid>
    </Container>
  )
}
