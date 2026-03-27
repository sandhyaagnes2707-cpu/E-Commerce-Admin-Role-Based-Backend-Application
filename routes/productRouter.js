const{
     addProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    editProduct}=require("../controller/productController");
    const express=require("express")
    const router=express.Router();

    router.post("/add-product",addProduct);
    router.get("/get-allproducts",getAllProducts);
    router.get("/getproduct/:id",getProduct);
    router.delete("/delete-product/:id",deleteProduct);
    router.put('/update-product/:id',editProduct);

    module.exports=router;