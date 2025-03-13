const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true } // Thêm createdAt, updatedAt tự động
);

module.exports = mongoose.model("Category", CategorySchema);