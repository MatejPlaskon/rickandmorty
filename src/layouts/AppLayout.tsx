import { Grid, GridItem, Heading } from "@chakra-ui/react";

export const AppLayout = () => {
  return (
    <Grid gridTemplateRows={"100px 1fr"}>
      <GridItem>
        <Heading>WIP: My page for notes</Heading>
      </GridItem>
      <GridItem>My testing page for notes</GridItem>
    </Grid>
  );
};
