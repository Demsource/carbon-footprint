import { Flex, Text } from "@chakra-ui/react";
import getIcon from "../../utils/getIcon";
import createTooltipData from "./createTooltipData";

const CustomChartTooltip = ({ chartName, dataPoint, offsetChart }) => {
  const { category, color, month, co2e } =
    chartName === "Pie"
      ? createTooltipData(
          dataPoint.id,
          dataPoint.color,
          "none",
          dataPoint.data.co2e
        )
      : chartName === "Line"
      ? createTooltipData(
          dataPoint.serieId,
          dataPoint.serieColor,
          dataPoint.data.x,
          dataPoint.data.y
        )
      : chartName === "Bar"
      ? createTooltipData(
          dataPoint.id,
          dataPoint.color,
          dataPoint.indexValue,
          dataPoint.value
        )
      : {};

  return category && color && month && co2e ? (
    <Flex
      alignItems="center"
      bg="rgba(255, 255, 255, 0.9)"
      borderRadius="10px"
      border="2px solid #8884d8"
      borderColor="brand.200"
      className="custom-tooltip"
      p="10px 20px"
    >
      {category !== "AllCategory" &&
        getIcon(category, color, { height: "12px" })}
      <Text className="desc" color="brand.500" fontSize="sm" textAlign="center">
        {category !== "AllCategory" && (
          <Text as="b" color={color} ml="5px">
            {category}
          </Text>
        )}
        <Text as="b">
          {month && month !== "none"
            ? `${category !== "AllCategory" ? " -" : ""} ${month}`
            : ` - Last ${
                offsetChart?.timing === "Month"
                  ? "Month Offset"
                  : `Year${offsetChart?.timing ? " Offset" : ""}`
              }`}
          :{" "}
        </Text>
        <Text as="b">{co2e} </Text>
        <Text as="b" fontSize="xs">
          CO
          <Text as="b" position="relative" top="0.5" fontSize="0.6rem">
            2
          </Text>
          e
        </Text>
      </Text>
    </Flex>
  ) : (
    <></>
  );
};

export default CustomChartTooltip;
