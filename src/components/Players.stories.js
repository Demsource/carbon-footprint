import Players from "./Players";

export default {
  title: "Leaderboard/Players",
  component: Players,
  tags: ["autodocs"],
};

const userId = "clkk8ue3kdzx10ataqxn5zidx";

const players = [
  {
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
  },
  {
    __typename: "Player",
    id: "clklds9f9lnst0bw8tww7kq8k",
    user: null,
    placement: 2,
    avatar: {
      __typename: "Asset",
      id: "clkk5xds0do4u0bw3jlsh7zb2",
      url: "https://media.graphassets.com/Zhhtf1gRJydIIMkVrCUR",
    },
    username: "Kate Smith",
    points: 2475,
  },
  {
    __typename: "Player",
    id: "clkldszorlnu50bw8oguen4fl",
    user: null,
    placement: 3,
    avatar: {
      __typename: "Asset",
      id: "clkk5xdqpdo4m0bw379lq13d4",
      url: "https://media.graphassets.com/yBLCXxOT5mNvopRVfvH4",
    },
    username: "Khloe James",
    points: 2425,
  },
  {
    __typename: "Player",
    id: "clkldtnxc1ug50bvzw6n7laoj",
    user: null,
    placement: 4,
    avatar: {
      __typename: "Asset",
      id: "clkk5xdradhdi0aw4dpjz3sfo",
      url: "https://media.graphassets.com/3KKOdK1IQZqRrZwDFqTK",
    },
    username: "Davis Brown",
    points: 2352,
  },
  {
    __typename: "Player",
    id: "clkldv38blrgr0bw3c74ahshu",
    user: null,
    placement: 5,
    avatar: {
      __typename: "Asset",
      id: "clkk5xdqkdezm0atale4yv9qn",
      url: "https://media.graphassets.com/elq2329RPrHDRDeWjjRg",
    },
    username: "Donna Johnson",
    points: 2257,
  },
  {
    __typename: "Player",
    id: "clkldwb3vlknj0aw4y5pkfole",
    user: null,
    placement: 6,
    avatar: {
      __typename: "Asset",
      id: "clkk5xdr7do4q0bw3vz6ys4ve",
      url: "https://media.graphassets.com/Wwsxir4aTCukQqOFVWoL",
    },
    username: "Sharon Williams",
    points: 2144,
  },
  {
    __typename: "Player",
    id: "clkldy2s2lrsk0bw37z4y1dnx",
    user: null,
    placement: 7,
    avatar: {
      __typename: "Asset",
      id: "clkk5xdqxdezq0atanc3o8tqq",
      url: "https://media.graphassets.com/3SOlp3ZRpSugp1FbAghA",
    },
    username: "John Doe",
    points: 2015,
  },
  {
    __typename: "Player",
    id: "clkle0jtnll3n0aw4ybb0t1oh",
    user: null,
    placement: 8,
    avatar: {
      __typename: "Asset",
      id: "clkldh3ea1ljp0buxyyhzcilf",
      url: "https://media.graphassets.com/fq0Rw3gERFWbU0k1REMD",
    },
    username: "John",
    points: 1873,
  },
  {
    __typename: "Player",
    id: "clkle1bh21vn60bw2utgfzk54",
    user: null,
    placement: 9,
    avatar: {
      __typename: "Asset",
      id: "clkldg4ma1lhc0buxuv9ucewi",
      url: "https://media.graphassets.com/wClOEZaQuqiw1UHBBUyw",
    },
    username: "Brad",
    points: 1723,
  },
];

export const PlayersList = {
  args: {
    userId,
    players,
  },
  render: (args) => <Players userId={args.userId} players={args.players} />,
};
