import * as React from 'react'

import { StyledButton, Text } from './styles'

export default function CancelButton({onPress}) {
    return (<>
    <StyledButton onPress={onPress}>
        <Text>Cancelar</Text>
    </StyledButton>
    </>)
}