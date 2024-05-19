import { VideoPlayer } from "../../components/VideoPlayer";
import { SEASONS } from "../../modules/episodes";
import { useCallback, useEffect, useState } from "react";
import { Center, Heading, HStack, Icon, IconButton } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { EpisodeTitle } from "../episodes/EpisodeTitle";

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomEpisode = () => {
  const numOfSeasons = SEASONS.length;
  const randomSeason = getRandomNumber(numOfSeasons);

  const numOfEpisodes = SEASONS[randomSeason - 1].episodes.length;
  const randomEpisode = getRandomNumber(numOfEpisodes);

  return { season: randomSeason, episode: randomEpisode };
};

export const Random = () => {
  const [data, setData] = useState({ season: 1, episode: 1 });
  const [isLoading, setIsLoading] = useState(false);

  const getEpisodeData = useCallback(() => {
    const { season, episode } = getRandomEpisode();
    setData({ season, episode });
  }, [setData, getRandomEpisode]);

  const refreshEpisode = () => {
    setIsLoading(true);
    getEpisodeData();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getEpisodeData();
  }, [getEpisodeData]);

  return (
    <Center w={"full"} h={"full"} p={4} flexDirection={"column"}>
      <HStack mb={2}>
        <Heading color={"yellow.500"}>Watch Random Episode</Heading>
        <IconButton
          aria-label={"Random episode"}
          icon={<Icon as={MdRefresh} fontSize={"40px"} />}
          onClick={refreshEpisode}
          rounded={"full"}
          bgColor={"black"}
          _hover={{ bgColor: "yellow.100" }}
          color={"yellow.500"}
          isLoading={isLoading}
        />
      </HStack>
      <EpisodeTitle episode={data.episode} season={data.season} />
      <VideoPlayer season={data.season} episode={data.episode} />
    </Center>
  );
};
