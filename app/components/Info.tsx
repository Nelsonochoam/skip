import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

interface IProps {
    info: string
    testLabel: string
}

export const Info: React.FC<IProps> = ({ info, testLabel }) => {
    return (
        <Container accessibilityLabel={testLabel}>
            <Text>{info}</Text>
        </Container>
    )
}