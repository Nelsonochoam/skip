import axios from 'axios'

export interface CuisineType {
    Name: string;
    SeoName: string
}

export interface SkipRestaurant {
    Id: string
    Name: string
    City: string
    Url: string
    LogoUrl: string
    UniqueName: string
    CuisineTypes: Array<CuisineType>
    Address: {
        City: string,
        Latitude: number,
        Longitude: number
    }
    Rating: {
        Count: number
        Average: number
        StarRaiting: number
    }
}

export interface ISkipApi {
    restaurantsByPostCode(postCode: string): Promise<any>
}

export class SkipApi implements ISkipApi {
    private static readonly ENDPOINT = 'https://uk.api.just-eat.io'

    public restaurantsByPostCode(postcode: string): Promise<SkipRestaurant[]> {
        const PATH = `${SkipApi.ENDPOINT}/restaurants/bypostcode/${postcode.toLocaleLowerCase()}`
        return axios.get(PATH).then((response) => response.data?.Restaurants)
    }
}