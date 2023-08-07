import PropTypes from "prop-types";
import { Avatar, Button, Grid, GridItem, ListItem } from "@chakra-ui/react";

const Player = ({ loggedInUser, player }) => (
  <ListItem
    bg={loggedInUser && "rgba(0, 128, 128, 0.30)"}
    borderRadius={loggedInUser && "50px"}
    borderBottom="1px solid #D9D9D9"
    fontSize="18px"
    fontWeight="bold"
    mb="15px"
    _hover={{
      bg: !loggedInUser && "#F7FAFC",
      borderRadius: !loggedInUser && "50px",
    }}
  >
    <Grid templateColumns="1fr 1fr 6fr 2fr 2fr" py="10px">
      <GridItem display="flex" alignItems="center" justifyContent="center">
        {player?.placement <= 3 ? (
          <Avatar
            src={"/carbon-footprint/icons/medal-for-place-" + player.placement + ".png"}
            w="40px"
            h="40px"
            mt=""
            zIndex="1"
          ></Avatar>
        ) : (
          player?.placement
        )}
      </GridItem>
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        ml="20px"
        mr="10px"
      >
        <Avatar
          src={player?.avatar?.url}
          w="60px"
          h="60px"
          mt=""
          zIndex="1"
        ></Avatar>
      </GridItem>
      <GridItem display="flex" alignItems="center">
        {player?.username}
      </GridItem>
      <GridItem display="flex" alignItems="center" justifyContent="center">
        {player?.points} Pts
      </GridItem>
      <GridItem
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="10px"
      >
        <Button _hover={{ cursor: "not-allowed" }} colorScheme="brand">
          View profile
        </Button>
      </GridItem>
    </Grid>
  </ListItem>
);

export default Player;

Player.propTypes = {
  categoryName: PropTypes.string,
  player: PropTypes.object,
};

Player.defaultProps = {};
