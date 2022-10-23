import {
  Heading,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Calender() {
  const [dateMenu, setDateMenu] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleMenuClick() {
    setDateMenu("");
  }

  return (
    <>
      <Heading m={0} p="1.5em" bg={"gray.200"} align="center">
        Calender
      </Heading>
      <Menu>
        <MenuButton
          border={0}
          m="1em 1em 0 1em"
          onClick={handleMenuClick}
          as={Button} 
          rightIcon={<ChevronDownIcon fontSize="4xl"/>}
          borderRadius={0}
        >
          <Text fontSize="lg" ml="0.5em" align="left">23 October</Text>
        </MenuButton>
        <MenuList>
          <MenuItem>24 October</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Calender;
