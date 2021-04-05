import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Maunolo</Text>
        <Text color="gray.300" fontSize="small">
          mauricio.dev@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Maunolo" src="https://github.com/maunolo.png"/>
    </Flex>
  )
}