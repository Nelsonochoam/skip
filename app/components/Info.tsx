import React from 'react'
import styled from 'styled-components'
import { View, Text } from 'react-native'

const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

interface IProps {
    info: string
}

export const Info: React.FC<IProps> = ({ info }) => {
    return (
        <Container>
            <Text>{info}</Text>
        </Container>
    )
}