import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
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
  location: String,
  description: String,
  picturePath: String,
  userPicturePath: String,
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: { 
    type: Array, 
    default: [] 
  },

}, { timestamps: true });

const Posts = mongoose.model("Posts", PostsSchema);

export default Posts;