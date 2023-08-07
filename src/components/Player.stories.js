import { List } from "@chakra-ui/react";
import Player from "./Player";

export default {
  title: "Leaderboard/Player",
  component: Player,
  tags: ["autodocs"],
};

const player = {
  __typename: "Player",
  id: "clkldmd14ljm50aw43ilkg0zo",
  user: {
    __typename: "MyCFUser",
    id: "clkk8ue3kdzx10ataqxn5zidx",
  },
  placement: 1,
  avatar: {
    __typename: "Asset",
    id: "clkk8t693e9ml0bw3i2ywme7t",
    url: "https://media.graphassets.com/i5b9wFaSSAmhrKJqjz4y",
  },
  username: "Jane Doe",
  points: 2500,
};

export const LoggedIn_Player = {
  args: {
    loggedInUser: true,
    player: player,
  },
  render: (args) => (
    <List>
      <Player loggedInUser={args.loggedInUser} player={args.player} />
    </List>
  ),
};
