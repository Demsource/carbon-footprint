import { Box, Heading } from "@chakra-ui/react";
import SetTiming from "./SetTiming";
import ChooseCFOffset from "./ChooseCFOffset";

const SetGoal = ({ timing, changeTiming }) => {
  return (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <SetTiming timing={timing} changeTiming={changeTiming} />
        <ChooseCFOffset timing={timing} />
      </Box>
    </Box>
  );
};

export default SetGoal;
