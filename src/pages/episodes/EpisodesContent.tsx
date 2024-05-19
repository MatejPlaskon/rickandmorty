import { Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { episodesSelectors, SEASONS } from "../../modules/episodes";
import { VideoPlayer } from "../../components/VideoPlayer";
import { EpisodeTitle } from "./EpisodeTitle";

export const EpisodesContent = () => {
  const { selectedSeason, selectedEpisode } = useSelector(
    episodesSelectors.getSelectedEpisodeAndSeason
  );

  const episodeTitle = SEASONS.find((s) => s.season === selectedSeason)
    ?.episodes[selectedEpisode - 1];

  const title = `S${selectedSeason}E${selectedEpisode}: ${episodeTitle}`;

  return (
    <Stack w={"full"} h={"full"} alignItems={"center"}>
      <EpisodeTitle episode={selectedEpisode} season={selectedSeason} />
      <VideoPlayer season={selectedSeason} episode={selectedEpisode} />
    </Stack>
  );
};
