import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Fade,
  Flex,
  Heading,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  episodesSelectors,
  setSelectedEpisode,
  setSelectedSeason,
  SEASONS,
} from "../../modules/episodes";

export const EpisodesMenu = () => {
  const dispatch = useDispatch();

  const { selectedSeason, selectedEpisode } = useSelector(
    episodesSelectors.getSelectedEpisodeAndSeason
  );

  const handleClick = (episode: number, season: number) => {
    dispatch(setSelectedSeason(season));
    dispatch(setSelectedEpisode(episode));
  };

  const isSelected = (episode: number, season: number) =>
    selectedSeason === season && selectedEpisode === episode;

  return (
    <Fade in>
      <Stack>
        <Heading size={"sm"} p={2} pt={6} color={"yellow.500"}>
          Choose episode
        </Heading>
        <Accordion borderColor={"yellow.500"} defaultIndex={selectedSeason - 1}>
          {SEASONS.map((season) => (
            <AccordionItem key={season.season}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text
                      color={"yellow.500"}
                    >{`Season ${season.season}`}</Text>
                  </Box>
                  <AccordionIcon color={"yellow.500"} />
                </AccordionButton>
              </h2>
              <AccordionPanel px={0}>
                {season.episodes.map((e, index) => (
                  <Tooltip label={e} key={index} placement={"right"}>
                    <Flex
                      role={"button"}
                      onClick={() => handleClick(index + 1, season.season)}
                      p={1}
                      px={4}
                      borderRadius={5}
                      w={"full"}
                      key={index}
                      bgColor={
                        isSelected(index + 1, season.season)
                          ? "gray.700"
                          : "black"
                      }
                      _hover={{ bgColor: "gray.700" }}
                      color={"yellow.400"}
                      overflow={"hidden"}
                      noOfLines={1}
                    >
                      {`Episode ${index + 1}: ${e}`}
                    </Flex>
                  </Tooltip>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Fade>
  );
};
