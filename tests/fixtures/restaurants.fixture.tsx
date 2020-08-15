import React from 'react';
import { render, fireEvent, waitFor, GetAllReturn, waitForElementToBeRemoved } from '@testing-library/react-native';

import { RestaurantsContainer } from '../../app/containers/RestaurantsContainer'
import { TEST_POST_CODE } from '../../app/constants/test_strings'
import TestIDs from '../../app/constants/test_ids'

export class RestaurantFixture {
    // @ts-ignore
    private getAllByA11yLabel: (matcher: string | RegExp) => GetAllReturn

    constructor() {
        this._renderRestaurantContainer()
    }

    private _renderRestaurantContainer() {
        const { getAllByA11yLabel } = render(
            <RestaurantsContainer />
        );
        this.getAllByA11yLabel = getAllByA11yLabel
    }

    userSearchPostCode(postCode: string) {
        const postSearchInput = this.getAllByA11yLabel(TestIDs.postcode.input)
        fireEvent.changeText(postSearchInput[0], postCode)
    }

    waitForRestaurants(timeout = 4500): Promise<unknown> {
        return waitFor(() => this.getAllByA11yLabel(TestIDs.restaurants.card), { timeout })
    }

    waitForNoRestaurantsFound(): Promise<unknown> {
        return waitForElementToBeRemoved(() => this.getAllByA11yLabel(TestIDs.restaurants.card));
    }

}