import PropTypes from "prop-types";
import { Box, Flex, Text } from "@chakra-ui/react";

const ProgressFillBar = ({ percentage }) => {
  return (
    <Flex
      position="relative"
      w="80%"
      h="40px"
      bg="#D9D9D9"
      overflow="hidden"
      pos="relative"
    >
      <Flex
        pos="absolute"
        bg="transparent"
        align="center"
        justify="center"
        h="100%"
        w="100%"
        top="0"
        left="0"
        zIndex={1}
      >
        <Text color="white" fontWeight="bold">
          {percentage} %
        </Text>
      </Flex>
      <Box bg="brand.500" w={percentage + "%"}></Box>
      <Box
        pos="absolute"
        bg="white"
        w="40px"
        h="40px"
        transform="rotate(45deg)"
        left="-20px"
      ></Box>
      <Box
        pos="absolute"
        bg="white"
        w="40px"
        h="40px"
        transform="rotate(45deg)"
        right="-20px"
        top="-20px"
      ></Box>
      <Box
        pos="absolute"
        bg="white"
        w="40px"
        h="40px"
        transform="rotate(45deg)"
        right="-20px"
        bottom="-20px"
      ></Box>
    </Flex>
  );
};

export default ProgressFillBar;

ProgressFillBar.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProgressFillBar.defaultProps = {};
