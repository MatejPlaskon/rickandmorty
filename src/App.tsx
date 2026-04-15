import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Routes } from "./Routes"
import "./App.css"

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	colors: {
		space: {
			900: "#0a0f0a",
			800: "#111a11",
			700: "#1a261a",
		},
		portal: {
			green: "#66bb6a",
			greenLight: "#a5d6a7",
			greenDim: "rgba(102, 187, 106, 0.25)",
		},
	},
	styles: {
		global: {
			body: {
				bg: "space.900",
				color: "white",
			},
		},
	},
	components: {
		Modal: {
			baseStyle: {
				dialog: {
					bg: "space.800",
					borderColor: "portal.green",
				},
				overlay: {
					bg: "rgba(10, 15, 10, 0.8)",
				},
			},
		},
		Tooltip: {
			baseStyle: {
				bg: "space.700",
				color: "portal.greenLight",
			},
		},
	},
})

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Routes />
		</ChakraProvider>
	)
}

export default App
