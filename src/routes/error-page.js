import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex id="error-page" h="100%" align="center" justify="center">
      <Box textAlign="center" mb="100px">
        <Heading color="brand.900" mb={10}>
          Sorry
        </Heading>
        <Text mb={6}>An unexpected error has occurred</Text>
        {(error?.statusText || error?.message) && (
          <Text color="gray">
            <Text as="i">{error.statusText || error.message}</Text>
          </Text>
        )}
        <Link to="/">
          <Text color="brand.500" textTransform="uppercase" mt={6}>
            Go to Dashboard
            <ArrowForwardIcon color="brand.500" mb="4px" ml="4px" />
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
