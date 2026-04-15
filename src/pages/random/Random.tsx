import VideoPlayer from "../../components/VideoPlayer"
import { SEASONS } from "../../modules/episodes"
import { useCallback, useEffect, useState } from "react"
import { Box, Heading, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { MdRefresh } from "react-icons/md"

const getRandomNumber = (max: number) => {
	return Math.floor(Math.random() * max) + 1
}

const getRandomEpisode = () => {
	const numOfSeasons = SEASONS.length
	const randomSeason = getRandomNumber(numOfSeasons)

	const numOfEpisodes = SEASONS[randomSeason - 1].episodes.length
	const randomEpisode = getRandomNumber(numOfEpisodes)

	return { season: randomSeason, episode: randomEpisode }
}

const Random = () => {
	const [data, setData] = useState({ season: 1, episode: 1 })
	const [isLoading, setIsLoading] = useState(false)

	const getEpisodeData = useCallback(() => {
		const { season, episode } = getRandomEpisode()
		setData({ season, episode })
	}, [setData])

	const refreshEpisode = () => {
		setIsLoading(true)
		getEpisodeData()
		setTimeout(() => {
			setIsLoading(false)
		}, 500)
	}

	useEffect(() => {
		getEpisodeData()
	}, [getEpisodeData])

	const episodeTitle = SEASONS.find((s) => s.season === data.season)?.episodes[data.episode - 1]

	return (
		<Box w={"full"} h={"full"} overflow={"auto"} px={{ base: 4, md: 8 }} py={4}>
			<VideoPlayer season={data.season} episode={data.episode} />

			<HStack mt={4} mb={2} spacing={4} align={"center"} wrap={"wrap"}>
				<Tooltip label={"Select another episode"}>
					<IconButton
						aria-label={"Random episode"}
						icon={<Icon as={MdRefresh} fontSize={"28px"} />}
						onClick={refreshEpisode}
						rounded={"full"}
						size={"lg"}
						bg={"rgba(76, 175, 80, 0.1)"}
						border={"1px solid rgba(76, 175, 80, 0.2)"}
						_hover={{
							bg: "rgba(76, 175, 80, 0.18)",
							transform: "rotate(90deg)",
						}}
						color={"portal.green"}
						isLoading={isLoading}
						transition={"all 400ms"}
					/>
				</Tooltip>
				<Box>
					<Heading
						size={{ base: "md", md: "lg" }}
						color={"portal.greenLight"}
					>
						{`S${data.season}E${data.episode}: ${episodeTitle}`}
					</Heading>
					<Text color={"rgba(165, 214, 167, 0.3)"} fontSize={"sm"} mt={1}>
						Random Episode
					</Text>
				</Box>
			</HStack>
		</Box>
	)
}

export default Random
