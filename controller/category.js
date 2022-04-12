import Category from '../model/category';
import Product  from '../model/model';
// Thêm danh mục
export const create = async (req,res)=>{
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}
// Chi tiết danh mục
export const read = async (req,res)=>{
    try {
        const category = await Category.findOne({_id:req.params.id}).exec();
        const products = await Product.find({category}).select("-category").exec();

        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}
export const list = async (req, res) => { 
    try {
        const category = await Category.find().sort({createAt: -1});
                res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được danh mục"
        })
    }
}