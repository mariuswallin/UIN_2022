import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
// importerer event
import event from './documents/event'
import category from './documents/category'

// legger event til i types under
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([event, category]),
})
