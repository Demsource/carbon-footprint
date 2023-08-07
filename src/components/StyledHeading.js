import { Box, Heading, Text } from "@chakra-ui/react";

const StyledHeading = ({ headingText, ...rest }) => {
  return (
    <Heading
      display="flex"
      alignItems="center"
      justifyContent={
        { ...rest }.justifyContent ? { ...rest.justifyContent } : "center"
      }
      fontFamily="main"
      fontSize={{ base: "9px", md: "13px" }}
      textAlign="center"
      lineHeight="1"
      _hover={{ cursor: "default" }}
      {...rest}
    >
      <Box
        display="inline-block"
        bg="brand.200"
        mr="10px"
        h="6px"
        w="6px"
      ></Box>
      <Text
        color="#949494"
        textTransform="uppercase"
        _hover={{ color: "brand.900" }}
      >
        {headingText}
      </Text>
    </Heading>
  );
};

export default StyledHeading;
