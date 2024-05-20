import { ReactNode } from "react";
import { HStack, Image, Stack } from "@chakra-ui/react";
import logo from "../assets/logo.png";

type Props = {
  children: ReactNode;
  header: ReactNode;
};

export const PageLayout = ({ children, header }: Props) => {
  return (
    <Stack w={"full"} h={"full"} p={4}>
      <HStack w={"full"} spacing={5}>
        <Image src={logo} alt={"logo"} w={200} alignSelf={"flex-start"} />
        {header}
      </HStack>
      {children}
    </Stack>
  );
};
