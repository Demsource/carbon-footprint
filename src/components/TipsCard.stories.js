import { Grid } from "@chakra-ui/react";
import TipsCard from "./TipsCard";

export default {
  title: "Tips/Tips Cards",
  component: TipsCard,
  tags: ["autodocs"],
};

export const HousingTipsCard = {
  args: {
    image: "/images/home.png",
    heading: "Emissions from Housing",
    subHeading: "Tips to reduce housing-related carbon output",
    handleExpand: () => {},
  },
  render: (args) => (
    <Grid>
      <TipsCard
        image={args.image}
        heading={args.heading}
        subHeading={args.subHeading}
        handleExpand={args.handleExpand}
      />
    </Grid>
  ),
};

export const NutritionTipsCard = {
  args: {
    image: "/images/diet.png",
    heading: "Carbon emissions from Food",
    subHeading: "Tips to reduce food emissions",
    handleExpand: () => {},
  },
  render: (args) => (
    <Grid>
      <TipsCard
        image={args.image}
        heading={args.heading}
        subHeading={args.subHeading}
        handleExpand={args.handleExpand}
      />
    </Grid>
  ),
};

export const PurchasesTipsCard = {
  args: {
    image: "/images/shopping-cart.png",
    heading: "Emissions from Consumer Goods",
    subHeading: "Tips for sustainable product emissions",
    handleExpand: () => {},
  },
  render: (args) => (
    <Grid>
      <TipsCard
        image={args.image}
        heading={args.heading}
        subHeading={args.subHeading}
        handleExpand={args.handleExpand}
      />
    </Grid>
  ),
};

export const TravelTipsCard = {
  args: {
    image: "/images/vehicle.png",
    heading: "Carbon Emissions from Commuting",
    subHeading: "Tips to reduce your travel emission",
    handleExpand: () => {},
  },
  render: (args) => (
    <Grid>
      <TipsCard
        image={args.image}
        heading={args.heading}
        subHeading={args.subHeading}
        handleExpand={args.handleExpand}
      />
    </Grid>
  ),
};
