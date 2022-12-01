let comments = [
  {
    showId: "6371aa8b3dc3579e014b8217",
    userId: "6370108133221044233a192f",
    date: (new Date(2022,10,11)).toDateString(),
    comment: "Is this a comment ?",
  },
  {
    showId: "6371aa8b3dc3579e014b8217",
    userId: "6370108133221044233a1930",
    date: (new Date(2023,8,15)).toDateString(),
    comment: "Ashei ?",
  },
  {
    showId: "6371aa8b3dc3579e014b8219",
    userId: "6370108133221044233a192d",
    date: (new Date(2022,11,29)).toDateString(),
    comment: "What a show guys, stay GOD like that",
  },
  {
    showId: "6371aa8b3dc3579e014b821c",
    userId: "6370108133221044233a192e",
    date: (new Date(2023,7,11)).toDateString(),
    comment: "Didn't like",
  },
];

require("dotenv").config();
require("../../config/database");
const Comment = require("../Comment");

comments.forEach((element) => {
  Comment.create({
    showId: element.showId,
    userId: element.userId,
    date: element.date,
    comment: element.comment,
  });
});
