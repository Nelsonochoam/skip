import axios from 'axios'
import { restaurants } from '../../tests/mocks/restaurants.mocks'
import { ISkipApi } from './skip_api'


export class SkipApiMock implements ISkipApi {
    public restaurantsByPostCode(postcode: string): Promise<any> {
        return Promise.resolve(restaurants)
    }
}