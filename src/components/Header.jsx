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
    stopWatch: "gray",
    calendar: "gray",
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
    <Flex justify="space-around" bg="gray" p="1em">
      <Link as={ReachLink} to="/Timer">
        <Button
          onClick={() => handleClick("white", "gray", "gray")}
          w="6em"
          align="center"
          p="0.5em"
          bg={buttonClick.stopWatch}
        >
          <FontAwesomeIcon icon={faStopwatch} size="3x" />
        </Button>
      </Link>
      <Link as={ReachLink} to="/Calender">
        <Button
          onClick={() => handleClick("gray", "white", "gray")}
          w="6em"
          align="center"
          p="0.5em"
          bg={buttonClick.calendar}
        >
          <FontAwesomeIcon icon={faCalendar} size="3x" />
        </Button>
      </Link>
      <Link as={ReachLink} to="/">
        <Button
          onClick={() => handleClick("gray", "gray", "white")}
          w="6em"
          align="center"
          p="0.5em"
          bg={buttonClick.briefcase}
        >
          <FontAwesomeIcon icon={faBriefcase} size="3x" />
        </Button>
      </Link>
    </Flex>
  );
}

export default Header;
