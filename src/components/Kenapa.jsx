import { Card, CardBody, Container, Flex, Box, Heading, Image, Text, CardHeader, Center } from '@chakra-ui/react'
import React from 'react'
import kenapa1Img from '../assets/kenapa-1.svg';
import kenapa2Img from '../assets/kenapa-2.svg';
import kenapa3Img from '../assets/kenapa-3.svg';
import kenapa4Img from '../assets/kenapa-4.svg';

const cardContent = [
    {
        title: 'Kompetensi Lengkap Terbaru',
        body: 'Paket kompetensi lengkap teknis dan non-teknis agar peserta siap kerja sesuai kebutuhan industri terkini.',
        imgUrl: kenapa1Img
    },
    {
        title: 'Kurikulum Masa Depan',
        body: 'Kurikulum teknologi yang fundamental untuk menghadapi tantangan hari ini dan perkembangan teknologi masa depan',
        imgUrl: kenapa2Img
    },
    {
        title: 'Perubahan Pola Pikir',
        body: 'Metode pembelajaran akan disesuaikan untuk melatih peserta agar memiliki pola pikir yang tepat dan kritis.',
        imgUrl: kenapa3Img
    },
    {
        title: 'Jaringan dan Kolaborasi',
        body: 'Event pelatihan coding merupakan tempat untuk bertemu dengan individu yang memiliki minat serupa yang akan membantu membangun koneksi.',
        imgUrl: kenapa4Img
    }
]

const bgImg = {
    url: 'https://i.ibb.co/3SgxmV4/hero2.jpg',
    size: 'cover'
}

export default function Kenapa() {
  return (
    <Container as="section" textAlign="center" minWidth="100%" >
        <Heading>Kenapa Harus Gabung</Heading>
        <Heading color="#03B36B">MIPA Coding Camp?</Heading>
        <Flex maxHeight="-webkit-max-content" marginTop="20px" gap={8}>
        {cardContent.map(content => (
            <Card border="1px solid" width="450px" textAlign="left" boxShadow="8px 8px">
                <CardBody>
                    <Center>
                        <Image src={content.imgUrl} marginBottom="20px" width="150px" height="100px" />
                    </Center>
                    <Heading fontSize="xl" color="#03B36B">{content.title}</Heading>
                    <Text>{content.body}</Text>
                </CardBody>
            </Card>
        ))}
        </Flex>
    </Container>
  )
}
