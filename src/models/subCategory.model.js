import e from "express";
import mongoose ,{Schema} from "mongoose";


const subCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String     //cloudnary url
    },
    taxApplicable: {
        type: Boolean,
        default: false
    },
    tax:{
        type: Number,
        default: 0  
    },
    description: {
        type: String
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    items: [{
             type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    taxType: {  
        type: String,
        enum: ["percentage", "fixed"],
        default: "percentage"
    }
},
{
    timeStamp: true
}
)

export const SubCategory = mongoose.model("SubCategory", subCategorySchema)