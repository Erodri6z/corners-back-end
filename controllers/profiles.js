import { Profile } from '../models/profile.js'
import { Product } from '../models/product.js'
import { v2 as cloudinary } from 'cloudinary'
import { Business } from '../models/business.js'

async function index(req, res) {
  try {
    const profiles = await Profile.find({})
    res.json(profiles)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function approveStore(req, res){

}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findById(req.params.id)

    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function requestProduct(req, res) {
  const business = await Business.findById(req.params.businessId) 
  const product  = await Product.findById(req.body._id)

  
  try {
    console.log("Business = ", business)
    console.log("Product = ", product)
  

    if (business.productsRequested.includes(product)) {
      console.log("Bro this is already on the todo list")
    }
    
    if (business.products.includes(product)) {
      console.log("This is already sold here")
      res.status(500).json("This is already sold here")
    }

    business.productsRequested.push(product)
    await business.save()

    res.status(200).json(" Item is now requested and hopefully gets accepted")


  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, addPhoto, approveStore, requestProduct }
