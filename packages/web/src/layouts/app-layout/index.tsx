import { Box, Flex } from '@chakra-ui/react'
import { AppLayoutProps } from './types'

export const AppLayout = ({ children }: AppLayoutProps): React.ReactElement => {
  return (
    <Box>
      <Flex as="main" h="100vh" alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </Box>
  )
}
