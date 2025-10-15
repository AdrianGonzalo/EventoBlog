import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Eventos by La pelu de María',

  projectId: '0uf8a3o6',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
