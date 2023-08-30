import { Button, Box, Container, CloseButton, FormControl, FormLabel, Heading, Input, Select, Alert, AlertDescription, AlertTitle, useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function FormDaftar() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [jurusan, setJurusan] = useState('')
    const [semester, setSemester] = useState('')
    const [pilihanKelas1, setKelas1] = useState('')
    const [pilihanKelas2, setKelas2] = useState('')
    const [error, setError] = useState(null)

    const onClose = () => setError(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const participant = {email, name, jurusan, semester, pilihanKelas1, pilihanKelas2}
      
      const response = await fetch('https://api-mipacodingcamp.cyclic.cloud/api/participant', {
        method: 'POST',
        body: JSON.stringify(participant),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setEmail('')
        setName('')
        setJurusan('')
        setSemester('')
        setKelas1('')
        setKelas2('')
        console.log('new participant added:', json)
      }
  
    }

  return (
    <Container minWidth="50%" padding="30px" marginY="30px" borderRadius="15px" border="1px solid">
        <Heading mb="30px">Form Pendaftaran</Heading>
        <form onSubmit={handleSubmit}>
            <FormControl mb="20px">
                <FormLabel>Masukan Email :</FormLabel>
                <Input 
                type='email' 
                onChange={(e) => setEmail(e.target.value)}  
                value={email}
                border="1px solid" boxShadow="8px 8px"
                />
            </FormControl>
            <FormControl mb="20px">
                <FormLabel>Masukan Nama :</FormLabel>
                <Input 
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                border="1px solid" boxShadow="8px 8px"
                />
            </FormControl>
            <FormControl mb="20px">
                <FormLabel>Pilihan Jurusan :</FormLabel>
                <Select placeholder=' ' onChange={(e) => setJurusan(e.target.value)} value={jurusan} border="1px solid" boxShadow="8px 8px">
                    <option value='Matematika'>Matematika</option>
                    <option value='Fisika'>Fisika</option>
                    <option value='Kimia'>Kimia</option>
                    <option value='Biologi'>Biologi</option>
                    <option value='Statistika'>Statistika</option>
                    <option value='Geofisika'>Geofisika</option>
                    <option value='Teknik Elektro'>Teknik Elektro</option>
                    <option value='Teknik Informatika'>Teknik Informatika</option>
                    <option value='Aktuaria'>Aktuaria</option>
                    <option value='Teknologi Industri Kimia'>Teknologi Industri Kimia</option>
                </Select>
            </FormControl>
            <FormControl mb="20px">
                <FormLabel>Masukan Semester :</FormLabel>
                <Input 
                type='number'
                onChange={(e) => setSemester(e.target.value)}
                value={semester}
                border="1px solid" boxShadow="8px 8px"
                />
            </FormControl>
            <FormControl mb="20px">
                <FormLabel>Pilihan Kelas Pertama :</FormLabel>
                <Select placeholder=' ' onChange={(e) => setKelas1(e.target.value)} value={pilihanKelas1} border="1px solid" boxShadow="8px 8px">
                    <option value='FullStack Engineering Path'>FullStack Engineering Path</option>
                    <option value='Mobile Engineering Path'>Mobile Engineering Path</option>
                    <option value='Data Analyst Path'>Data Analyst Path</option>
                </Select>
            </FormControl>
            <FormControl mb="20px">
                <FormLabel>Pilihan Kelas Kedua :</FormLabel>
                <Select placeholder=' ' onChange={(e) => setKelas2(e.target.value)} value={pilihanKelas2} border="1px solid" boxShadow="8px 8px">
                    <option value='FullStack Engineering Path'>FullStack Engineering Path</option>
                    <option value='Mobile Engineering Path'>Mobile Engineering Path</option>
                    <option value='Data Analyst Path'>Data Analyst Path</option>
                </Select>
            </FormControl>
            <Button type='submit' colorScheme="green">Submit</Button>
            {error && 
            <Alert status='error' className="error" mt="30px">
                <Box>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Box>
                <CloseButton
                alignSelf='flex-start'
                position='relative'
                right={-1}
                top={-1}
                onClick={onClose}
                />
            </Alert>
            }
        </form>
    </Container>
  )
}
