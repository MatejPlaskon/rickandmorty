import { useBreakpointValue } from '@chakra-ui/react'

export const useMobileDevice = () => {
	const isMobile = useBreakpointValue({ base: true, md: false }, { fallback: 'md' })

	return { isMobile }
}
