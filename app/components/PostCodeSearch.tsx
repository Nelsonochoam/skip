import React from 'react'

import styled from 'styled-components/native'

import TestIDS from '../constants/test_ids'
import Colors from '../constants/colors'

const Container = styled.View`
    padding-top: 30px;
    border-bottom-color: ${Colors.lightGrey};
    border-bottom-width: 1px;
    background-color: ${Colors.white};
`

const PostCodeInput = styled.TextInput`
    text-align: center;
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
                accessibilityLabel={TestIDS.postcode.input}
                placeholder={'Enter postal code'}
                onChangeText={onTextChange}
                value={value}
            />
        </Container>
    )
}