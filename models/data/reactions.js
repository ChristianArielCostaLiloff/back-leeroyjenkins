let reactions = [
  {
    showId: "638488d7747b1721a71ef0d4",
    name: "like",
    icon: "https://cdn-icons-png.flaticon.com/512/1365/1365358.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/1365/1365446.png",
    userId: [],
  },
  {
    showId: "638488d7747b1721a71ef0d4",
    name: "dislike",
    icon: "https://cdn-icons-png.flaticon.com/512/4926/4926589.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/2415/2415402.png",
    userId: [],
  },
  {
    showId: "638488d7747b1721a71ef0d4",
    name: "love",
    icon: "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/535/535285.png",
    userId: [],
  },
  {
    showId: "638488d7747b1721a71ef0d4",
    name: "surprise",
    icon: "https://cdn-icons-png.flaticon.com/512/3129/3129285.png",
    iconBack: "https://cdn-icons-png.flaticon.com/512/142/142313.png",
    userId: [],
  },
];

require("dotenv").config();
require("../../config/database");
const Reaction = require("../Reaction");

reactions.forEach((element) => {
  Reaction.create({
    showId: element.showId,
    name: element.name,
    icon: element.icon,
    iconBack: element.iconBack,
    userId: element.userId,
  });
});
