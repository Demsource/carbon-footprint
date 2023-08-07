import PropTypes from "prop-types";
import { ResponsivePie } from "@nivo/pie";
import CustomChartTooltip from "./CustomChartTooltip";
import StyledHeading from "../StyledHeading";
import StyledWrapper from "../StyledWrapper";
import { Flex } from "@chakra-ui/react";
import PieChartDescList from "./PieChartDescList";

const PieChart = ({
  data,
  offsetChart,
  headingText,
  headingTextTitle,
  addSec,
}) => (
  // Pie Chart CF Data: Last Calendar Year data from current date, Yearly sum per each categories

  <StyledWrapper decorate={offsetChart} addSec={addSec}>
    {headingText && headingTextTitle && (
      <StyledHeading
        headingText={headingText}
        title={headingTextTitle}
        mt={!offsetChart && "20px"}
        ml="30px"
        justifyContent="flex-start"
        w="100%"
      />
    )}

    {offsetChart ? (
      <Flex
        justify="center"
        align="center"
        h="100%"
        w="100%"
        flexDir={{ base: "column", lg: "row" }}
      >
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
          innerRadius={0.6}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsRadiusOffset={0.55}
          arcLabelsTextColor={"white"}
          valueFormat={(value) => "- " + value + " %"}
          colors={{ datum: "data.color" }}
          tooltip={(data) => (
            <CustomChartTooltip
              chartName="Pie"
              dataPoint={data.datum}
              offsetChart={offsetChart}
            />
          )}
        />
        <PieChartDescList data={data} side />
      </Flex>
    ) : (
      <>
        <ResponsivePie
          data={data}
          margin={{
            top: addSec ? 10 : 20,
            right: addSec ? 10 : 80,
            bottom: addSec ? 10 : 40,
            left: addSec ? 10 : 80,
          }}
          innerRadius={addSec ? 0.8 : 0.6}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsRadiusOffset={0.55}
          arcLabelsTextColor={"white"}
          valueFormat={(value) => value + " %"}
          colors={{ datum: "data.color" }}
          tooltip={(data) => (
            <CustomChartTooltip chartName="Pie" dataPoint={data.datum} />
          )}
          enableArcLabels={addSec && false}
          // arcLinkLabel={(d) => `${d.id} (${d.formattedValue})`}
          activeInnerRadiusOffset={8}
        />
        {!addSec && <PieChartDescList data={data} />}
      </>
    )}
  </StyledWrapper>
);

export default PieChart;

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.number,
      co2e: PropTypes.number,
      icon: PropTypes.object,
      color: PropTypes.string,
    })
  ),
  offsetChart: PropTypes.shape({
    timing: PropTypes.string,
  }),
  headingText: PropTypes.string,
  headingTextTitle: PropTypes.string,
};

PieChart.defaultProps = {};
