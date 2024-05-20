import { useSelector } from "react-redux";
import { episodesSelectors } from "../../modules/episodes";
import { VideoPlayer } from "../../components/VideoPlayer";
import { EpisodeTitle } from "./EpisodeTitle";

import { PageLayout } from "../../layouts/PageLayout";

export const EpisodesContent = () => {
  const { selectedSeason, selectedEpisode } = useSelector(
    episodesSelectors.getSelectedEpisodeAndSeason
  );

  return (
    <PageLayout
      header={
        <EpisodeTitle episode={selectedEpisode} season={selectedSeason} />
      }
    >
      <VideoPlayer season={selectedSeason} episode={selectedEpisode} />
    </PageLayout>
  );
};
