import { useQuery } from "@apollo/client";
import { GET_PLAYERS, GET_USER_ID } from "../utils/gqlQueries";
import { Flex, Heading, Spacer, Switch, Text } from "@chakra-ui/react";
import ErrorMessage from "../components/ErrorMessage";
import Players from "../components/Players";
import Loading from "../components/Loading";

const Leaderboard = () => {
  const {
    loading: loading_playersData,
    error: error_playersData,
    data: playersData,
  } = useQuery(GET_PLAYERS);
  if (error_playersData) console.log(error_playersData);

  const {
    loading: loading_userIdData,
    error: error_userIdData,
    data: userIdData,
  } = useQuery(GET_USER_ID);
  if (error_userIdData) console.log(error_userIdData);

  if (error_userIdData || error_playersData)
    return <ErrorMessage messageText="Leaderboard data did not received" />;
  if (loading_userIdData && loading_playersData) return <Loading />;

  return (
    <>
      <Flex align="center" justify="right" mt="5px">
        <Heading color="brand.900" ml="15px">
          Leaderboard
        </Heading>
        <Spacer />
        <Flex align="center">
          <Text mr="5px">Switch to Teams</Text>
          <Switch isDisabled colorScheme="brand" size="lg" mr="15px" />
        </Flex>
      </Flex>
      <Players
        userId={userIdData?.user?.id}
        players={playersData?.leaderboard?.players}
      />
    </>
  );
};

export default Leaderboard;
