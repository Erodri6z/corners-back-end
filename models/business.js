import mongoose from 'mongoose'

const Schema = mongoose.Schema

const businessSchema = new Schema({
  businessName: {
    type: String,
    required: true
  },
  businessOwnerName: {
    type: Schema.Types.ObjectId, ref: 'Profile',
    required: true
  },
  businessPhoneNumber: {
    type: String,
    required: true
  },
  businessEmail: {
    type: String,
    required: true
  },
  businessAddress: String,
  businessCity: String,
  businessState: String,
  businessZipCode: Number,
  daysOfWeekOpen: [{
    type: String,
    enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  }],
  businessHours: String,
  authorizationLevel: {
    type: Number,
<<<<<<< HEAD
    required: true
  },
  nationality: {
    type: [String],
    default: []
  },
  patrons: [{type: Schema.Types.ObjectId, ref: 'Profile' }], 
  customerProductOptions: [{type: Schema.Types.ObjectId, ref: 'Product' }], 
  productsPendingApproval: [{type: Schema.Types.ObjectId, ref: 'Product' }], 
  recentlyAddedProducts: [{type: Schema.Types.ObjectId, ref: 'Product' }], 
  rejectedProducts: [{type: Schema.Types.ObjectId, ref: 'Product' }], 
  productsOnSale: [{ products: {type: Schema.Types.ObjectId, ref: 'Product' }, count: Number}], 
  }, {
    timestamps: true,
=======
    default: 200
  },
  patronsPending: [{
    type: Schema.Types.ObjectId, ref: 'Profile'
  }],
  patrons: [{
    type: Schema.Types.ObjectId, ref: 'Profile'
  }],
  products: [{
    type: Schema.Types.ObjectId, ref: 'Product'
  }],
  productsRequested: [{
    type: Schema.Types.ObjectId, ref: 'Product'
  }],
  productsOnSale: [{
    type: Schema.Types.ObjectId, ref: 'Product'
  }],
  rejectedProducts: [{
    type: Schema.Types.ObjectId, ref: 'Product'
  }],
}, {
  timestamps: true
>>>>>>> f1c37cb1f80dfd90dfe052e8b91e424bc5fd2031
})

const Business = mongoose.model('Business', businessSchema)

export { Business }
