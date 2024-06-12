import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure';
import { myStructure } from "./sanity/structure";
import {schemaTypes} from './sanity/schemas/index'
import {visionTool} from '@sanity/vision';


const config = defineConfig({
projectId: 'hyvv1knf',
dataset: 'production',
title: 'ExtraHop',
apiVersion: '2024-06-10',
basePath: '/studio',
plugins: [structureTool({structure:myStructure}),visionTool()],
schema: {
  types: schemaTypes,
},

})

export default config;