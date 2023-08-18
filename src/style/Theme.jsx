import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif, 700`,
    body: `'Ubuntu', sans-serif, 400`,
  },
  color: {
    greener: '#03B36B'
  }
})

export default theme