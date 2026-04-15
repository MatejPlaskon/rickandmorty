import { AspectRatio, Box, Center } from "@chakra-ui/react"
import { memo } from "react"

type Props = {
	season: number
	episode: number
}

const VideoPlayer = ({ season, episode }: Props) => {
	return (
		<Center>
			<Box
				w={"full"}
				maxH={"calc(100vh - 150px)"}
				borderRadius={"12px"}
				overflow={"hidden"}
				border={"1px solid rgba(76, 175, 80, 0.1)"}
			>
				<AspectRatio ratio={16 / 9}>
					<iframe
						src={`https://vsembed.su/embed/tv/tt2861424/${season}/${episode}`}
						allowFullScreen
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						width={"100%"}
					/>
				</AspectRatio>
			</Box>
		</Center>
	)
}

export default memo(VideoPlayer)
