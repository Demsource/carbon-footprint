import { Box } from "@chakra-ui/react";
import BarChart from "./BarChart";

export default {
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
};

const dataTemp = [
  {
    Month: "JAN",
    AllCategory: 2500,
  },
  {
    Month: "FEB",
    AllCategory: 3000,
  },
  {
    Month: "MAR",
    AllCategory: 2300,
  },
  {
    Month: "APR",
    AllCategory: 1900,
  },
  {
    Month: "MAY",
    AllCategory: 2800,
  },
  {
    Month: "JUN",
    AllCategory: 3100,
  },
  {
    Month: "JUL",
    AllCategory: 2800,
  },
  {
    Month: "AUG",
    AllCategory: 2100,
  },
  {
    Month: "SEP",
    AllCategory: 2900,
  },
  {
    Month: "OCT",
    AllCategory: 3000,
  },
  {
    Month: "NOV",
    AllCategory: 3100,
  },
  {
    Month: "DEC",
    AllCategory: 3300,
  },
];

export const BarChart_LTM = {
  args: {
    data: dataTemp,
    headingText: "Total carbon footprint Last Year",
    headingTextTitle: "Last Calendar Year",
  },
  render: (args) => (
    <Box height={["200px", "300px", "400px"]}>
      <BarChart data={args.data} />
    </Box>
  ),
};
