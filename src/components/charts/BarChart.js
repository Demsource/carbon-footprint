import PropTypes from "prop-types";
import { ResponsiveBar } from "@nivo/bar";
import CustomChartTooltip from "./CustomChartTooltip";
import { Box } from "@chakra-ui/react";
import CoordinateLine from "./CoordinateLine";
import StyledHeading from "../StyledHeading";
import StyledWrapper from "../StyledWrapper";

const BarChart = ({ data }) => (
  // Bar Chart CF Data: LTM data from current date, All category sum per each month
  <StyledWrapper decorate>
    <StyledHeading
      headingText="Total carbon footprint (LTM)"
      title="Last Twelve Months (LTM)"
    />
    <Box pos="relative" w="100%" h="calc(100% - 24px)">
      <ResponsiveBar
        data={data}
        enableGridX={false}
        enableGridY={false}
        keys={["AllCategory"]}
        indexBy="Month"
        margin={{ top: 40, right: 30, bottom: 40, left: 80 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in Month: " + e.indexValue
        }
        colors={["#008080"]}
        tooltip={(data) => (
          <CustomChartTooltip chartName="Bar" dataPoint={data} />
        )}
      />
      <CoordinateLine chart="Bar" axis="x" />
      <CoordinateLine chart="Bar" axis="y" />
    </Box>
  </StyledWrapper>
);

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Month: PropTypes.string,
      AllCategory: PropTypes.number,
    })
  ),
};

BarChart.defaultProps = {};
