import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const contents = [
    {
        id: 1,
        title: 'FullStack Engineering Path',
        body: 'Jika kamu tertarik untuk menjadi Full Stack Engineer, jalur ini paling cocok untukmu karena kamu akan mempelajari konsep fundamental dan keterampilan utama dengan menguasai JavaScript.'
    },
    {
        id: 2,
        title: 'Mobile Engineering Path',
        body: 'Jalur ini dibuat khusus untuk kamu yang memiliki aspirasi untuk menjadi Mobile Engineer (Android), di mana kamu dapat mempelajari keterampilan fundamental dengan Native Android, Kotlin, dan Jetpack.'
    },
    {
        id: 3,
        title: 'Data Analyst Path',
        body: 'Untuk kamu Data Analyst masa depan, jika kamu mengambil jalur ini, kamu akan mendapatkan pelatihan intensif dengan mempelajari tentang SQL, Python, Eksperimentasi, Visualisasi data, dan lainnya.'
    }
]

export default function Kelas() {
  return (
    <Container minWidth="80%">
        <Grid templateColumns="repeat(2, 1fr)" gap={14}>
            <GridItem textAlign="left">
                <Heading>Pilihan <Heading as="span" color="#DA251C">Kelas</Heading></Heading>
                <Text marginTop="10px">Program MIPA Coding Camp memberikan 3 jalur pembelajaran teknis berbeda yang dapat 
                    dipilih berdasarkan minat peserta. Kurikulum yang diberikan adalah kurikulum 
                    teknologi fundamental sehingga peserta akan dengan mudah beradaptasi menggunakan tools 
                    apapun di kemudian hari.</Text>
            </GridItem>
            <GridItem>
                <Accordion defaultIndex={[0]} allowToggle border="1px solid" borderRadius="8px" boxShadow="8px 8px">
                    {contents.map(content => (
                    <AccordionItem key={content.id}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' fontSize="xl" fontWeight="bold">
                                {content.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} textAlign="left">
                            {content.body}
                        </AccordionPanel>
                    </AccordionItem>
                    ))}
                </Accordion>
            </GridItem>
        </Grid>
    </Container>
  )
}
