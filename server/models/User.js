import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 50,
  },
  picturePath: {
    type: String,
    default: ""
  },
  friends: {
    type: Array,
    default: []
  },
  location: String,
  occupation: String,
  viewedProfile: {type: Number, default: 0},
  impressions: {type: Number, default: 0},
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;