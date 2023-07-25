import mongoose from 'mongoose';
const { Schema } = mongoose;

const GENDER = ["M", "F"]

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: false,
   },
   age: {
      type: Number,
      required: true,
      unique: false,
   },
   gender: {
      type: GENDER,
      required: true,
   },
},
   {
      timestamps: true,
   },
);

export default mongoose.model('User', userSchema);