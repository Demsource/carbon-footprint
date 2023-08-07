import PropTypes from "prop-types";
import { useUserAvatar } from "../AppContext";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import StyledWrapper from "./StyledWrapper";
import StyledHeading from "./StyledHeading";
import ProgressFillBar from "./ProgressFillBar";
import { populateProgressFillBarData } from "./charts/populateChartData";

const ProgressUpdate = ({
  timing,
  data,
  calculatedValue /* hardcoded value arg for storybook */,
}) => {
  const userAvatarData = useUserAvatar();

  const completed = data
    ? populateProgressFillBarData(data)
    : calculatedValue
    ? calculatedValue < 0
      ? 0
      : calculatedValue > 100
      ? 100
      : calculatedValue
    : 0;

  return (
    <StyledWrapper decorate fontFamily="inter">
      <StyledHeading
        headingText={
          completed
            ? `You’ve completed ${completed}% of your set goals of Last ${timing}`
            : "Goals completed"
        }
        title={"Last Calendar " + timing}
        fontSize={{ base: "9px", md: "13px" }}
        ml="30px"
        justifyContent="flex-start"
        w="100%"
      />
      <Flex
        align="center"
        justify="center"
        w="100%"
        px="10px"
        mt="30px"
        mx="20px"
      >
        <Avatar
          src={userAvatarData?.user?.image?.url}
          w="60px"
          h="60px"
          mr="20px"
          zIndex="1"
        />
        {completed ? (
          <ProgressFillBar percentage={completed} />
        ) : (
          <Text
            color="#008080"
            fontSize="13px"
            border="2px solid #B2D8D8"
            borderRadius="10px"
            padding="10px"
          >
            Progress update of goals you set will display here
          </Text>
        )}
      </Flex>
    </StyledWrapper>
  );
};

export default ProgressUpdate;

ProgressUpdate.propTypes = {
  timing: PropTypes.oneOf(["Month", "Year"]),
  data: PropTypes.shape({
    month: PropTypes.object,
    year: PropTypes.object,
  }),
  calculatedValue: PropTypes.number,
};

ProgressUpdate.defaultProps = {
  timing: "Month",
  calculatedValue: 0,
};
