import React, { useState, useEffect } from 'react'
import { SafeAreaView, ActivityIndicator } from 'react-native'

import styled from 'styled-components/native'
import _ from 'lodash'

import { PostCodeSearch } from '../components/PostCodeSearch'
import RestaurantService from '../services/restaurant.service'
import { RestaurantList } from '../components/RestaurantList'
import { SkipRestaurant } from '../api/skip_api'
import Colors from '../constants/colors'
import useDebounce from '../hooks/useDebounce'


const Container = styled.View`
    background-color: ${Colors.backgroundGrey};
    flex: 1;
`

const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
`

const StyledSafeArea = styled(SafeAreaView)`
    flex: 1;
`

export const RestaurantsContainer = () => {
    const [postCode, setPostCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [restaurants, setResturants] = useState([] as SkipRestaurant[])
    const debouncedPostCode = useDebounce(postCode, 500)

    useEffect(() => {
        if (debouncedPostCode) {
            refereshRestaurants(debouncedPostCode)
        } else {
            setResturants([])
        }
    }, [debouncedPostCode])

    const refereshRestaurants = (postalCode: string) => {
        setLoading(true)
        RestaurantService.retrieveRestaurants(postCode)
            .then((rests) => setResturants(rests))
            .finally(() => setLoading(false))
    }

    const renderRestaurantList = () => {
        if (loading) {
            return (
                <LoadingContainer>
                    <ActivityIndicator />
                </LoadingContainer>
            )
        }

        return <RestaurantList restaurants={restaurants} />
    }

    return (
        <StyledSafeArea>
            <Container>
                <PostCodeSearch value={postCode} onTextChange={setPostCode} />
                {renderRestaurantList()}
            </Container>
        </StyledSafeArea>
    )
}