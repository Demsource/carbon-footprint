import { Avatar, AvatarBadge, Box, Flex } from "@chakra-ui/react";
import { disableSelectionStyles } from "../utils/styles_chakraUI";
import { useUserAvatar } from "../AppContext";

const Header = () => {
  const userAvatarData = useUserAvatar();

  return (
    <Flex
      align="center"
      justifyContent="flex-end"
      bg="linear-gradient(90deg, #1A3847 0%, #008080 100%);"
      borderBottom="1px solid #B2D2D8"
      h="64px"
    >
      <Flex
        position="relative"
        align="center"
        justify="center"
        h="44px"
        w="44px"
        mr="23px"
      >
        <Box
          position="absolute"
          bg="white"
          opacity=".15"
          borderRadius="100px"
          h="100%"
          w="100%"
          top="0"
          left="0"
          zIndex="0"
        ></Box>
        <Avatar
          src={userAvatarData?.user?.image?.url}
          w="24px"
          h="24px"
          zIndex="1"
          draggable={false}
          sx={disableSelectionStyles}
        >
          <AvatarBadge
            bg="#F40431"
            placement="top-end"
            boxSize="18px"
            borderColor="transparent"
            fontFamily="sidebar"
            fontSize="9px"
            draggable={false}
            sx={disableSelectionStyles}
          >
            5
          </AvatarBadge>
        </Avatar>
      </Flex>
    </Flex>
  );
};

export default Header;
