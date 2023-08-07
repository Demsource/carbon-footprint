import { useQuery } from "@apollo/client";
import { GET_TIPS_DASHBOARD } from "../utils/gqlQueries";
import { processTipsBarGQLData } from "../utils/processGQLData";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Tips from "./Tips";

const TipsBar = () => {
  const { loading, error, data } = useQuery(GET_TIPS_DASHBOARD);
  const tips = processTipsBarGQLData(data?.tips?.dashboardTips);

  return (
    <>
      <Flex
        position="relative"
        bg="white"
        align="center"
        justify="center"
        border="2px solid #D9D9D9"
        borderRadius="6px"
        h="43px"
        mb="10px"
        overflow="hidden"
      >
        <Heading
          color="brand.900"
          fontFamily="heading"
          fontSize="16px"
          fontWeight="bold"
          lineHeight="27.5px"
        >
          Tips to Improve
        </Heading>
        <Box
          position="absolute"
          bg="brand.500"
          h="24px"
          w="24px"
          top="-12px"
          left="-12px"
          transform="rotate(45deg)"
        ></Box>
      </Flex>
      <Tips loading={loading} error={error} data={tips} tipsBar={true} />
    </>
  );
};

export default TipsBar;
