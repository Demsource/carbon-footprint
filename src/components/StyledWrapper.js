import { Box } from "@chakra-ui/react";

const StyledWrapper = ({ decorate, children, addSec, ...rest }) => {
  if (decorate)
    return (
      <Box
        bg="#E5E5E5"
        fontFamily="main"
        borderRadius="10px"
        h="100%"
        w="100%"
        p="15px"
        {...rest}
      >
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          bg="white"
          borderRadius="10px"
          boxShadow="0px 4px 20px 0px rgba(0, 128, 128, 0.30)"
          h="100%"
          w="100%"
          pt="40px"
        >
          {children}
        </Box>
      </Box>
    );

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      border={!addSec && "2px solid #D9D9D9"}
      borderRadius={!addSec && "10px"}
      h="100%"
      w="100%"
    >
      {children}
    </Box>
  );
};

export default StyledWrapper;
