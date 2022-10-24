import { Heading, Box, Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Timer() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timeStamp, setTimeStamp] = useState(null);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      return clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  function handleTimeStamp() {
    if (timeStamp === null) {
      const timeStamp = new Date().toLocaleString();
      setTimeStamp(timeStamp);
    }
  }

  return (
    <>
      <Heading m={0} p="1.5em" bg={"gray.200"} align="center">
        Timer
      </Heading>
      <Box align="center" bg="gray.200">
        <Text fontSize="4xl">
          {(time / 3600) % 60 < 10 && 0}
          {Math.floor((time / 3600) % 60)}:
          {Math.floor((time / 60) % 60) < 10 && 0}
          {Math.floor((time / 60) % 60)}:{time % 60 < 10 && 0}
          {time % 60}
        </Text>
        <Text fontSize="3xl" color="gray" mb="1.5em">
          {time}
        </Text>
        <Text fontSize="3xl" color="gray" mb="1.5em">
          {timeStamp}
        </Text>
        <Button
          onClick={() => {
            setRunning(!running);
            handleTimeStamp();
          }}
        >
          Start
        </Button>
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
