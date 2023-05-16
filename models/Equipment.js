import mongoose from "mongoose";
const { Schema } = mongoose;

const EquipmentSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  photos: { type: [String] },
  description: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  feautured: { type: Boolean, required: false },
  price: { type: Number, required: true },
});

export default mongoose.model("Equipment", EquipmentSchema);
