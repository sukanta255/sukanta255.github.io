import React from "react";
import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Box,
  Flex,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";

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
function Projects(){
  return (
    <>
      <Divider />
      <Center className="reveal" id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Projects
        </Text>
      </Center>
      <Center className="reveal" py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          Here are some of My Projects
        </Heading>
      </Center>

      <SimpleGrid
        columns={["1", "2", "2", "3"]}
        gap={["5", "10", "10"]}
        p={["2", "2", "6", "10"]}
      >
        <Center>
          <Flex
            boxShadow={"1px 2px 5px 10px gray"}
            h={["500px", "550px", "500px", "560px"]}
            borderRadius={"md"}
            w={["300px", "270px", "370px", "400px"]}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src="https://user-images.githubusercontent.com/101390725/191264154-7c99b1d0-f5c2-496c-bb80-bb2b569a18ee.png"
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Bewakoof Clone
                </Heading>
              </Center>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                p={"2"}
                align={"center"}
              >
                Clone of bewakoof.com ,Bewakoof is a lifestyle fashion brand that makes creative and top-notch apparel for trendy,contemporary Indians.
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open("https://drive.google.com/file/d/15SN17i6LdXdQjaNA8_pRjuQCC4OWX5hz/view", "_blank");
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open("https://flourishing-biscochitos-4f7f50.netlify.app/", "_blank");
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              {" "}
              <Button
              
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                
                onClick={() => {
                  window.open(
                    "https://github.com/11-DEEPAK-KUMAR-11/Bewakoof_website",
                    "_blank"
                  );
                }}
                
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"1px 2px 5px 10px gray"}
            h={["500px", "550px", "500px", "560px"]}
            w={["300px", "270px", "370px", "400px"]}
            borderRadius={"md"}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://user-images.githubusercontent.com/95949460/159299007-4c034fbc-71ee-4443-b226-8a3399d6b9c4.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}
              >
                <Heading size={"lg"} p={"2"}>
                  TATA 1mg Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                It is An e-commerce web application that widely provides e-pharmacy,
                diagnostics, and healthcare solutions
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML3, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
               
                _
                focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1TAZzjfdDlVL3vL6DqxGx8mh10BW2W882/view",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://prismatic-marshmallow-6f0b69.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              {" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                height={"100%"}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/Prakash6204/synonymous-wing-3039",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"1px 2px 5px 10px gray"}
            h={["500px", "550px", "500px", "560px"]}
            w={["300px", "270px", "370px", "400px"]}
            borderRadius={"md"}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://cdn-fkbpo.nitrocdn.com/QyYsbFxqOyiWDaKIXSljQVAgnjpwOGDP/assets/static/optimized/rev-cf9d909/wp-content/uploads/2022/06/Travelocity-1024x592.jpg"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Travelocity Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                Travelocity Clone - Book Your Hotels and Transportation at your Finger Tips
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML3, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1tn-afN5SXsQHMu_IJFq4cvgDWfzeo_Of/view",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://timely-zuccutto-a4829c.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              {" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/UtkarshOnGitHub/ossified-paper-8820",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"1px 2px 5px 10px gray"}
            h={["500px", "550px", "500px", "560px"]}
            w={["300px", "270px", "370px", "400px"]}
            borderRadius={"md"}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://user-images.githubusercontent.com/105916064/208317810-ef4d72da-4210-43cb-854f-f867e7aad2ec.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Licious Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                Licious the taste of fresh & delicious meat Website.From here you will Get delicious fresh chicken, meats and Seafood quickly delivered.
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                HTML, CSS, JavaScript, React js, Bootstrap, Chakra UI
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1XMqzpXLIZu1xpaJ7aTm0ReB9ZQmua85t/view",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://licious-freezing.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              {" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/anuragg0107/freezing-roll-5661",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"1px 2px 5px 10px gray"}
            h={["500px", "550px", "500px", "560px"]}
            w={["300px", "270px", "370px", "400px"]}
            borderRadius={"md"}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://user-images.githubusercontent.com/107980582/221499524-d1037907-1c3b-4a00-9ac4-f843eedd9784.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Koovs Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                Clone of Koovs.com, koovs is a Ecomerse related website which helps you to find the different kinds of the cloths products.
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                React js, Redux, Chakra UI, mongoDB
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1mWnEfeydj_GwPxChGXH-wRMcomqroBlF/view",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://frontend-mohit-6164.vercel.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              {" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #18A558, #116530)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/sukanta255/ordinary-summer-5089",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>          
      </SimpleGrid>
    </>
  );
};
export default Projects;
