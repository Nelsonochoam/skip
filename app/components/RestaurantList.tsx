import React from 'react'
import _ from 'lodash'
import { Info } from './Info'
import { SkipRestaurant } from '../api/skip_api'
import { FlatList, Text } from 'react-native'

interface IProps {
    restaurants: SkipRestaurant[]
}

export const RestaurantList: React.FC<IProps> = ({ restaurants }) => {
    const noRestaurants = _.isEmpty(restaurants)

    const renderRestaurant = () => {

    }

    if (noRestaurants) {
        return <Info info={'No restaurants'} />
    }

    return (
        <FlatList
            data={restaurants}
            renderItem={renderRestaurant}
            keyExtractor={item => item['Id']}
        />
    )
}