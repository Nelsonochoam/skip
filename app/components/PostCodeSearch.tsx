import React from 'react'
import { TextInput, View } from 'react-native'
import styled from 'styled-components'
import Colors from '../constants/colors'

const Container = styled(View)``

const PostCodeInput = styled(TextInput)`
    height: 40px;
    padding: 10px;
    border-bottom-color: ${Colors.skipOrange};
    border-bottom-width: 2px;
`

interface IProps {
    value: string
    onTextChange(val: string): void
}

export const PostCodeSearch: React.FC<IProps> = ({ value, onTextChange }) => {
    return (
        <Container>
            <PostCodeInput
                placeholder={'Postal code...'}
                onChangeText={onTextChange}
                value={value}
            />
        </Container>
    )
}