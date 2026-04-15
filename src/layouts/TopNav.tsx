import { Box, HStack, Image, Text } from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const NavItem = ({ to, label }: { to: string; label: string }) => {
	const { pathname } = useLocation()
	const isActive = pathname === to

	return (
		<NavLink to={to}>
			<Text
				fontSize={"sm"}
				fontWeight={isActive ? "bold" : "normal"}
				color={isActive ? "portal.greenLight" : "rgba(165, 214, 167, 0.4)"}
				borderBottom={isActive ? "2px solid" : "2px solid transparent"}
				borderColor={isActive ? "portal.green" : "transparent"}
				pb={1}
				px={1}
				transition={"all 200ms"}
				_hover={{
					color: "portal.greenLight",
				}}
			>
				{label}
			</Text>
		</NavLink>
	)
}

const TopNav = () => {
	return (
		<Box
			as={"nav"}
			h={"56px"}
			px={6}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"space-between"}
			bg={"rgba(10, 15, 10, 0.6)"}
			borderBottom={"1px solid"}
			borderColor={"rgba(76, 175, 80, 0.12)"}
			backdropFilter={"blur(10px)"}
		>
			<Image
				src={logo}
				alt={"Rick and Morty"}
				h={"36px"}
			/>
			<HStack spacing={6}>
				<NavItem to={"/episodes"} label={"Episodes"} />
				<NavItem to={"/random"} label={"Random"} />
			</HStack>
		</Box>
	)
}

export default TopNav
