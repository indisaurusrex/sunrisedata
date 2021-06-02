const { apiRoot, projectKey } = require('../lib/client.js')

const createCategoryDraft = (categoryData) => {
  const { key, name, parent, slug, externalId } =
    categoryData
  return {
    key,
    name,
    parent,
    slug,
    externalId
  }
}

createCategory = (categoryData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .post({
      body: createCategoryDraft(categoryData)
    })
    .execute()

const categorySampleData = {
  key: 'c157',
  name: {'de-DE': 'Kinder'},
  slug: {'de-DE': 'kids'},
  parent: {key: 'c3'},
  externalId: '157'
}

createCategory(categorySampleData)
