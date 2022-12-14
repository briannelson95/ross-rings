// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import simpleBlockContent from './objects/simpleBlockContent'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import blockContent from './objects/blockContent'
import products from './documents/products'
import contact from './objects/contact'
import hero from './objects/hero'
import cta from './objects/cta'
import gallery from './objects/gallery'
import homepage from './documents/homepage'
import featuredProduct from './objects/featuredProduct'
import testimonials from './documents/testimonials'
import carousel from './objects/carousel'
import figure from './objects/figure'
import repeaterBlocks from './objects/repeaterBlocks'
import textObject from './objects/textObject'
import socialGallery from './documents/socialGallery'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    page,
    post,
    products,
    homepage,
    socialGallery,

    simpleBlockContent,
    blockContent,
    mainImage,
    openGraph,
    contact,
    hero,
    cta,
    gallery,
    featuredProduct,
    testimonials,
    carousel,
    figure,
    repeaterBlocks,
    textObject,
  ]),
})
