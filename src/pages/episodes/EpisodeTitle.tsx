import { Heading } from "@chakra-ui/react";
import { SEASONS } from "../../modules/episodes";

type Props = {
  season: number;
  episode: number;
};

export const EpisodeTitle = ({ season, episode }: Props) => {
  const episodeTitle = SEASONS.find((s) => s.season === season)?.episodes[
    episode - 1
  ];

  const title = `S${season}E${episode}: ${episodeTitle}`;

  return <Heading color={"yellow.500"}>{title}</Heading>;
};
