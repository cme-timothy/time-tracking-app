import { Heading, Box, Flex, Text } from "@chakra-ui/react";

function Timer() {
  return (
    <>
      <Heading m={0} p="1.5em" bg={"gray.200"} align="center">
        Timer
      </Heading>
      <Box align="center" bg="gray.200">
        <Text fontSize="4xl">00:00:00</Text>
        <Text fontSize="3xl" color="gray" mb="1.5em">
          Task
        </Text>
        <Flex justifyContent="space-between" m="1em 4em 1em 4em">
          <Box>
            <Text>Total</Text>
            <Text>00:00:00</Text>
          </Box>
          <Box>
            <Text>Today</Text>
            <Text>00:00:00</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Timer;
