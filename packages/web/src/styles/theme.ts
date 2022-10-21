import { extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '@saas-ui/react'

export const theme = extendTheme(
  {
    styles: {
      global: {
        pre: {
          fontSize: 'sm',
          as: 'pre',
          fontFamily: 'Basier Circle, sans-serif',
          whiteSpace: 'pre-wrap'
        }
      }
    },
    fonts: {
      body: 'Basier Circle, sans-serif',
      heading: 'Basier Circle, sans-serif'
    }
  },
  baseTheme
)
