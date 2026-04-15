import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import TopNav from "./TopNav"

type Props = {
	children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
	return (
		<Box h={"full"} w={"full"} overflow={"hidden"} position={"relative"} zIndex={1}>
			<TopNav />
			<Box h={"calc(100vh - 56px)"} overflow={"auto"}>
				{children}
			</Box>
		</Box>
	)
}
