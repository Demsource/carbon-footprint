import { Box, Flex } from "@chakra-ui/react";

const CustomRadioButton = ({ active, ...rest }) => {
  return (
    <Flex
      align="center"
      justify="center"
      border="1px solid black"
      borderRadius="20px"
      h="20px"
      w="20px"
      {...rest}
    >
      {active && (
        <Box bg="brand.500" borderRadius="20px" h="10px" w="10px"></Box>
      )}
    </Flex>
  );
};

export default CustomRadioButton;
