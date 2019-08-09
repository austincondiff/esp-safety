import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PostPreview from './preview-templates/PostPreview'
import ProductsPagePreview from './preview-templates/ProductsPagePreview'
import ProductPreview from './preview-templates/ProductPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('product', ProductPreview)
CMS.registerPreviewTemplate('products-page', ProductsPagePreview)
CMS.registerPreviewTemplate('posts', PostPreview)
CMS.registerPreviewStyle('/admin/cms-preview.css')
