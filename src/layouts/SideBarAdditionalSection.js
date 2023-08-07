import { useLastYearCFCategorized } from "../AppContext";
import { populatePieChartData } from "../components/charts/populateChartData";
import { pieChartData } from "../components/charts/createChartData";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import PieChart from "../components/charts/PieChart";

const SideBarAdditionalSection = () => {
  const pieChartData_instance = [...pieChartData];

  const {
    loading_lastYear_CF_Categorized,
    error_lastYear_CF_Categorized,
    lastYear_CF_Categorized,
  } = useLastYearCFCategorized();

  const { totalCF: lastYear_CF_Categorized_total } = populatePieChartData(
    pieChartData_instance,
    {
      loading: loading_lastYear_CF_Categorized,
      error: error_lastYear_CF_Categorized,
      gqlData: lastYear_CF_Categorized?.user?.oneYearData?.[0],
    }
  );

  return (
    <Box mt="40px">
      <Heading
        as="h3"
        color="#4D5150"
        fontFamily="sidebar"
        fontSize="12px"
        textTransform="uppercase"
        p="16px"
        pt="0"
      >
        My Carbon Footprint
      </Heading>
      <Box pos="relative" w="200px" h="200px">
        <PieChart data={pieChartData_instance} addSec />
        <Flex
          pos="absolute"
          align="center"
          justify="center"
          flexDir="column"
          color="brand.900"
          h="100%"
          w="100%"
          top="0"
          left="0"
          pointerEvents="none"
        >
          <Text as="b" fontSize="2rem" mr="3px">
            {lastYear_CF_Categorized_total}
          </Text>
          <Text as="b" fontSize="xs">
            CO
            <Text as="b" position="relative" top="0.5" fontSize="0.6rem">
              2
            </Text>
            e
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideBarAdditionalSection;
