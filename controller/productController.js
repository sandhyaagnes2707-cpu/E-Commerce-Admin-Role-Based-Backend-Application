const Products = require("../model/productModel");

// add product
const addProduct = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      cost:req.body.cost,
      description:req.body.description,
      categories:req.body.categories,
      rating:req.body.ratings,
      ImageSrc:req.body.ImageSrc,
    };
   await Products.insertOne(newProduct);
    res.status(200).json({message:"product added successfully"});
  } catch (error) {
    res.status(500).json({message:"failed to add product"});
  }
};


// delete product

const deleteProduct = async (req,res) =>{
 try {

    const deletedProduct = await Products.findByIdAndDeleteDelete(req.params.id);
    if(!deleteProduct){
        res.status(404).json({message: "product not found please check ID"});
    }
        res.status(400).json({message: "deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: "failed to Delete"});
    }
}

// get all products


const getAllProducts = async(req,res) => {
    try {
  const allProducts = await Products.find();
if (!allProducts){
    res.status(404).json({ message: "products not found"});
}
res.status(200).json({allProducts});
} catch (error) {
    res.status(500).json({message: "failed to retrieve products"});
    }
};

//get product based on ID

const getProduct = async(req,res)=>{
    try {
     const findProduct = await Products.findById(req.params.id)
     if (!findProduct){
         }
        res.status(404).json({ message: "products not found"});
    } catch (error){}
        res.status(500).json({message: "failed to retrieve products"});
    };

// edit product
const editProduct = async(req,res)=>{
    try {
        const updatedProduct = await Products.findByIdAndUpdate(
        req.params.id, 
        { 
        name: req.body.name,
        cost:req.body.cost,
        description:req.body.description,
        categories:req.body.categories,
        rating:req.body.ratings,
        ImageSrc:req.body.ImageSrc,
    },
     {new:true}
    );
     if (!updatedproduct) {
        res.status(404).json({ message: "products not found"});
     }
     res.status(200).json({ message: "updated Successfully",updatedProduct});
    } catch (error) {} 
    res.status(500).json({message: "failed to retrieve products"}); 
};
module.exports={
    addProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    editProduct,
};







