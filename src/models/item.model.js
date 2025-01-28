import mongoose  from "mongoose";

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicable: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, computed: 'baseAmount - discount' },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  });


  itemSchema.pre('save', function (next) {
    this.totalAmount = this.baseAmount - this.discount;
    next();
  });
  
  

export const Item = mongoose.model("Item", itemSchema);
  