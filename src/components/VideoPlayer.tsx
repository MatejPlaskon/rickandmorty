import { AspectRatio, Center } from "@chakra-ui/react";

type Props = {
  season: number;
  episode: number;
};

export const VideoPlayer = ({ season, episode }: Props) => {
  return (
    <Center>
      <AspectRatio w={"90%"} maxH={"calc(100vh - 150px)"} ratio={16 / 9}>
        <iframe
          src={`https://vidsrc.to/embed/tv/tt2861424/${season}/${episode}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width={"100%"}
        />
      </AspectRatio>
    </Center>
  );
};
