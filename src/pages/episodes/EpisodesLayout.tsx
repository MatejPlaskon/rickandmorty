import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
  children: ReactNode;
};

export const EpisodesLayout = ({ children, sidebar }: Props) => {
  return (
    <Grid gridTemplateColumns={"250px 1fr"} h={"full"} w={"full"}>
      <GridItem bgColor={"black"} borderRight={"1px solid"} px={4}>
        {sidebar}
      </GridItem>
      <GridItem p={4}>{children}</GridItem>
    </Grid>
  );
};
