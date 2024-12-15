import VideoPlayer from "../../components/VideoPlayer";
import { SEASONS } from "../../modules/episodes";
import { useCallback, useEffect, useState } from "react";
import { Heading, HStack, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { MdRefresh } from "react-icons/md";
import { EpisodeTitle } from "../episodes/EpisodeTitle";
import PageLayout from "../../layouts/PageLayout";

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

const Random = () => {
  const [data, setData] = useState({ season: 1, episode: 1 });
  const [isLoading, setIsLoading] = useState(false);

  const getEpisodeData = useCallback(() => {
    const { season, episode } = getRandomEpisode();
    setData({ season, episode });
  }, [setData]);

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
    <PageLayout
      header={
        <HStack alignItems={"center"} w={"full"} wrap={"wrap"}>
          <Tooltip label={"Select another episode"}>
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
          </Tooltip>
          <Heading color={"blue.500"} mr={2}>
            Random Episode
          </Heading>
          <EpisodeTitle episode={data.episode} season={data.season} />
        </HStack>
      }
    >
      <VideoPlayer season={data.season} episode={data.episode} />
    </PageLayout>
  );
};

export default Random;
