import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Tips from "./Tips";
import getIcon from "../utils/getIcon";

export default {
  title: "Tips/Tips",
  component: Tips,
  tags: ["autodocs"],
};

const tipsBarTips = [
  "Do an energy audit of your home. This will show how you use or waste energy and help identify ways to be more energy efficient.",
  "Buy foodstuffs in bulk when possible using your own reusable container.",
  "Walk, take public transportation, carpool, ride-share or bike to your destination when possible.",
];

const housingTips = [
  "Make sure your house is properly insulated. Insulation helps to keep heat or cold in and the better insulated it is the less you will need to heat or cool your house.",
  "Do an energy audit of your house. You may be wasting energy in ways you don’t notice. Hiring a professional to perform a home energy audit can identify how to make your home more efficient.",
  "Turn off the lights and unplug appliances when not in use. Modern appliances in stand-by mode draw small amounts of power all the time.",
  "Turn down the water heater to 120˚F. Most people find that when they turn down their water heater to 120˚F, they don’t notice the difference when taking a shower or bath.",
  "Insulate your home. Windows are one of the biggest areas for letting warmth out in the winter and bringing in unwanted heat in the summer.",
  "Use a low-flow shower head. Getting water to your home and heating the water both use fossil fuels. Reducing your water usage could help reduce your carbon footprint.",
  "Do an energy audit of your home. This will show how you use or waste energy and help identify ways to be more energy efficient.",
];

const nutritionTips = [
  "Choose organic and local food stuff that are in season. It will take less to transport it for processing, storage and distributing it to markets.",
  "Reduce your food wastage. Buying more food than you need and throwing it away wastes the food item itself, along with all the resources used to get it to you.",
  "Eat less meat and stick with fruits, veggies and greens. It is one of the delicious and healthy ways to reduce your carbon footprint is to switch to high-protein vegetables and cereal grains for some of your meals.",
  "Use reusable cups, plates, utensils, bottles and containers. Disposable utensils used once and tossed after a meal are a tremendous waste of resources and contribute to your carbon footprint.",
  "It is predicted that water, not fuel, will be our scarcest commodity in the not-to-distant future. So, don't let the sink faucet run.",
  "Think about what you need before you open the refrigerator or freezer, to limit how long the doors stay open. Cover the pot to heat food more quickly or use a pressure cooker.",
  "Buy foodstuffs in bulk when possible using your own reusable container.",
];

const purchasesTips = [
  "Buy what you need. it is easy to fall into the habit of buying things on a whim that you may end up not really needing.",
  "Try and bring a reusable bag. Reusable bags are an easy way to eliminate this waste.",
  "Try and invest in quality products. Buying cheap items might seem like a way to economize but you may end up having to replace these items often as they break and wear out.",
  "Buy vintage or recycled clothing. In addition to donating used clothing and furnishings, you can help by participating on the other side of the transaction. Buy things people are donating and recycling.",
  "Try support and buy from companies that are environmentally responsible and sustainable. Companies that are sourcing materials and manufacturing products in an energy-efficient way help reduce carbon footprint.",
  "Don’t buy fast fashion. Fast fashion is inexpensive clothing items that follow the latest trends. Fast fashion uses more water and energy for manufacturing and shipping.",
];

const travelTips = [
  "Try sharing a ride to work every day or when going shopping. That can reduce your carbon footprint by about 2000 pounds of CO2e every year.",
  "Low tire pressure increases fuel consumption and CO2 emissions. Check your tire pressures in line with manufacture’s recommendations or at least once a month.",
  "Limit the amount of time you spend idling by warming your engine and cabin on the go. With concerns about air quality and the environment you should avoid idling even when in stationary traffic.",
  "You have seen the more expensive fuels alongside regular diesel and unleaded, often labeled as 'premium', 'super' or 'ultimate'. These types of fuels contain active cleaning agents to remove dirt from the engine, which should improve fuel efficiency and reduce emissions.",
  "The engine oil is the lifeblood of your vehicle. It must be changed at regular intervals to keep your car running at optimum efficiency. Check your vehicle's handbook for the recommended service intervals.",
  "Cutting down on the miles you drive is one of the best things you can do for reducing carbon emissions. Walk or bike when distances are shorter, and use public transportation as much as possible.",
  "Walk, take public transportation, carpool, ride-share or bike to your destination when possible.",
];

