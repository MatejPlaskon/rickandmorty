import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { EpisodesMenu } from './EpisodesMenu.tsx'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
}

export const EpisodesModal = ({ isOpen, onClose }: ModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent borderRadius={'12px'}>
				<ModalBody>
					<EpisodesMenu onSelect={onClose} />
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
