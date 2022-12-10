import './App.css';
import {
  Center,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Gitgraph from './Gitgraph';
import GitStats from './GitStats';
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Profile />
      <About />
      <Center>
        <Gitgraph />
      </Center>
      <Center>
        <Flex direction={"column"} alignItems="center" gap={"10"}>
          <Heading size={"md"} color={useColorModeValue("black", "white")}>My Github Stats</Heading>
          <GitStats />
        </Flex>
      </Center>
      <Projects />
      <Divider />
      <Contact />
    </ChakraProvider>  
  );
}
export default App;
