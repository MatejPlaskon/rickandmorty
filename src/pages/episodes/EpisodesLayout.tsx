import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
  children: ReactNode;
};

export const EpisodesLayout = ({ children, sidebar }: Props) => {
  return (
    <Grid gridTemplateColumns={"250px 1fr"} h={"full"} w={"full"}>
      <GridItem bgColor={"black"}>{sidebar}</GridItem>
      <GridItem>{children}</GridItem>
    </Grid>
  );
};
