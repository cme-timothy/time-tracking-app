import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

function Task(props) {
  const { getTasks } = useContext(DataContext);

  function handleClick() {
    async function deleteTask() {
      await axios
        .delete(`http://localhost:4000/tasks/${props.id}`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      getTasks();
    }
    deleteTask();
  }

  return (
    <Flex
      justify="space-between"
      align="center"
      m="1em"
      p="1em"
      bg="gray.200"
      borderLeft="10px solid"
      borderColor={props.color}
    >
      <Box>
        <Text mt="0.1em" fontSize="lg">
          {props.name}
        </Text>
        {props.timer && (
          <Text fontSize="md" color="gray.500">
            {props.saveTime === props.id ? props.time : "00:00:00"}
          </Text>
        )}
      </Box>
      {!props.play && !props.timer && (
        <Button bg="gray.200" onClick={handleClick}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </Button>
      )}
      {props.play && (
        <Button bg="gray.200" onClick={() => props.start(props.name, props.id)}>
          Start
        </Button>
      )}
    </Flex>
  );
}

export default Task;
