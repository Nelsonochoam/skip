import React, { useState } from 'react'
import { View } from 'react-native'

import styled from 'styled-components'
import _ from 'lodash'

import { PostCodeSearch } from '../components/PostCodeSearch'
import RestaurantService from '../services/restaurant.service'
import { RestaurantList } from '../components/RestaurantLIst'


const Container = styled(View)`
    flex: 1;
`

export const RestaurantsContainer = () => {
    const [postCode, setPostCode] = useState('')
    const [restaurants, setResturants] = useState([])

    const onPostCodeChange = (newPostCode: string) => {
        setPostCode(newPostCode)
        _.debounce(refereshRestaurants, 500)(postCode)
    }

    const refereshRestaurants = (postalCode: string) => {
        RestaurantService.retrieveRestaurants(postCode)
    }

    return (
        <Container>
            <PostCodeSearch value={postCode} onTextChange={onPostCodeChange} />
            <RestaurantList restaurants={restaurants} />
        </Container>
    )
}