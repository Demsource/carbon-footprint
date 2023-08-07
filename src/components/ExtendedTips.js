import { useCallback, useEffect } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import getIcon from "../utils/getIcon";
import Tips from "./Tips";

const ExtendedTips = ({
  loading,
  error,
  data: { image, heading, data: tipsData },
  handleClose,
}) => {
  const handleUserKeyPress = useCallback(
    (event) => {
      const { key, keyCode } = event;
      if (key === "Escape" || keyCode === 27) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Box
      pos="relative"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      minH="calc(100% - 100px)"
      w="100%"
      px="30px"
    >
      <Flex flexDir="column" align="center">
        <Box>
          <Image
            src={image}
            h={{ base: "40px", md: "60px", lg: "80px" }}
            mt="12px"
          />
        </Box>
        <Heading
          color="brand.900"
          fontSize={{ base: "16px", xl: "18px" }}
          textAlign="center"
          mt="17px"
        >
          {heading}
        </Heading>
      </Flex>
      <Tips loading={loading} error={error} data={tipsData} />
      <Box
        pos="absolute"
        right="20px"
        top="20px"
        _hover={{ cursor: "pointer", borderColor: "brand.900" }}
        title="Close (Esc)"
        onClick={() => {
          handleClose();
        }}
      >
        {getIcon("Close", "#1A3847", { width: "24px" })}
      </Box>
    </Box>
  );
};

export default ExtendedTips;
