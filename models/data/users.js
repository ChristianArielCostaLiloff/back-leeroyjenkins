let users = [
    {
      name: "Christian",
      lastName: "Costa Liloff",
      role: "admin",
      photo: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/07/26153138/MG_56961.jpg",
      age: 25,
      email: "piyu@gmail.com",
      password: "quierodormirmas578361",
      code: "739TX5R7",
      verified: true,
      logged: true,
    },
    {
      name: "Hugo",
      lastName: "Smahlij",
      role: "admin",
      photo: "https://dospuntosrevista.com/wp-content/uploads/2017/09/playboy-1.jpg",
      age: 26,
      email: "smahlij@gmail.com",
      password: "megustariaaprendermas89759238",
      code: "3WKNLB3Y",
      verified: true,
      logged: true,
    },
    {
      name: "Martin",
      lastName: "Ramela",
      role: "admin",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg",
      age: 28,
      email: "tincho.ramela@hotmail.com",
      password: "tincho4936289",
      code: "JVZ6398N",
      verified: true,
      logged: false,
    },
    {
      name: "Fabian",
      lastName: "Yrala",
      role: "admin",
      photo: "https://static.wikia.nocookie.net/dublagem/images/d/d6/Michael_Cera.jpg/revision/latest?cb=20220804234617&path-prefix=pt-br" ,
      age: 25,
      email: "fy.1998@yahoo.com",
      password: "nosejugarmobas4381",
      code: "HB4PU7E8",
      verified: true,
      logged: false,
    },
  ];

  require("dotenv").config();
  require("../../config/database");
  const User = require("../User");
  
  users.forEach((elemento) => {
    User.create({
      name: elemento.name,
      lastName: elemento.lastName,
      role: elemento.role,
      photo: elemento.photo,
      age: elemento.age,
      email: elemento.email,
      password: elemento.password,
      code: elemento.code,
      verified: elemento.verified,
      logged: elemento.logged,
    });
  });