const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: [true, 'Name is mandatory'] },
  retailPrice: { type: Number, required: [true, 'Retail price is mandatory'] },
  description: { type: String, required: false },
  image: { type: String, required: false },
  available: { type: Boolean, required: true, default: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Product', productSchema);