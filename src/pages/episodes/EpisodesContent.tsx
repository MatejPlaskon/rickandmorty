import { AspectRatio, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { episodesSelectors } from "../../modules/episodes";

export const EpisodesContent = () => {
  const { selectedSeason, selectedEpisode } = useSelector(
    episodesSelectors.getSelectedEpisodeAndSeason
  );

  return (
    <Center w={"full"} h={"full"} bgColor={"black"}>
      <AspectRatio w={"90%"} maxW={"100%"} ratio={16 / 9} maxH={"600px"}>
        <iframe
          src={`https://vidsrc.to/embed/tv/tt2861424/${selectedSeason}/${selectedEpisode}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width={"100%"}
          height={"100%"}
        />
      </AspectRatio>
    </Center>
  );
};
