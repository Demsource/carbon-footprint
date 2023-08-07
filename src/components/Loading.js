import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex align="center" justify="center" height="100%" mt="-20px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="brand.200"
        color="brand.500"
        size="xl"
      />
    </Flex>
  );
};

export default Loading;
