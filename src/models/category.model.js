import mongoose,{Schema} from "mongoose";


const categorySchema = new Schema({
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
    taxType: {  
        type: String,
        enum: ["percentage", "fixed"],
        default: "percentage"
    },
    subCategories: [
        {
            type: Schema.Types.ObjectId,
            ref: "SubCategory"
        }
    ],
    description: {
        type: String
    }
},
{
    timeStamp: true
}
)


export const Category = mongoose.model("Category", categorySchema)