import { Flex, Button, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link as ReachLink } from "react-router-dom";
function Header() {
  const [buttonClick, setButtonClick] = useState({
    stopWatch: "gray.200",
    calendar: "gray.200",
    briefcase: "white",
  });

  function handleClick(stopWatch, calendar, briefcase) {
    setButtonClick({
      stopWatch: stopWatch,
      calendar: calendar,
      briefcase: briefcase,
    });
  }

  return (
    <Flex justify="space-around" bg="gray.200" p="1em">
      <Link as={ReachLink} to="/Timer">
        <Button
          onClick={() => handleClick("white", "gray.200", "gray.200")}
          w="6em"
          h="4em"
          align="center"
          p="0.5em"
          _hover={{bg: "white"}}
          bg={buttonClick.stopWatch}
        >
          <FontAwesomeIcon icon={faStopwatch} size="3x" />
        </Button>
      </Link>
      <Link as={ReachLink} to="/Calender">
        <Button
          onClick={() => handleClick("gray.200", "white", "gray.200")}
          w="6em"
          h="4em"
          align="center"
          p="0.5em"
          _hover={{bg: "white"}}
          bg={buttonClick.calendar}
        >
          <FontAwesomeIcon icon={faCalendar} size="3x" />
        </Button>
      </Link>
      <Link as={ReachLink} to="/">
        <Button
          onClick={() => handleClick("gray.200", "gray.200", "white")}
          w="6em"
          h="4em"
          align="center"
          p="0.5em"
          _hover={{bg: "white"}}
          bg={buttonClick.briefcase}
        >
          <FontAwesomeIcon icon={faBriefcase} size="3x" />
        </Button>
      </Link>
    </Flex>
  );
}

export default Header;
