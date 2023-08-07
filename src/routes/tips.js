import { useQuery } from "@apollo/client";
import { GET_TIPS_TIPS_PAGE } from "../utils/gqlQueries";
import { processTipsPageGQLData } from "../utils/processGQLData";
import { useState } from "react";
import { Grid, Heading } from "@chakra-ui/react";
import TipsCard from "../components/TipsCard";
import ExtendedTips from "../components/ExtendedTips";

const Tips = ({ extendedTips = null }) => {
  const { loading, error, data } = useQuery(GET_TIPS_TIPS_PAGE);
  const tips = processTipsPageGQLData(data?.tips);

  const [activeCategory, setActiveCategory] = useState(extendedTips);

  const tipsCategoryData = {
    Housing: {
      category: "Housing",
      image: "/carbon-footprint/images/home.png",
      heading: "Emissions from Housing",
      subHeading: "Tips to reduce housing-related carbon output",
      data: tips.Housing,
    },
    Nutrition: {
      category: "Nutrition",
      image: "/carbon-footprint/images/diet.png",
      heading: "Carbon emissions from Food",
      subHeading: "Tips to reduce food emissions",
      data: tips.Nutrition,
    },
    Purchases: {
      category: "Purchases",
      image: "/carbon-footprint/images/shopping-cart.png",
      heading: "Emissions from Consumer Goods",
      subHeading: "Tips for sustainable product emissions",
      data: tips.Purchases,
    },
    Travel: {
      category: "Travel",
      image: "/carbon-footprint/images/vehicle.png",
      heading: "Carbon Emissions from Commuting",
      subHeading: "Tips to reduce your travel emission",
      data: tips.Travel,
    },
  };

  const extendTips = (category) => {
    setActiveCategory(category);
  };

  const minimizeTips = () => {
    setActiveCategory(null);
  };

  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "14px", md: "16px", xl: "20px" }}
        textAlign="center"
        lineHeight="21.5px"
        p="30px 10%"
      >
        {!activeCategory
          ? "Embrace a Sustainable Lifestyle: Tips for Reducing Your Carbon Footprint"
          : tipsCategoryData[activeCategory].subHeading}
      </Heading>
      {!activeCategory ? (
        <Grid templateColumns="repeat(2, 1fr)" gap="32px">
          {[
            tipsCategoryData.Housing,
            tipsCategoryData.Nutrition,
            tipsCategoryData.Purchases,
            tipsCategoryData.Travel,
          ].map((category) => (
            <TipsCard
              key={category.category}
              image={category.image}
              heading={category.heading}
              subHeading={category.subHeading}
              handleExpand={() => {
                extendTips(category.category);
              }}
            />
          ))}
        </Grid>
      ) : (
        <ExtendedTips
          loading={loading}
          error={error}
          data={tipsCategoryData[activeCategory]}
          handleClose={minimizeTips}
        />
      )}
    </>
  );
};

export default Tips;
