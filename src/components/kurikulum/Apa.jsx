import { Card, CardHeader, CardBody, Container, Heading, Text, Grid, GridItem, Image, Flex } from '@chakra-ui/react'
import kurikulum1 from './kurikulum-1.svg'

export default function Apa() {
  return (
    <Container minWidth="90%" padding="30px">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem colSpan="1" marginTop="30px">
          <Card maxWidth="xl" border="1px solid" borderRadius="15px" boxShadow="8px 8px">
            <CardHeader marginBottom="-20px">
              <Heading>Apa Yang Unik Dari 
                <Heading style={{color: '#03B36B'}}>MIPA Coding Camp?</Heading>
              </Heading>
            </CardHeader>
            <CardBody textAlign="left">
              <Text marginBottom="20px">
              Kelas kami mengadopsi metode pembelajaran socratic dan flipped learning 
              yang melatih peserta untuk memiliki pola pikir yang tepat dan kritis. 
              Melalui metode ini, kami membuat kurikulum holistik untuk meningkatkan kemampuan 
              kerja dan memungkinkan para talenta teknologi untuk siap menghadapi tantangan masa depan.
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan="1" marginLeft="20px">
          <Flex justifyContent="center">
            <Image src={kurikulum1} width="90%" height="100%" />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  )
}
