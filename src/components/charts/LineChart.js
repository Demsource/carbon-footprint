import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/line";
import CustomChartTooltip from "./CustomChartTooltip";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import CoordinateLine from "./CoordinateLine";
import StyledHeading from "../StyledHeading";
import StyledWrapper from "../StyledWrapper";

const LineChart = ({ data }) => (
  // Line Chart CF Data: LTM data from current date, Monthly sum per each category
  <StyledWrapper decorate>
    <StyledHeading
      headingText="Categorized carbon footprint (LTM)"
      title="Last Twelve Months (LTM)"
      mb="5px"
    />
    <Heading
      display="flex"
      justifyContent="center"
      fontFamily="main"
      fontSize={{ base: "6px", md: "9px" }}
      textAlign="center"
      lineHeight="1"
      _hover={{ cursor: "default" }}
    >
      <HStack spacing={{ base: "5px", md: "10px", lg: "20px" }}>
        {data.map((category) => (
          <Flex align="center" key={category.id}>
            <Box
              bg={category.color}
              mr={{ base: "5px", "2xl": "10px" }}
              w={{ base: "6px", "2xl": "12px" }}
              h="2px"
            ></Box>
            <Text
              color="#949494"
              textTransform="uppercase"
              _hover={{ color: "brand.900" }}
            >
              {category.id}
            </Text>
          </Flex>
        ))}
      </HStack>
    </Heading>
    <Box pos="relative" w="calc(100% - 80px)" h="calc(100% - 38px)">
      <ResponsiveLine
        curve="cardinal"
        data={data}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        enablePointLabel={false}
        margin={{ top: 40, right: 11, bottom: 40, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        useMesh={true}
        colors={{ datum: "color" }}
        tooltip={(data) => (
          <CustomChartTooltip chartName="Line" dataPoint={data.point} />
        )}
      />
      <CoordinateLine chart="Line" axis="x" />
      <CoordinateLine chart="Line" axis="y" />
    </Box>
  </StyledWrapper>
);

export default LineChart;

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          x: PropTypes.string,
          y: PropTypes.number,
        })
      ),
    })
  ),
};

LineChart.defaultProps = {};
