import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'


export default defineConfig({
    name: 'default',
    title: 'Ross Rings',
    basePath: "/admin",

    projectId: 'y7bif9gn',
    dataset: 'production',

    plugins: [
        deskTool(), 
        media(), 
        visionTool()
    ],

    schema: {
        types: schemaTypes,
    },
})