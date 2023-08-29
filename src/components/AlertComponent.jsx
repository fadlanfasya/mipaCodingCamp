import { Alert, AlertDescription, AlertTitle, Box, CloseButton, useDisclosure } from '@chakra-ui/react';
import React from 'react'

export default function AlertComponent() {
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='error' className="error">
        <Box>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {props.error}
            </AlertDescription>
        </Box>
        <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
        />
    </Alert>
  ) : (<></>)
}
