import PieChart from "./PieChart";
import getIcon from "../../utils/getIcon";
import { Box, Flex, Text } from "@chakra-ui/react";

export default {
  title: "Charts/PieChart",
  component: PieChart,
  tags: ["autodocs"],
};

const dataTemp = [
  {
    id: "Housing",
    label: "Housing",
    value: 25,
    co2e: 1000,
    icon: getIcon("Housing", "#802B00", { height: "18px" }),
    color: "#802B00",
  },
  {
    id: "Nutrition",
    label: "Nutrition",
    value: 25,
    co2e: 1000,
    icon: getIcon("Nutrition", "#00802B", { height: "18px" }),
    color: "#00802B",
  },
  {
    id: "Purchases",
    label: "Purchases",
    value: 25,
    co2e: 1000,
    icon: getIcon("Purchases", "#80007F", { height: "18px" }),
    color: "#80007F",
  },
  {
    id: "Travel",
    label: "Travel",
    value: 25,
    co2e: 1000,
    icon: getIcon("Travel", "#002A80", { height: "18px" }),
    color: "#002A80",
  },
];

export const PieChart_CF_SideBar = {
  args: {
    data: dataTemp,
  },
  render: (args) => (
    <Box pos="relative" w="200px" h="200px">
      <PieChart data={args.data} addSec />
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
          {"4T"}
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
  ),
};

export const PieChart_CF = {
  args: {
    data: dataTemp,
    headingText: "Total carbon footprint Last Year",
    headingTextTitle: "Last Calendar Year",
  },
  render: (args) => (
    <Box height={["200px", "300px", "400px"]}>
      <PieChart
        data={args.data}
        headingText={args.headingText}
        headingTextTitle={args.headingTextTitle}
      />
    </Box>
  ),
};

export const PieChart_CF_Reduce_Month = {
  args: {
    data: dataTemp,
    offsetChart: {
      timing: "Month",
    },
    headingText: "Your Carbon Footprint Offset Last Month",
    headingTextTitle: "Last Calendar Month",
  },
  render: (args) => (
    <Box height={["200px", "300px", "400px"]}>
      <PieChart
        data={args.data}
        offsetChart={args.offsetChart}
        headingText={args.headingText}
        headingTextTitle={args.headingTextTitle}
      />
    </Box>
  ),
};

export const PieChart_CF_Reduce_Year = {
  args: {
    data: dataTemp,
    offsetChart: {
      timing: "Year",
    },
    headingText: "Your Carbon Footprint Offset Last Year",
    headingTextTitle: "Last Calendar Year",
  },
  render: (args) => (
    <Box height={["200px", "300px", "400px"]}>
      <PieChart
        data={args.data}
        offsetChart={args.offsetChart}
        headingText={args.headingText}
        headingTextTitle={args.headingTextTitle}
      />
    </Box>
  ),
};
