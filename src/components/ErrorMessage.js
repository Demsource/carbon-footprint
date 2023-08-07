import { Flex, Text } from "@chakra-ui/react";

const ErrorMessage = ({ messageText, ...rest }) => {
  return (
    <Flex flexDir="column" align="center" justify="center" {...rest}>
      <Text textAlign="center">
        <Text as="b" color="brand.900">
          Error:{" "}
        </Text>
        {messageText}
      </Text>
    </Flex>
  );
};

export default ErrorMessage;
