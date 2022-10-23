import { Flex, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import AddProject from "../overview/AddProject";
import AddTask from "../overview/AddTask";

function Overview() {
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <>
      <Heading m={0} p="1.5em" bg={"gray.200"} align="center">
        Overview
      </Heading>
      <Flex justifyContent="space-evenly">
        <Button
          fontSize="xl"
          onClick={() => setMenuToggle(true)}
          borderRadius={0}
          w="100%"
          bg={menuToggle ? "gray.400" : "gray.100"}
          _active={{ bg: menuToggle ? "gray.400" : "gray.100" }}
          _hover={{ bg: "gray.400" }}
        >
          Projects
        </Button>
        <Button
          fontSize="xl"
          onClick={() => setMenuToggle(false)}
          borderRadius={0}
          w="100%"
          bg={!menuToggle ? "gray.400" : "gray.100"}
          _active={{ bg: !menuToggle ? "gray.400" : "gray.100" }}
          _hover={{ bg: "gray.400" }}
        >
          Tasks
        </Button>
      </Flex>
      <Flex direction="column-reverse">
        {menuToggle ? <AddProject /> : <AddTask />}
      </Flex>
    </>
  );
}

export default Overview;
