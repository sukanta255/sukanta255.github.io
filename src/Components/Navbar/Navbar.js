import React from "react";
import {
  Box,
  HStack,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Drawer,
  DrawerContent,
  DrawerBody,
 
  useDisclosure,
  Text,
  VStack
} from "@chakra-ui/react";
import Resume from "../Profile/SukantaPramanik.pdf";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={"100%"} my={["-20"]} position={"fixed"} zIndex={"25"}>
      <Flex


        bg={useColorModeValue("blue.100", "blue.900")}
        px={4}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack spacing={8}>
          <Box
          // bg={"#2563EB"}
            bgGradient="linear(to-r, green, green)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            fontFamily="sans-serif"
          >
            Sukanta
          </Box>
          <HStack
            spacing={4}
            display={{ base: "none", md: "flex" }}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#home"}
            >
              Home
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.300", "gray.600"),
              }}
              href={"#home"}
            >
              About
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#skills"}
            >
              Skills
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#projects"}
            >
              Projects
            </Link>

            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#contact"}
            >
              Contact
            </Link>
            <Link
              href={Resume}
              target="_blank"
              download={"Sukanta Pramanik Resume"}
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Resume
            </Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
            <Button
              onClick={onOpen}
              display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
            >
              <HamburgerIcon size="100px" />
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>

        <DrawerContent
          border={"3px"}
          bg={"blackAlpha.900"}
          w={"100%"}
          mt={"60px"}
          height="450px"
          display={{ sm: "block", md: "none", lg: "none", xl: "none" }}
        >
          <DrawerBody
            w={{ sm: "94%", md: "84%" }}
            ml={{ sm: "3%", md: "8%" }}
          >
            <VStack gap={"8"}>


              <Link
                fontSize={["20px"]}
                color={["white"]}
                mt="20px"
                href={"#home"}
                onClick={onClose}
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Home
              </Link>
              <Link
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                href={"#home"}
                onClick={onClose}
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                About
              </Link>
              <Link
                fontSize={["20px"]}
                color={["white"]}
                href={"#skills"}
                mt="40px"
                onClick={onClose}
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Skills
              </Link>
              <Link
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                href={"#projects"}
                onClick={onClose}
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                
                }}
              >
                Projects
              </Link>
              <Link
                fontSize={["20px"]}
                color={["white"]}
                mt="40px"
                href={"#contact"}
                onClick={onClose}
                _hover={{
                  cursor: "pointer",
                  textDecorationLine: "underline",
                  textDecorationColor: "red",
                  textDecorationThickness: "3px",
                }}
              >
                Contact
              </Link>
              <Link href={Resume}
                onClick={onClose}
                target="_blank"
                download={"Subham_Resume"}>
                <Text
                  fontSize={["20px"]}
                  color={["white"]}

                  _hover={{
                    cursor: "pointer",
                    textDecorationLine: "underline",
                    textDecorationColor: "red",
                    textDecorationThickness: "3px",
                  }}
                >
                  Resume
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
export default Navbar;
