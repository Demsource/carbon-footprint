import { Box } from "@chakra-ui/react";
import LineChart from "./LineChart";

export default {
  title: "Charts/LineChart",
  component: LineChart,
  tags: ["autodocs"],
};

const dataTemp = [
  {
    id: "Housing",
    color: "#802B00",
    data: [
      {
        x: "JAN",
        y: 342,
      },
      {
        x: "FEB",
        y: 435,
      },
      {
        x: "MAR",
        y: 123,
      },
      {
        x: "APR",
        y: 324,
      },
      {
        x: "MAY",
        y: 123,
      },
      {
        x: "JUN",
        y: 324,
      },
      {
        x: "JUL",
        y: 543,
      },
      {
        x: "AUG",
        y: 234,
      },
      {
        x: "SEP",
        y: 342,
      },
      {
        x: "OCT",
        y: 421,
      },
      {
        x: "NOV",
        y: 123,
      },
      {
        x: "DEC",
        y: 200,
      },
    ],
  },
  {
    id: "Nutrition",
    color: "#00802B",
    data: [
      {
        x: "JAN",
        y: 800,
      },
      {
        x: "FEB",
        y: 332,
      },
      {
        x: "MAR",
        y: 324,
      },
      {
        x: "APR",
        y: 423,
      },
      {
        x: "MAY",
        y: 200,
      },
      {
        x: "JUN",
        y: 743,
      },
      {
        x: "JUL",
        y: 400,
      },
      {
        x: "AUG",
        y: 360,
      },
      {
        x: "SEP",
        y: 210,
      },
      {
        x: "OCT",
        y: 310,
      },
      {
        x: "NOV",
        y: 420,
      },
      {
        x: "DEC",
        y: 320,
      },
    ],
  },
  {
    id: "Purchases",
    color: "#80007F",
    data: [
      {
        x: "JAN",
        y: 890,
      },
      {
        x: "FEB",
        y: 800,
      },
      {
        x: "MAR",
        y: 590,
      },
      {
        x: "APR",
        y: 780,
      },
      {
        x: "MAY",
        y: 780,
      },
      {
        x: "JUN",
        y: 810,
      },
      {
        x: "JUL",
        y: 620,
      },
      {
        x: "AUG",
        y: 880,
      },
      {
        x: "SEP",
        y: 610,
      },
      {
        x: "OCT",
        y: 900,
      },
      {
        x: "NOV",
        y: 700,
      },
      {
        x: "DEC",
        y: 750,
      },
    ],
  },
  {
    id: "Travel",
    color: "#002A80",
    data: [
      {
        x: "JAN",
        y: 1220,
      },
      {
        x: "FEB",
        y: 1300,
      },
      {
        x: "MAR",
        y: 1100,
      },
      {
        x: "APR",
        y: 1000,
      },
      {
        x: "MAY",
        y: 1100,
      },
      {
        x: "JUN",
        y: 1300,
      },
      {
        x: "JUL",
        y: 1000,
      },
      {
        x: "AUG",
        y: 1020,
      },
      {
        x: "SEP",
        y: 1000,
      },
      {
        x: "OCT",
        y: 1050,
      },
      {
        x: "NOV",
        y: 2000,
      },
      {
        x: "DEC",
        y: 1900,
      },
    ],
  },
];

export const LineChart_LTM = {
  args: {
    data: dataTemp,
    headingText: "Total carbon footprint Last Year",
    headingTextTitle: "Last Calendar Year",
  },
  render: (args) => (
    <Box height={["200px", "300px", "400px"]}>
      <LineChart data={args.data} />
    </Box>
  ),
};
