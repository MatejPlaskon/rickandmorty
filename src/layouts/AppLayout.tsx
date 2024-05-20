import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <Grid gridTemplateColumns={"80px 1fr"} h={"full"} w={"full"}>
      <GridItem
        bgColor={"black"}
        borderRight={"1px solid"}
        borderColor={"blue.800"}
      >
        <Sidebar />
      </GridItem>
      <GridItem w={"full"} h={"full"} bg={"black"}>
        {children}
      </GridItem>
    </Grid>
  );
};
