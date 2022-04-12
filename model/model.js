import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name:{
        type:String,
        minLength:5,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String
    },
    desc:{
        type:String
    
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
    
},{timestamps:true});
productSchema.index({'$**':'text'})
export default mongoose.model('Product', productSchema);