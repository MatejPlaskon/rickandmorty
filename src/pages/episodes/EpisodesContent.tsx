import { useSelector, useDispatch } from "react-redux"
import { episodesSelectors, setSelectedEpisode, SEASONS } from "../../modules/episodes"
import { LocalStorageData, useLocalStorage } from "../../hooks/useLocalStorage"
import VideoPlayer from "../../components/VideoPlayer"
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { useEffect } from "react"

export const EpisodesContent = () => {
	const dispatch = useDispatch()

	const [storageValue, setStorageValue] = useLocalStorage<{
		season: number
		episode: number
	}>(LocalStorageData.SelectedEpisode)

	useEffect(() => {
		if (storageValue.season && storageValue.episode) {
			const { season, episode } = storageValue
			dispatch(setSelectedEpisode({ season, episode }))
		}
	}, [])

	const { selectedSeason, selectedEpisode } = useSelector(episodesSelectors.getSelectedEpisodeAndSeason)

	const handleSelect = (episode: number, season: number) => {
		dispatch(setSelectedEpisode({ season, episode }))
		setStorageValue({ season, episode })
	}

	const currentEpisodeTitle = SEASONS.find((s) => s.season === selectedSeason)?.episodes[selectedEpisode - 1]

	return (
		<Box>
			{/* Hero Video Player */}
			<VideoPlayer season={selectedSeason} episode={selectedEpisode} />

			{/* Episode Info */}
			<Box mt={4} mb={6}>
				<Heading
					size={{ base: "md", md: "lg" }}
					color={"portal.greenLight"}
				>
					{`S${selectedSeason}E${selectedEpisode}: ${currentEpisodeTitle}`}
				</Heading>
				<Text color={"rgba(165, 214, 167, 0.3)"} fontSize={"sm"} mt={1}>
					{`Season ${selectedSeason} · Episode ${selectedEpisode} of ${SEASONS[selectedSeason - 1].episodes.length}`}
				</Text>
			</Box>

			{/* Season Pills */}
			<HStack spacing={2} mb={4} overflowX={"auto"} pb={2}>
				{SEASONS.map((season) => (
					<Box
						key={season.season}
						as={"button"}
						px={4}
						py={1.5}
						borderRadius={"full"}
						fontSize={"sm"}
						fontWeight={"medium"}
						whiteSpace={"nowrap"}
						bg={selectedSeason === season.season ? "rgba(76, 175, 80, 0.12)" : "rgba(76, 175, 80, 0.03)"}
						color={selectedSeason === season.season ? "portal.greenLight" : "rgba(165, 214, 167, 0.3)"}
						border={"1px solid"}
						borderColor={selectedSeason === season.season ? "rgba(76, 175, 80, 0.25)" : "rgba(76, 175, 80, 0.08)"}
						_hover={{
							bg: "rgba(76, 175, 80, 0.08)",
							color: "portal.greenLight",
						}}
						transition={"all 200ms"}
						onClick={() => handleSelect(1, season.season)}
					>
						{`Season ${season.season}`}
					</Box>
				))}
			</HStack>

			{/* Episode Cards Grid */}
			<Flex
				gap={3}
				flexWrap={"wrap"}
				pb={4}
			>
				{SEASONS[selectedSeason - 1].episodes.map((title, index) => {
					const episodeNum = index + 1
					const isActive = selectedEpisode === episodeNum

					return (
						<Box
							key={index}
							as={"button"}
							w={{ base: "calc(50% - 6px)", sm: "calc(33.333% - 8px)", md: "calc(20% - 10px)", lg: "calc(16.666% - 10px)" }}
							borderRadius={"10px"}
							overflow={"hidden"}
							bg={isActive ? "rgba(76, 175, 80, 0.06)" : "rgba(76, 175, 80, 0.02)"}
							border={"1px solid"}
							borderColor={isActive ? "rgba(76, 175, 80, 0.2)" : "rgba(76, 175, 80, 0.05)"}
							_hover={{
								bg: "rgba(76, 175, 80, 0.06)",
								borderColor: "rgba(76, 175, 80, 0.15)",
								transform: "translateY(-2px)",
							}}
							transition={"all 200ms"}
							onClick={() => handleSelect(episodeNum, selectedSeason)}
							textAlign={"left"}
						>
							{/* Episode Number */}
							<Flex
								h={{ base: "70px", md: "80px" }}
								bg={isActive ? "rgba(76, 175, 80, 0.06)" : "rgba(0, 0, 0, 0.2)"}
								align={"center"}
								justify={"center"}
								position={"relative"}
							>
								<Text
									fontSize={"2xl"}
									fontWeight={"bold"}
									color={isActive ? "portal.green" : "rgba(102, 187, 106, 0.15)"}
								>
									{String(episodeNum).padStart(2, "0")}
								</Text>
								{isActive && (
									<Box
										position={"absolute"}
										top={2}
										right={2}
										w={"6px"}
										h={"6px"}
										borderRadius={"full"}
										bg={"portal.green"}
									/>
								)}
							</Flex>
							{/* Episode Title */}
							<Box p={2.5}>
								<Text
									fontSize={"xs"}
									color={isActive ? "portal.greenLight" : "rgba(165, 214, 167, 0.35)"}
									noOfLines={2}
									lineHeight={"1.3"}
								>
									{title}
								</Text>
							</Box>
						</Box>
					)
				})}
			</Flex>
		</Box>
	)
}
