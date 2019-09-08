import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default:0
    }
});
export default mongoose.model('product', ProductSchema);