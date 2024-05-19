import { Center, Icon, Stack, Tooltip } from "@chakra-ui/react";
import { MdPlayCircle, MdQuestionMark } from "react-icons/md";
import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

type SidebarItemProps = {
  to: string;
  icon: IconType;
  name: string;
};

const SidebarItem = ({ to, icon, name }: SidebarItemProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  return (
    <Tooltip label={name} placement={"right"}>
      <NavLink to={to}>
        <Center
          borderRadius={10}
          bgColor={isActive ? "yellow.400" : "none"}
          _hover={{ bgColor: "yellow.400" }}
          transition={"colors 400ms"}
          p={2}
          m={3}
          mb={0}
        >
          <Icon as={icon} fontSize={"40px"} color={"white"} />
        </Center>
      </NavLink>
    </Tooltip>
  );
};

const Sidebar = () => {
  return (
    <Stack role={"navigation"} spacing={1}>
      <SidebarItem to={"/episodes"} icon={MdPlayCircle} name={"Episodes"} />
      <SidebarItem to={"/random"} icon={MdQuestionMark} name={"Random"} />
    </Stack>
  );
};

export default Sidebar;
