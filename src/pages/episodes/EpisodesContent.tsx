import { Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { episodesSelectors } from "../../modules/episodes";
import { VideoPlayer } from "../../components/VideoPlayer";
import { EpisodeTitle } from "./EpisodeTitle";

export const EpisodesContent = () => {
  const { selectedSeason, selectedEpisode } = useSelector(
    episodesSelectors.getSelectedEpisodeAndSeason
  );

  return (
    <Stack w={"full"} h={"full"} alignItems={"center"}>
      <EpisodeTitle episode={selectedEpisode} season={selectedSeason} />
      <VideoPlayer season={selectedSeason} episode={selectedEpisode} />
    </Stack>
  );
};
