import { Box, Heading } from "@chakra-ui/react";
import SetTiming from "./SetTiming";

export default {
  title: "Progress/Set Goal/Set Timing",
  component: SetTiming,
  tags: ["autodocs"],
};

export const SetGoal_Timing = {
  args: {
    timing: "Month",
  },
  render: (args) => (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <SetTiming timing={args.timing} />
      </Box>
    </Box>
  ),
};
