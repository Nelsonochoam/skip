import { restaurants } from '../../tests/mocks/restaurants.mocks'
import { ISkipApi } from './skip_api'
import { TEST_POST_CODE } from '../constants/test_strings'


export class SkipApiMock implements ISkipApi {
    public restaurantsByPostCode(postcode: string): Promise<any> {
        if (postcode === TEST_POST_CODE) {
            return Promise.resolve(restaurants)
        }

        return Promise.resolve([])
    }
}