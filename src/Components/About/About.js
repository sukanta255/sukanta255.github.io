import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Icon,
  useColorModeValue,
  Center,
  Heading,

} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb, 
  SiHeroku,
  SiGit, 
  SiRedux,
  SiChakraui,  
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGithub,
  IoLogoCss3,
} from "react-icons/io5";
import {
  SiPostman,
  SiExpress,
  SiNetlify
} from "react-icons/si";
import {
  BsCode
} from "react-icons/bs";


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
const Feature = ({ icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex gap={"3"}
        boxSize={"70"}
        borderRadius={"lg"}
        align={"center"}
        justify={"center"}
        bg={iconBg}
      >
        {icon}
      </Flex>
    </Stack>
  );
};
const About = () => {
  return (
    <Container className="reveal" id="skills" maxW={"7xl"} py={20} isLazy>
      <Center p={"10"}>
        <Heading color={useColorModeValue("black", "white")} size="md">
          Tech Skills
        </Heading >
      </Center>
      <SimpleGrid columns={{ base: 3, sm: 5, md: 7 }} spacing={8}>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoReact}
                color={useColorModeValue("blue.200", "blue.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>React</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoNodejs}
                color={useColorModeValue("green.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "green.900")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Nodejs</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoJavascript}
                color={useColorModeValue("yellow.300", "yellow.400")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Javascript</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoHtml5}
                color={useColorModeValue("red.300", "red.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>HTML</Heading>
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiExpress}
                color={useColorModeValue("green.500", "green.300")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
      />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Expressjs</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoGithub}
                color={useColorModeValue("white", "blue.700")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>GitHub</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiHeroku}
                color={useColorModeValue("white", "blue.700")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Heroku</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiGit}
                color={useColorModeValue("red", "red.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Git</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoCss3}
                color={useColorModeValue("blue.200", "blue.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>CSS3</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>    
          <Feature
            icon={
              <Icon
                as={SiRedux}
                color={useColorModeValue("white", "red.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Redux</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiChakraui}
                color={useColorModeValue("#4DC7C2", "#4DC7C2")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>ChakraUI</Heading >
        </Flex>      
        <Flex gap={"3"} direction={"column"} align={"center"}>
        <Feature
          icon={
            <Icon
              as={TbBrandNextjs}
              color={useColorModeValue("white", "black")}
              boxSize={"62"}
              _hover={{
                bgGradient: "linear(to-r, #18A558, #116530)",
              }}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>NextJS</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiMongodb}
                color={useColorModeValue("green.500", "green.300")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
      />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>MongoDB</Heading >
        </Flex>
      </SimpleGrid>
      <Center p={"10"}>
        <Heading color={useColorModeValue("black", "white")} size="md">
          Tools
        </Heading >
      </Center>
      <SimpleGrid columns={{ base: 3, sm: 5, md: 7 }} spacing={8} >
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={BsCode}
                color={useColorModeValue("blue.200", "blue.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Vs Code</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiMongodb}
                color={useColorModeValue("green.500")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "green.900")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>MongoDb Atlas</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={SiNetlify}
                color={useColorModeValue("yellow.300", "yellow.400")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Netlify</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
        <Feature
            icon={
              <Icon
                as={SiPostman}
                color={useColorModeValue("white", "blue.700")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Postman</Heading>
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>
          <Feature
            icon={
              <Icon
                as={IoLogoGithub}
                color={useColorModeValue("white", "blue.700")}
                boxSize={"62"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Git</Heading >
        </Flex>

      </SimpleGrid>
    </Container>
  );
};

export default About;
