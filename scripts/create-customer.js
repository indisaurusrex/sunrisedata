const { apiRoot, projectKey } = require('../lib/client.js')

const createCustomerDraft = (customerData) => {
  const {
    email,
    password,
    firstName,
    lastName,
    countryCode,
    key
  } = customerData
  return {
    email,
    password,
    key,
    firstName,
    lastName,
    addresses: [
      {
        country: countryCode
      }
    ],
    defaultShippingAddress: 0
  }
}

createCustomer = (customerData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customers()
    .post({
      body: createCustomerDraft(customerData)
    })
    .execute()

const customerSampleData = {
  firstName: 'test2',
  lastName: 'test',
  email: 'test2@test.com',
  password: '123',
  key: 'test1233',
  countryCode: 'DE'
}

module.exports.createCustomer(customerSampleData)
