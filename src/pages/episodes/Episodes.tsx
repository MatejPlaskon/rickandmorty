import { Box } from "@chakra-ui/react"
import { EpisodesContent } from "./EpisodesContent"

const Episodes = () => {
	return (
		<Box w={"full"} h={"full"} overflow={"auto"} px={{ base: 4, md: 8 }} py={4}>
			<EpisodesContent />
		</Box>
	)
}

export default Episodes
