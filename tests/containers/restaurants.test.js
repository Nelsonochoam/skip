import { RestaurantFixture } from '../fixtures/restaurants.fixture'
import { TEST_POST_CODE } from '../../app/constants/test_strings'

describe('<RestaurantsContainer />', () => {

    it('search post code', (done) => {
        const fixture = new RestaurantFixture()

        fixture.userSearchPostCode(TEST_POST_CODE)
        fixture.waitForRestaurants()
            .then((foundRestaurants) => expect(foundRestaurants.length).toBe(1))
            .then(() => done())
    });

    it('search restaurants _ clear post search after', (done) => {
        const fixture = new RestaurantFixture()

        fixture.userSearchPostCode(TEST_POST_CODE)
        fixture.waitForRestaurants()
            .then(() => fixture.userSearchPostCode(''))
            .then(() => fixture.waitForNoRestaurantsFound())
            .then(() => done())
    })

    it('search restaurants _ no results', (done) => {
        const fixture = new RestaurantFixture()

        fixture.userSearchPostCode('rand')
        fixture.waitForRestaurants(1000).catch((err) => {
            expect(err.message).toBe('No instances found')
            done()
        })
    })

});