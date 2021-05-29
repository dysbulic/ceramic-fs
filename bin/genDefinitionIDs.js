#!/usr/bin/env node

const { writeFile } = require('fs').promises
const Ceramic = require('@ceramicnetwork/http-client').default
const { createDefinition, publishSchema } = require('@ceramicstudio/idx-tools')
const { Ed25519Provider } = require('key-did-provider-ed25519')
const fromString = require('uint8arrays/from-string')
const MïmisSchema = require('../src/mïmis.schema.json')
const { ThreeIdConnect } = require('@3id/connect')
// const ThreeIdResolver = require('@ceramicnetwork/3id-did-resolver').default
const KeyResolver = require('key-did-resolver').default
const { DID } = require('dids')

const out = 'src/definitionIDs.json'
const CERAMIC_URL = (
  process.env.CERAMIC_URL || 'https://ceramic-clay.3boxlabs.com'
)

async function run() {
  if(!process.env.SEED) {
    throw new Error('Environment Variable SEED Required')
  }
  const seed = fromString(process.env.SEED, 'base16')
  const ceramic = new Ceramic(CERAMIC_URL)
  const provider = new Ed25519Provider(seed)
  const did = new DID({
    provider,
    resolver: KeyResolver.getResolver(),
  })

  await did.authenticate()
  ceramic.setDID(did)

  const mïmisSchema = await publishSchema(ceramic, { content: MïmisSchema })
  const mïmisDefinition = await createDefinition(ceramic, {
    name: 'Mïmis',
    description: 'Mïmis filesystem root', // optional
    schema: mïmisSchema.commitId.toUrl(),
  })

  const config = {
    definitions: {
      mïmis: mïmisDefinition.id.toUrl(),
    },
    schemas: {
      Mïmis: mïmisSchema.commitId.toUrl(),
    },
  }
  await writeFile(`./${out}`, JSON.stringify(config))

  console.log(`Config written to ${out} file:`, config)
  process.exit(0)
}

run().catch(console.error)