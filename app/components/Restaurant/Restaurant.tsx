import React from 'react'

import styled from 'styled-components/native'

import Colors from '../../constants/colors'
import TestIDs from '../../constants/test_ids'
import { Image, Text } from 'react-native'
import { SkipRestaurant } from '../../api/skip_api'
import { RatingBadge } from './RatingBadge'
import { RestaurantFoodTypes } from './RestaurantFoodTypes'


const Card = styled.View`
    border-radius: 5px;
    margin: 15px 0;
    background-color: ${Colors.white};
    box-shadow: 1px 1px 1px ${Colors.midGrey};
`

const Description = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`

const RestaurantInfo = styled.View`
    flex: 0.5;
`

const Ratings = styled.View`
    flex: 0.5;
`

const Heading = styled.View`
    height: 150px;
    background-color: ${Colors.lightGrey};
    width: 100%;
`

const Logo = styled(Image)`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: -30px;
    box-shadow: 5px 5px 5px ${Colors.lightGrey};
`


interface IProps {
    restaurant: SkipRestaurant
}

export const Restaurant: React.FC<IProps> = ({ restaurant }) => {

    return (
        <Card accessibilityLabel={TestIDs.restaurants.card}>
            <Heading />
            <Logo source={{ uri: restaurant?.LogoUrl }} resizeMode={'contain'} />
            <Description>
                <RestaurantInfo>
                    <Text>{restaurant?.Name}</Text>
                    <RestaurantFoodTypes cuisineTypes={restaurant?.CuisineTypes} />
                </RestaurantInfo>
                <Ratings>
                    <RatingBadge avgRating={restaurant.Rating?.Average} />
                </Ratings>
            </Description>
        </Card>
    )
}