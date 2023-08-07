import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import SideBarNav from "./SideBarNav";
import { disableSelectionStyles } from "../utils/styles_chakraUI";
import SideBarAdditionalSection from "./SideBarAdditionalSection";

const SideBar = () => {
  return (
    <Box
      as="aside"
      position="relative"
      bg="#F8FCFC"
      p="26px 32px 26px 64px"
      h="100%"
      width="300px"
      _hover={{ cursor: "default" }}
    >
      <Flex align="center" justify="center">
        <Flex
          align="flex-end"
          justify="flex-start"
          borderBottom="2px solid #C9E4E0"
          w="calc(100% - 16px)"
          pb="15px"
        >
          <Image
            src="/cf-logo.png"
            alt="My Carbon Footprint App Logo"
            h="65px"
            mr="5px"
            draggable={false}
            sx={disableSelectionStyles}
          />
          <Heading
            color="brand.500"
            fontFamily="Inter, sans-serif"
            fontSize="20px"
            fontWeight="700"
            lineHeight="25px" /* 67.568% */
            letterSpacing="-0.45px"
            textTransform="lowercase"
            draggable={false}
            sx={disableSelectionStyles}
          >
            My <br />
            Carbon
          </Heading>
        </Flex>
      </Flex>

      <Box as="nav" mt="40px" pb="64px" borderBottom="2px solid #C9E4E0">
        <Heading
          as="h3"
          color="#4D5150"
          fontFamily="sidebar"
          fontSize="12px"
          textTransform="uppercase"
          p="16px"
          pt="0"
        >
          Navigation
        </Heading>
        <SideBarNav />
      </Box>

      <SideBarAdditionalSection />

      <Box
        position="absolute"
        top="64px"
        right="-2px"
        bg="#DBF0EE"
        h="calc(100% - 64px)"
        w="2px"
      ></Box>
    </Box>
  );
};

export default SideBar;
