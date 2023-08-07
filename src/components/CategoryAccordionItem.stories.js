import { Accordion, Box, Heading } from "@chakra-ui/react";
import CategoryAccordionItem from "./CategoryAccordionItem";

export default {
  title: "Progress/Set Goal/Category Accordion",
  component: CategoryAccordionItem,
  tags: ["autodocs"],
};

export const AccordionItem_Housing = {
  args: {
    categoryName: "Housing",
  },
  render: (args) => (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <Accordion
          allowToggle
          defaultIndex={[0]}
          fontSize="20px"
          mt="30px"
          mr="10px"
        >
          <Heading
            as="h3"
            fontFamily="inter"
            fontSize="24px"
            mt="36px"
            ml="10px"
          >
            Carbon footprint to reduce
          </Heading>
          <CategoryAccordionItem categoryName={args.categoryName} />
        </Accordion>
      </Box>
    </Box>
  ),
};

export const AccordionItem_Nutrition = {
  args: {
    categoryName: "Nutrition",
  },
  render: (args) => (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <Accordion
          allowToggle
          defaultIndex={[0]}
          fontSize="20px"
          mt="30px"
          mr="10px"
        >
          <Heading
            as="h3"
            fontFamily="inter"
            fontSize="24px"
            mt="36px"
            ml="10px"
          >
            Carbon footprint to reduce
          </Heading>
          <CategoryAccordionItem categoryName={args.categoryName} />
        </Accordion>
      </Box>
    </Box>
  ),
};

export const AccordionItem_Purchases = {
  args: {
    categoryName: "Housing",
  },
  render: (args) => (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <Accordion
          allowToggle
          defaultIndex={[0]}
          fontSize="20px"
          mt="30px"
          mr="10px"
        >
          <Heading
            as="h3"
            fontFamily="inter"
            fontSize="24px"
            mt="36px"
            ml="10px"
          >
            Carbon footprint to reduce
          </Heading>
          <CategoryAccordionItem categoryName={args.categoryName} />
        </Accordion>
      </Box>
    </Box>
  ),
};

export const AccordionItem_Travel = {
  args: {
    categoryName: "Nutrition",
  },
  render: (args) => (
    <Box>
      <Heading fontFamily="inter" fontSize="25px">
        Set your goal
      </Heading>
      <Box>
        <Accordion
          allowToggle
          defaultIndex={[0]}
          fontSize="20px"
          mt="30px"
          mr="10px"
        >
          <Heading
            as="h3"
            fontFamily="inter"
            fontSize="24px"
            mt="36px"
            ml="10px"
          >
            Carbon footprint to reduce
          </Heading>
          <CategoryAccordionItem categoryName={args.categoryName} />
        </Accordion>
      </Box>
    </Box>
  ),
};
