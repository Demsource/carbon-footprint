import PropTypes from "prop-types";
import { List } from "@chakra-ui/react";
import Player from "./Player";

const Players = ({ userId, players }) => {
  return (
    <List mt="30px">
      {players?.map((player) => {
        const loggedInUser = userId === player?.user?.id;
        return (
          <Player key={player.id} loggedInUser={loggedInUser} player={player} />
        );
      })}
    </List>
  );
};

export default Players;

Players.propTypes = {
  userId: PropTypes.string,
  players: PropTypes.array,
};

Players.defaultProps = {};
