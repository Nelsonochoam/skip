import React from 'react'

import styled from 'styled-components/native'

import Colors from '../constants/colors'

const Container = styled.View`
    padding-top: 30px;
    border-bottom: ${Colors.lightGrey};
    border-bottom-width: 1px;
    background-coolor: ${Colors.white};
    box-shadow: 1px 1px 1px ${Colors.midGrey};
`

const PostCodeInput = styled.TextInput`
    height: 40px;
    padding: 10px;
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