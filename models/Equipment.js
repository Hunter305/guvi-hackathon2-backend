import mongoose from "mongoose";
const { Schema } = mongoose;

const EquipmentSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  photos: { type: [String] },
  description: { type: String, required: true },
  longDescription:{type:String,required:true,default:"long description"},
  rating: { type: Number, min: 0, max: 5 },
  feautured: { type: Boolean, required: true,default:false },
  price: { type: Number, required: true },
});

export default mongoose.model("Equipment", EquipmentSchema);
