import { makeSchema } from 'nexus'
import { join } from 'path'
import * as Types from './types'

export const schema = makeSchema({
  types: Types,
  outputs: {
    schema: join(process.cwd(), "schema.gen.graphql"),
    typegen: join(process.cwd(), "./src/nexus-type.gen.ts"),
  },
})