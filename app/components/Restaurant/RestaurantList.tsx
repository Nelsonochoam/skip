import React from 'react'
import { FlatList } from 'react-native'

import _ from 'lodash'
import styled from 'styled-components/native'

import { Info } from '../Info'
import { SkipRestaurant } from '../../api/skip_api'
import { Restaurant } from './Restaurant'
import TestIDs from '../../constants/test_ids'


const List = styled(FlatList)`
    padding: 10px
`


interface IProps {
    restaurants: SkipRestaurant[]
}

export const RestaurantList: React.FC<IProps> = ({ restaurants }) => {
    const noRestaurants = _.isEmpty(restaurants)

    const renderRestaurant = ({ item }: { item: SkipRestaurant }) => {
        return <Restaurant restaurant={item} />
    }

    if (noRestaurants) {
        return <Info testLabel={TestIDs.restaurants.notFound} info={'No restaurants'} />
    }

    return (
        <List
            data={restaurants}
            renderItem={renderRestaurant}
            keyExtractor={(item: SkipRestaurant) => item?.Id?.toString()}
        />
    )
}