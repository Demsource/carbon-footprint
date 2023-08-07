import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CategoryAccordionItem = ({
  timing,
  categoryName,
  categoryCFReduceValue,
  saveCategoryCFReduceValue,
  ...rest
}) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const collapseExpandBtnRef = useRef(null);

  useEffect(() => {
    categoryCFReduceValue && setSliderValue(categoryCFReduceValue);
  }, [categoryCFReduceValue]);

  return (
    <AccordionItem border="2px solid #D9D9D9" borderRadius="8px" {...rest}>
      {({ isExpanded }) => (
        <>
          <Heading>
            <AccordionButton
              color="brand.900"
              fontSize="20px"
              fontWeight="bold"
              ref={collapseExpandBtnRef}
            >
              <Heading
                as="h4"
                flex="1"
                fontFamily="inter"
                fontSize="20px"
                textAlign="left"
                p="10px"
              >
                {categoryName}
              </Heading>
              {isExpanded ? (
                <MinusIcon color="brand.900" fontSize="12px" boxSize="15px" />
              ) : (
                <AddIcon color="brand.900" fontSize="12px" boxSize="15px" />
              )}
            </AccordionButton>
          </Heading>
          <AccordionPanel color="brand.900" px="30px" pb="20px">
            <Flex align="center" fontWeight="bold" h="70px" mt="32px">
              <Text fontFamily="Inter" mr="25px">
                0
              </Text>
              <Slider
                defaultValue={sliderValue}
                value={sliderValue}
                min={0}
                max={100}
                step={1}
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack bg="#D9D9D9">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="brand.500" />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="brand.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`${sliderValue}%`}
                >
                  <SliderThumb bg="brand.500" boxSize={6} />
                </Tooltip>
              </Slider>
              <Text fontFamily="Inter" ml="25px">
                100%
              </Text>
            </Flex>
            <Text
              color="brand.900"
              fontFamily="Inter"
              fontWeight="bold"
              textAlign="center"
              mt="-20px"
              mb="30px"
            >
              <Text as="span" fontSize="17px" fontWeight="norm">
                Reduce by
              </Text>{" "}
              {sliderValue}%
            </Text>
            <Button
              colorScheme="brand"
              borderRadius="8px"
              h="50px"
              w="100%"
              onClick={() => {
                saveCategoryCFReduceValue &&
                  saveCategoryCFReduceValue({
                    variables: {
                      user: {
                        id: "clkk8ue3kdzx10ataqxn5zidx",
                      },
                      date: "2023-08-31",
                      timing,
                      data: {
                        [`offsetGoal${categoryName}CF`]: sliderValue,
                      },
                    },
                  });
                collapseExpandBtnRef.current.click();
              }}
            >
              <Text
                as="p"
                color="white"
                fontFamily="inter"
                fontSize="25px"
                fontWeight="bold"
                textAlign="center"
              >
                Save
              </Text>
            </Button>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default CategoryAccordionItem;

CategoryAccordionItem.propTypes = {
  categoryName: PropTypes.string,
};

CategoryAccordionItem.defaultProps = {};
