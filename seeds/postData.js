const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Rainy weather",
    "postContent": "Today is very rainy.",
    "userId": 1
  },
  {
    "postTitle": "Soccer",
    "postContent": "Soccer is the most entertaining sport.",
    "userId": 2
  },
  {
    "postTitle": "Vibes",
    "postContent": "Keep up the good vibes!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;