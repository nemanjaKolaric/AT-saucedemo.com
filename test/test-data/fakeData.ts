import { faker } from '@faker-js/faker';  

export const fakeData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    title: faker.name.firstName(),
    organization: faker.name.firstName(),
    email: faker.internet.email(),
    facebook: `https://facebook.com/${faker.word.verb()}`,
    instagram: `https://instagram.com/${faker.word.verb()}`,
    twitter: `https://twitter.com/${faker.word.verb()}`,
    linkedin: `https://linkedin.com/in/${faker.word.verb()}`,
    youtube: `https://youtube.com/${faker.word.verb()}`,
    snapchat: `https://snapchat.com/add/${faker.word.verb()}`,
    soundcloud: `https://soundcloud.com/${faker.word.verb()}`,
    store: faker.name.firstName(),
    website: faker.internet.domainName(),
    zipCode: faker.finance.account(5),
    note: faker.word.verb(),
    }
    