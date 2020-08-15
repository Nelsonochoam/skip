import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

import styled from 'styled-components/native'
import _ from 'lodash'

import { PostCodeSearch } from '../components/PostCodeSearch'
import RestaurantService from '../services/restaurant.service'
import { RestaurantList } from '../components/RestaurantLIst'
import { SkipRestaurant } from '../api/skip_api'
import Colors from '../constants/colors'


const Container = styled.View`
    background-color: ${Colors.backgroundGrey};
    flex: 1;
`

const StyledSafeArea = styled(SafeAreaView)`
    flex: 1;
`

export const RestaurantsContainer = () => {
    const [postCode, setPostCode] = useState('')
    const [restaurants, setResturants] = useState([] as SkipRestaurant[])

    const onPostCodeChange = (newPostCode: string) => {
        setPostCode(newPostCode)
        debounceRefereshRestaurants(postCode)
    }

    const refereshRestaurants = (postalCode: string) => {
        RestaurantService.retrieveRestaurants(postCode)
            .then((rests) => setResturants(rests))
    }
    const debounceRefereshRestaurants = _.debounce(refereshRestaurants, 1000)

    return (
        <StyledSafeArea>
            <Container>
                <PostCodeSearch value={postCode} onTextChange={onPostCodeChange} />
                <RestaurantList restaurants={restaurants} />
            </Container>
        </StyledSafeArea>
    )
}