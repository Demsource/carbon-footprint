import PropTypes from "prop-types";
import { Box, GridItem, Heading, Image } from "@chakra-ui/react";
import getIcon from "../utils/getIcon";

const TipsCard = ({ image, heading, subHeading, handleExpand }) => {
  return (
    <GridItem
      pos="relative"
      colSpan={{ base: 2, lg: 1 }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      border="2px solid #D9D9D9"
      borderRadius="8px"
      h={{ base: "250", lg: "350px" }}
      p="30px"
      _hover={{ cursor: "pointer", borderColor: "brand.900" }}
      title="Expand"
      onClick={() => {
        handleExpand();
      }}
    >
      <Image src={image} h={{ base: "50px", md: "80px", lg: "120px" }} />
      <Heading
        color="brand.900"
        fontSize={{ base: "16px", xl: "18px" }}
        textAlign="center"
        mt="25px"
      >
        {heading}
      </Heading>
      <Heading
        as="h3"
        color="#949494"
        fontFamily="main"
        fontSize={{ base: "16px", xl: "18px" }}
        textAlign="center"
        mt="38px"
      >
        {subHeading}
      </Heading>
      <Box pos="absolute" right="20px" bottom="20px">
        {getIcon("Expand", "#1A3847", { width: "24px" })}
      </Box>
    </GridItem>
  );
};

export default TipsCard;

TipsCard.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  handleExpand: PropTypes.func,
};

TipsCard.defaultProps = {};
