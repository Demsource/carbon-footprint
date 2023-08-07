import { List, ListItem, Text } from "@chakra-ui/react";

const PieChartDescList = ({ data, side }) => {
  return (
    <List
      display={{ base: "grid", md: "flex" }}
      gridTemplateColumns="repeat(2, 1fr)"
      gridGap={1}
      flexDir={{ lg: side ? "column" : "row" }}
      spacing={side && { md: "10px", lg: "50px" }}
      fontFamily="main"
      mt="-20px"
      mb="20px"
      mr={side && { lg: "30px" }}
    >
      {data.map((item, index) => (
        <ListItem
          color={item.color}
          display="flex"
          alignItems="center"
          key={index}
          mr={{ base: 0, md: 6 }}
          sx={{
            ":hover": { color: "brand.900" },
          }}
        >
          {item.icon}
          <Text as="b" ml={2} fontSize={11} cursor="default">
            {item.label}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default PieChartDescList;
