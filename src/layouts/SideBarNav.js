import { Box, Flex, List, ListItem, Spacer, Text } from "@chakra-ui/react";
import getIcon from "../utils/getIcon";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideBarNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  const activePage = pathname
    .split("-")
    .map((word) => {
      if (!word) return "Dashboard";
      const titleCased = word[0].toUpperCase() + word.slice(1);
      return titleCased;
    })
    .join(" ");

  return (
    <List>
      {["Dashboard", "Leaderboard", "Tips", "Your Progress", "Donations"].map(
        (item) => (
          <ListItem
            key={item}
            display="flex"
            alignItems="center"
            bg={activePage === item && "#DBF0EE"}
            fontFamily="sidebar"
            border="2px solid #F8FCFC"
            borderRadius="10px"
            h="50px"
            p="16px"
            onClick={() => {
              if (activePage !== item && item !== "Donations") {
                if (item === "Dashboard") {
                  navigate("/");
                  return;
                }
                navigate(item.replace(" ", "-").toLowerCase());
              }
            }}
            _hover={{
              cursor:
                activePage !== item && item !== "Donations"
                  ? "pointer"
                  : "default",
              border:
                activePage !== item &&
                item !== "Donations" &&
                "2px solid #DBF0EE",
            }}
          >
            <Flex align="center" w="100%">
              {getIcon(item, activePage === item ? "#0D776E" : "#4D5150", {
                height: "16px",
              })}
              <Text
                color={activePage === item ? "#0D776E" : "#4D5150"}
                fontWeight="bold"
                ml="16px"
              >
                {item}
              </Text>
              {item === "Donations" && (
                <>
                  <Spacer />
                  <Box
                    color="#E7A41D"
                    fontFamily="sidebar"
                    fontSize="10px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    lineHeight="12px"
                    border="1px solid #E7A41D"
                    borderRadius="20px"
                    p="4px 8px"
                  >
                    Soon
                  </Box>
                </>
              )}
            </Flex>
          </ListItem>
        )
      )}
    </List>
  );
};

export default SideBarNav;
