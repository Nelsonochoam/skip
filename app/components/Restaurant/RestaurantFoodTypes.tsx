
import React from 'react'

import _ from 'lodash'
import styled from 'styled-components/native'

import { CuisineType } from '../../api/skip_api'

const Container = styled.View`
    margin: 15px 0;
    flex-direction: row;
`
const Type = styled.View`
    margin-right: 5px;
`

export const Caption = styled.Text`
    font-size: 10px;
`

interface IProps {
    cuisineTypes?: CuisineType[]
}

export const RestaurantFoodTypes: React.FC<IProps> = ({ cuisineTypes = [] }) => {
    return (
        <Container>
            {cuisineTypes.map((cuisine, idx) => <Type key={_.uniqueId(`food_type_${idx}_`)}><Caption >{cuisine?.Name}</Caption></Type>)}
        </Container>
    )
}