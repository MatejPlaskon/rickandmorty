import { Grid, GridItem, Icon, IconButton, Tooltip } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { useMobileDevice } from '../../hooks/useMobileDevice.tsx'
import { EpisodesModal } from './EpisodesModal.tsx'

type Props = {
	sidebar: ReactNode
	children: ReactNode
}

export const EpisodesLayout = ({ children, sidebar }: Props) => {
	const { isMobile } = useMobileDevice()
	const [openModal, setOpenModal] = useState(false)

	return (
		<>
			<Grid
				gridTemplateColumns={`${!isMobile ? '250px 1fr' : '1fr'}`}
				h={'full'}
				w={'full'}
				overflow={'hidden'}
				transition={'all 400ms'}
			>
				{!isMobile && (
					<GridItem
						bgColor={'black'}
						borderRight={'1px solid'}
						borderColor={'blue.800'}
						px={4}
						h={'full'}
						overflow={'auto'}
					>
						{sidebar}
					</GridItem>
				)}
				<GridItem overflow={'auto'}>{children}</GridItem>
				{isMobile && (
					<IconButton
						icon={<Icon as={MdMenu} />}
						aria-label={'Select episode'}
						position={'fixed'}
						colorScheme={'blue'}
						bottom={'10px'}
						right={'10px'}
						onClick={() => setOpenModal(true)}
					/>
				)}
			</Grid>
			<EpisodesModal isOpen={openModal} onClose={() => setOpenModal(false)} />
		</>
	)
}
