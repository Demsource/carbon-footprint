import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../layouts/SideBar";
import Header from "../layouts/Header";
import { scrollBarStyles } from "../utils/styles_chakraUI";

const Root = ({ children }) => {
  return (
    <Flex h="100vh">
      <SideBar />
      <Box width="calc(100% - 300px)">
        <Header />
        <Box
          as="main"
          h="100%"
          p="15px"
          pb="100px"
          overflowY="auto"
          sx={scrollBarStyles}
        >
          {children ? children : <Outlet />}
        </Box>
      </Box>
    </Flex>
  );
};

export default Root;
