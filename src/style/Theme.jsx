import { extendTheme } from '@chakra-ui/react'
import { accordionTheme } from './Accordion'

const theme = extendTheme({
  fonts: {
    heading: `'Ubuntu', sans-serif, 700`,
    body: `'Ubuntu', sans-serif, 400`,
  },
  color: {
    greener: '#03B36B'
  },
  components: {
    Accordion: accordionTheme
  }
})

export default theme