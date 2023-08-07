import { Grid, GridItem } from "@chakra-ui/react";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import TipsBar from "../components/TipsBar";
import {
  barChartData,
  lineChartData,
  pieChartData,
} from "../components/charts/createChartData";
import {
  populateBarChartData,
  populateLineChartData,
  populatePieChartData,
} from "../components/charts/populateChartData";
import {
  useLastYearCFCategorized,
  useLTMCFCategorized,
  useLTMCFMonthly,
} from "../AppContext";

const Dashboard = () => {
  const pieChartData_instance = [...pieChartData];

  const {
    loading_lastYear_CF_Categorized,
    error_lastYear_CF_Categorized,
    lastYear_CF_Categorized,
  } = useLastYearCFCategorized();

  const {
    loading_ltm_CF_Categorized,
    error_ltm_CF_Categorized,
    ltm_CF_Categorized,
  } = useLTMCFCategorized();

  const { loading_ltm_CF_Monthly, error_ltm_CF_Monthly, ltm_CF_Monthly } =
    useLTMCFMonthly();

  populatePieChartData(pieChartData_instance, {
    loading: loading_lastYear_CF_Categorized,
    error: error_lastYear_CF_Categorized,
    gqlData: lastYear_CF_Categorized?.user?.oneYearData?.[0],
  });

  populateLineChartData(lineChartData, {
    loading: loading_ltm_CF_Categorized,
    error: error_ltm_CF_Categorized,
    gqlData: ltm_CF_Categorized?.user?.oneYearData?.[0],
  });

  populateBarChartData(barChartData, {
    loading: loading_ltm_CF_Monthly,
    error: error_ltm_CF_Monthly,
    gqlData: ltm_CF_Monthly?.user?.oneYearData?.[0],
  });

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="30px">
        <GridItem
          colSpan={{ base: "4", lg: "3" }}
          height={["200px", "300px", "400px"]}
        >
          <PieChart
            data={pieChartData_instance}
            headingText="Total carbon footprint Last Year"
            headingTextTitle="Last Calendar Year"
          />
        </GridItem>
        <GridItem
          colSpan={{ base: "4", lg: "1" }}
          bg="#F4F4F4"
          border="2px solid #D9D9D9"
          borderRadius="10px"
          height={["200px", "300px", "", "400px"]}
          p="8px"
          _hover={{ cursor: "default" }}
        >
          <TipsBar />
        </GridItem>
        <GridItem
          colSpan={{ base: "4", xl: "2" }}
          height={["200px", "300px", "400px"]}
        >
          <LineChart data={lineChartData} />
        </GridItem>
        <GridItem
          colSpan={{ base: "4", xl: "2" }}
          height={["200px", "300px", "400px"]}
        >
          <BarChart data={barChartData} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
