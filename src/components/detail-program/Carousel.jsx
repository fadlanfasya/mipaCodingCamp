import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import ChakraCarousel from "../carousel/ChakraCarousel";

export default function Carousel() {
  const jadwal = [
    {
      id: 1,
      title: "Tahap Awal (Onboarding)",
      date: "8 September 2023",
      body: 'Di tahap ini akan merupakan pengumuman dan persiapan untuk memulai proses pembelajaran.'
    },
    {
      id: 2,
      title: 'Tahap Pembelajaran Teknis',
      date: "11 September - 27 Oktober 2023",
      body: 'Pembelajaran di tingkat ini adalah pembelajaran instruksional dengan instruktur yang berasal dari para ahli di Industri, untuk mempelajari lebih dalam tentang konsep dan dasar-dasar dalam teknik dan data.'
    },
    {
      id: 3,
      title: 'Career Readiness Week',
      date: "16 - 27 Oktober 2023",
      body: 'Di minggu ini kamu akan mendpatkan materi persiapan karir yang bersifat teknis'
    },
    {
      id: 4,
      title: 'Tahap Akhir',
      date: '13 November - 1 Januari 2023',
      body: 'Di level ini kamu akan mempraktikkan pengetahuan yang kamu dapat di proses pembelajaran. Kamu bisa mengerjakan capstone project atau mendapatkan pengalaman magang selama 3 bulan di mitra industri.'
    }
  ]

  return (
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
      >
        <ChakraCarousel gap={32}>
          {jadwal.map((post, index) => (
            <Flex
              key={index}
              border="1px solid"
              boxShadow="8px 8px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="left"
                  w="full"
                  mb={2}
                >
                  {post.title}
                </Heading>
                <Text w="full">{post.body}</Text>
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <Text>{post.date}</Text>
                </HStack>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
  );
}
