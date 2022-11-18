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

export const schemaTypes = [
  siteSettings,
  page,
  post,
  products,
  homepage,

  simpleBlockContent,
  blockContent,
  mainImage,
  openGraph,
  contact,
  hero,
  cta,
  gallery,
  featuredProduct,
]
