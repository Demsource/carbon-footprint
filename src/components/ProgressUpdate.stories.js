import { Box } from "@chakra-ui/react";
import ProgressUpdate from "./ProgressUpdate";

export default {
  title: "Progress/Update/Progress Update",
  component: ProgressUpdate,
  tags: ["autodocs"],
  argTypes: {
    calculatedValue: {
      control: { type: "number", min: 0, max: 100, step: 1 },
    },
  },
};

export const ProgressUpdate_With_FillBar = {
  args: {
    calculatedValue: 90,
    timing: "Month",
  },
  render: (args) => (
    <Box h="200px">
      <ProgressUpdate
        calculatedValue={args.calculatedValue}
        timing={args.timing}
      />
    </Box>
  ),
};
