import { Box } from "@chakra-ui/react";

const CoordinateLine = ({ chart, axis }) => {
  return (
    <Box
      pos="absolute"
      bg="#655B96"
      h={axis === "x" ? "1px" : axis === "y" ? "calc(100% - 75px)" : ""}
      w={
        axis === "x"
          ? chart === "Line"
            ? "calc(100% - 79px)"
            : chart === "Bar"
            ? "calc(100% - 121px)"
            : ""
          : axis === "y"
          ? "1px"
          : ""
      }
      bottom="10"
      left="79px"
    ></Box>
  );
};

export default CoordinateLine;
