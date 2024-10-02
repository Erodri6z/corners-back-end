import { Product } from "../models/product.js"

async function index(req, res) {
  try{
    const products = await Product.find({})

    res.json(products)

  } catch (err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function show(req, res) {
  try{
    const product = await Product.findById(req.params.id)

    res.json(product)

  } catch (err){
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req, res) {
  // no auth yet until we figure out what twe will do with products and admins'

  try{
    // req.body.productPendingApproval = true
    const product = await Product.create(req.body)
    console.log("this is working")
    res.json(product)
    
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function edit(req, res) {
  // I was going to set this up with checks to see if the user trying to is an admin but then i realized that middleware already does that.
  // might add it anyways
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new : true
      }
    )
    res.status(200).json(updatedProduct)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function deleteProduct(req, res){
  // no auth yet until we figure out what twe will do with products and admins'
  try{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.json(deletedProduct)
    console.log("this product was deleted:", deletedProduct.productName)

  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  show,
  create,
  deleteProduct as delete
}