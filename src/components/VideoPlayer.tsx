import { AspectRatio, Center } from "@chakra-ui/react";

type Props = {
  season: number;
  episode: number;
};

export const VideoPlayer = ({ season, episode }: Props) => {
  return (
    <Center w={"full"} h={"full"}>
      <AspectRatio w={"90%"} maxW={"100%"} ratio={16 / 9} maxH={"600px"}>
        <iframe
          src={`https://vidsrc.to/embed/tv/tt2861424/${season}/${episode}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width={"100%"}
          height={"100%"}
        />
      </AspectRatio>
    </Center>
  );
};
