import { ISkipApi, SkipApi, SkipRestaurant } from "../api/skip_api";
import { SkipApiMock } from "../api/skip_api.mock";

class RestaurantService {
    constructor(private skipApi: ISkipApi) { }

    retrieveRestaurants(postCode: string): Promise<SkipRestaurant[]> {
        return this.skipApi.restaurantsByPostCode(postCode)
    }
}

// @ts-ignore
// const api = process.env === 'TEST' ? new SkipApiMock() : new SkipApi()
export default new RestaurantService(new SkipApiMock())