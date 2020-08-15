import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import Colors from '../../constants/colors'

const Badge = styled.View`
    padding: 2px 5px;
    background-color: ${Colors.skipOrange};
    border-radius: 2px;
    align-self: flex-end;
`

interface IProps {
    avgRating: number
}

export const RatingBadge: React.FC<IProps> = ({ avgRating }) => {
    return (
        <Badge>
            <Text>{avgRating}</Text>
        </Badge>
    )
}