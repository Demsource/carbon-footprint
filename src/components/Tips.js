import PropTypes from "prop-types";
import { List, ListItem, Text } from "@chakra-ui/react";
import { scrollBarStyles } from "../utils/styles_chakraUI";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

const Tips = ({ loading, error, data = [], tipsBar }) => {
  error && console.log(error);

  return (
    <List
      bg={tipsBar && "white"}
      border={tipsBar && "2px solid #D9D9D9"}
      borderRadius="6px"
      fontFamily="main"
      h={tipsBar && "calc(100% - 53px)"}
      p="8px"
      mt={!tipsBar && "40px"}
      overflowY="auto"
      sx={scrollBarStyles}
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage
          messageText="Tips did not received"
          height="calc(100% - 59px)"
        />
      ) : data?.length ? (
        data.map((tip, i) => (
          <ListItem
            key={i}
            display="flex"
            color="#1C1B1F"
            fontSize={
              tipsBar
                ? { base: "14px", "2xl": "18px" }
                : { base: "14px", lg: "20px" }
            }
            lineHeight="20px"
            borderBottom={
              tipsBar && i !== data.length - 1 && "2px solid #949494"
            }
            borderColor="brand.200"
            pb="12px"
            mt="12px"
          >
            <Text color="brand.500" mr="6px">
              ■
            </Text>
            {tip ? (
              <Text>{tip}</Text>
            ) : (
              <ErrorMessage
                messageText="Tip could not be displayed"
                height="calc(100% - 59px)"
              />
            )}
          </ListItem>
        ))
      ) : (
        <ErrorMessage
          messageText="No tips to display"
          height="calc(100% - 59px)"
        />
      )}
    </List>
  );
};

export default Tips;

Tips.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  tipsBar: PropTypes.bool,
};

Tips.defaultProps = {};
