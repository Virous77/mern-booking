import mongoose from "mongoose";

const PropertiesTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("PropertyType", PropertiesTypeSchema);