export const TipsBar = {
  args: {
    data: tipsBarTips,
    tipsBar: true,
  },
  render: (args) => (
    <Box
      bg="#F4F4F4"
      border="2px solid #D9D9D9"
      borderRadius="10px"
      height={["200px", "300px", "", "400px"]}
      p="8px"
      _hover={{ cursor: "default" }}
    >
      <Flex
        position="relative"
        bg="white"
        align="center"
        justify="center"
        border="2px solid #D9D9D9"
        borderRadius="6px"
        h="43px"
        mb="10px"
        overflow="hidden"
      >
        <Heading
          color="brand.900"
          fontFamily="heading"
          fontSize="16px"
          fontWeight="bold"
          lineHeight="27.5px"
        >
          Tips to Improve
        </Heading>
        <Box
          position="absolute"
          bg="brand.500"
          h="24px"
          w="24px"
          top="-12px"
          left="-12px"
          transform="rotate(45deg)"
        ></Box>
      </Flex>
      <Tips data={args.data} tipsBar={args.tipsBar} />
    </Box>
  ),
};

export const HousingTips = {
  args: {
    data: housingTips,
  },
  render: (args) => (
    <Box
      pos="relative"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      minH="calc(100% - 100px)"
      w="100%"
      px="30px"
    >
      <Flex flexDir="column" align="center">
        <Box>
          <Image
            src="/images/home.png"
            h={{ base: "40px", md: "60px", lg: "80px" }}
            mt="12px"
          />
        </Box>
        <Heading
          color="brand.900"
          fontSize={{ base: "16px", xl: "18px" }}
          textAlign="center"
          mt="17px"
        >
          Emissions from Housing
        </Heading>
      </Flex>
      <Tips data={args.data} />
      <Box
        pos="absolute"
        right="20px"
        top="20px"
        _hover={{ cursor: "pointer", borderColor: "brand.900" }}
        title="Close (Esc)"
      >
        {getIcon("Close", "#1A3847", { width: "24px" })}
      </Box>
    </Box>
  ),
};

export const NutritionTips = {
  args: {
    data: nutritionTips,
  },
  render: (args) => (
    <Box
      pos="relative"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      minH="calc(100% - 100px)"
      w="100%"
      px="30px"
    >
      <Flex flexDir="column" align="center">
        <Box>
          <Image
            src="/images/diet.png"
            h={{ base: "40px", md: "60px", lg: "80px" }}
            mt="12px"
          />
        </Box>
        <Heading
          color="brand.900"
          fontSize={{ base: "16px", xl: "18px" }}
          textAlign="center"
          mt="17px"
        >
          Carbon emissions from Food
        </Heading>
      </Flex>
      <Tips data={args.data} />
      <Box
        pos="absolute"
        right="20px"
        top="20px"
        _hover={{ cursor: "pointer", borderColor: "brand.900" }}
        title="Close (Esc)"
      >
        {getIcon("Close", "#1A3847", { width: "24px" })}
      </Box>
    </Box>
  ),
};

export const PurchasesTips = {
  args: {
    data: purchasesTips,
  },
  render: (args) => (
    <Box
      pos="relative"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      minH="calc(100% - 100px)"
      w="100%"
      px="30px"
    >
      <Flex flexDir="column" align="center">
        <Box>
          <Image
            src="/images/shopping-cart.png"
            h={{ base: "40px", md: "60px", lg: "80px" }}
            mt="12px"
          />
        </Box>
        <Heading
          color="brand.900"
          fontSize={{ base: "16px", xl: "18px" }}
          textAlign="center"
          mt="17px"
        >
          Emissions from Consumer Goods
        </Heading>
      </Flex>
      <Tips data={args.data} />
      <Box
        pos="absolute"
        right="20px"
        top="20px"
        _hover={{ cursor: "pointer", borderColor: "brand.900" }}
        title="Close (Esc)"
      >
        {getIcon("Close", "#1A3847", { width: "24px" })}
      </Box>
    </Box>
  ),
};

export const TravelTips = {
  args: {
    data: travelTips,
  },
  render: (args) => (
    <Box
      pos="relative"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      minH="calc(100% - 100px)"
      w="100%"
      px="30px"
    >
      <Flex flexDir="column" align="center">
        <Box>
          <Image
            src="/images/vehicle.png"
            h={{ base: "40px", md: "60px", lg: "80px" }}
            mt="12px"
          />
        </Box>
        <Heading
          color="brand.900"
          fontSize={{ base: "16px", xl: "18px" }}
          textAlign="center"
          mt="17px"
        >
          Carbon Emissions from Commuting
        </Heading>
      </Flex>
      <Tips data={args.data} />
      <Box
        pos="absolute"
        right="20px"
        top="20px"
        _hover={{ cursor: "pointer", borderColor: "brand.900" }}
        title="Close (Esc)"
      >
        {getIcon("Close", "#1A3847", { width: "24px" })}
      </Box>
    </Box>
  ),
};
