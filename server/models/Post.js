const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  announcement: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  inventory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ]
});

const Post = model("Post", postSchema);

module.exports = Post;
