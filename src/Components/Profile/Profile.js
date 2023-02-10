import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Resume from "./Sukanta-Pramanik-Resume.pdf";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import SukantaImage from "./myimage/sukanta.jpg";

const Profile = () => { 
  return (
    <>
      <Container id="home" maxW={"7xl"} isLazy marginTop={["20"]} >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 19 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 6 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              fontFamily={"sans-serif"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                  zIndex: -1,
                }}
              >
                Welcome to my
              </Text>
              <br />
              <Text
                as={"span"}
                color={"grey.100"}
                bgGradient="linear(to-r, violet, violet)"
                bgClip="text"
              >
                Portfolio!
              </Text>
            </Heading>
            <Heading>
              {/* {" "}
              <Typewriter
                options={{
                  strings: ["Hi, I am Sukanta Pramanik","Full Stack Web Developer"
                ],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              
              <h1>Hi, I am Sukanta Pramanik</h1>
              <h1>Full Stack Web Developer</h1>
            </Heading>
            <Text
              color={useColorModeValue("black", "white")}
              fontSize={"large"}
              fontStyle={"sans-serif"}
            >
              I am a full stack web developer as well as excellent knowledge of developing
              web services and good communication, organizational, and interpersonal skills.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}>
            
              {/* <a href={Resume} target="_blank" download={"Sukanta-Pramanik-Resume"}> */}
              <a href="https://drive.google.com/file/d/1AHgx25g-lcb4VxV65Z5A4OBrx1TWGBA8/view?usp=sharing" target="_blank" >
                <Button
                  rounded={"full"}
                  rightIcon={<ChevronRightIcon />}
                  size={"lg"}
                  colorScheme={"red"}
                  fontWeight={"normal"}
                  bgGradient="linear(to-r, #007500, #007500)"
                  _hover={{ bgGradient: "linear(to-l, #007500, #007500)" }}
                  w="fit-content"
                  color="white"
                >
                  Resume
                </Button>
              </a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
              <Image
                alt={"Sukanta"}
                fit={"cover"}
                align={"center"}
                w={"90%"}
                h={"90%"}
                style={{width: 400, height: 420, borderRadius: "50%"}} 
                src={SukantaImage}
                // border={"1px solid black"}
              />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};
export default Profile;