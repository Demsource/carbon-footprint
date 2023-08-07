import PropTypes from "prop-types";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CustomRadioButton from "./CustomRadioButton";

const SetTiming = ({ timing, changeTiming }) => {
  return (
    <>
      <Heading as="h3" fontFamily="inter" fontSize="24px" mt="36px" ml="10px">
        Timing
      </Heading>
      <Flex mt="30px" ml="10px">
        <Box
          display="flex"
          mr="10%"
          _hover={{ cursor: "pointer" }}
          onClick={() => timing !== "Month" && changeTiming()}
        >
          <CustomRadioButton mr="10px" active={timing === "Month"} />
          <Text as="h4">This Month</Text>
        </Box>
        <Box
          display="flex"
          _hover={{ cursor: "pointer" }}
          onClick={() => timing !== "Year" && changeTiming()}
        >
          <CustomRadioButton mr="10px" active={timing === "Year"} />
          <Text as="h4">This Year</Text>
        </Box>
      </Flex>
    </>
  );
};

export default SetTiming;

SetTiming.propTypes = {
  timing: PropTypes.oneOf(["Month", "Year"]),
  changeTiming: PropTypes.func,
};

SetTiming.defaultProps = {
  timing: "Month",
  changeTiming: () => {},
};
