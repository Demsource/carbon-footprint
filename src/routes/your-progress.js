import { Grid, GridItem, Heading } from "@chakra-ui/react";
import ProgressUpdate from "../components/ProgressUpdate";
import PieChart from "../components/charts/PieChart";
import { pieChartData } from "../components/charts/createChartData";
import { populatePieChartData_OffsetCF } from "../components/charts/populateChartData";
import SetGoal from "../components/SetGoal";
import { scrollBarStyles } from "../utils/styles_chakraUI";
import {
  useBeforeLastYearCFCategorized,
  useLTMCFMonthlyBeforeLastMonth,
  useLTMCFMonthlyLastMonth,
  useLastYearCFCategorized,
  useUserGoalTiming,
} from "../AppContext";

const YourProgress = () => {
  const pieChartData_instance = [...pieChartData];
  const { timing, setTiming } = useUserGoalTiming();

  const changeTiming = () =>
    timing === "Month" ? setTiming("Year") : setTiming("Month");

  const {
    loading_lastYear_CF_Categorized,
    error_lastYear_CF_Categorized,
    lastYear_CF_Categorized,
  } = useLastYearCFCategorized();

  const {
    loading_beforeLastYear_CF_Categorized,
    error_beforeLastYear_CF_Categorized,
    beforeLastYear_CF_Categorized,
  } = useBeforeLastYearCFCategorized();

  const {
    loading_ltm_CF_Monthly_LastMonth,
    error_ltm_CF_Monthly_LastMonth,
    ltm_CF_Monthly_LastMonth,
  } = useLTMCFMonthlyLastMonth();

  const {
    loading_ltm_CF_Monthly_BeforeLastMonth,
    error_ltm_CF_Monthly_BeforeLastMonth,
    ltm_CF_Monthly_BeforeLastMonth,
  } = useLTMCFMonthlyBeforeLastMonth();

  populatePieChartData_OffsetCF(pieChartData_instance, {
    loadings:
      timing === "Month"
        ? [
            loading_ltm_CF_Monthly_LastMonth,
            loading_ltm_CF_Monthly_BeforeLastMonth,
          ]
        : [
            loading_lastYear_CF_Categorized,
            loading_beforeLastYear_CF_Categorized,
          ],
    errors:
      timing === "Month"
        ? [error_ltm_CF_Monthly_LastMonth, error_ltm_CF_Monthly_BeforeLastMonth]
        : [error_lastYear_CF_Categorized, error_beforeLastYear_CF_Categorized],
    gqlData: {
      month: {
        prevMonth: ltm_CF_Monthly_LastMonth,
        beforePrevMonth: ltm_CF_Monthly_BeforeLastMonth,
      },
      year: {
        prevYear: lastYear_CF_Categorized,
        beforePrevYear: beforeLastYear_CF_Categorized,
      },
    },
  });

  return (
    <>
      <Heading color="brand.900" ml="15px">
        Progress Update
      </Heading>
      <Grid
        templateColumns="5fr 4fr"
        templateRows={{ base: "1fr 3fr 4fr", xl: "1fr 3fr" }}
        gap="30px"
        h={{ base: "1660px", xl: "830px" }}
        mt="30px"
      >
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <ProgressUpdate
            timing={timing}
            data={{
              month:
                timing === "Month"
                  ? {
                      prevMonth: ltm_CF_Monthly_LastMonth,
                      beforePrevMonth: ltm_CF_Monthly_BeforeLastMonth,
                    }
                  : undefined,
              year:
                timing === "Year"
                  ? {
                      prevYear: lastYear_CF_Categorized,
                      beforePrevYear: beforeLastYear_CF_Categorized,
                    }
                  : undefined,
            }}
          />
        </GridItem>
        <GridItem
          colSpan={{ base: 2, xl: 1 }}
          rowSpan={{ base: 1, xl: 2 }}
          rowStart={{ base: 3, xl: 0 }}
          overflowY="auto"
          sx={scrollBarStyles}
        >
          <SetGoal
            timing={timing}
            changeTiming={changeTiming}
            waitList={{
              loadings: [
                loading_ltm_CF_Monthly_LastMonth,
                loading_ltm_CF_Monthly_BeforeLastMonth,
                loading_lastYear_CF_Categorized,
                loading_beforeLastYear_CF_Categorized,
              ],
              errors: [
                error_ltm_CF_Monthly_LastMonth,
                error_ltm_CF_Monthly_BeforeLastMonth,
                error_lastYear_CF_Categorized,
                error_beforeLastYear_CF_Categorized,
              ],
            }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, xl: 1 }}>
          <PieChart
            data={pieChartData_instance}
            offsetChart={{ timing: timing }}
            headingText={"Your Carbon Footprint Offset Last " + timing}
            headingTextTitle={"Last Calendar " + timing}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default YourProgress;
