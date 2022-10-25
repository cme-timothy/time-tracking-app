import { Flex, Heading, Button, Box, Tooltip } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import AddProject from "../overview/AddProject";
import AddTask from "../overview/AddTask";
import Project from "../../components/Project";
import Task from "../../components/Task";
import { DataContext } from "../../contexts/DataContext";

function Overview() {
  const [menuToggle, setMenuToggle] = useState(true);
  const { projects, getProjects, tasks, getTasks } = useContext(DataContext);

  useEffect(() => {
    getProjects();
    getTasks();
  }, []);

  console.log(projects);

  return (
    <>
      <Box position="fixed" top="0" width="100%" zIndex={1}>
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
          <Tooltip label={projects.length === 0 && "Create a Project first"}>
            <Button
              isDisabled={projects.length === 0 ? true : false}
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
          </Tooltip>
        </Flex>
      </Box>
      <Box mt="13em" mb="8em">
        {menuToggle ? (
          <Flex direction="column">
            {projects.map((data) => {
              return (
                <Project
                  key={data.id}
                  name={data.name}
                  color={data.color}
                  id={data.id}
                />
              );
            })}
          </Flex>
        ) : (
          <Flex direction="column">
            {tasks.map((data) => {
              return (
                <Task
                  key={data.id}
                  name={data.name}
                  color={data.color}
                  id={data.id}
                />
              );
            })}
          </Flex>
        )}

        <Flex direction="column">
          {menuToggle ? <AddProject /> : <AddTask projects={projects} />}
        </Flex>
      </Box>
    </>
  );
}

export default Overview;
