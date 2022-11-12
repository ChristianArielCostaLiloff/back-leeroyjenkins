let cities = [
    {
      name: "Cartagena de Indias",
      continent: "America",
      photo:
        "https://www.qhubobogota.com/wp-content/uploads/2022/09/cartagena.jpg",
      population: 914552,
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Guadalajara",
      continent: "America",
      photo:
        "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRsRojH4tOUBZDWxH_v7f8nhLzPPFWS4M1UeG1XfYquzcxVVbR7JQhEC68RQgQ9gJOx",
      population: 8348000,
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "San Carlos de Bariloche",
      continent: "America",
      photo:
        "https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2019/01/Argentina_Bariloche_Elijah-Lovkoff-iStock-820824654.jpg?resize=1080%2C1080&ssl=1",
      population: 130000,
      userId: "6370096b26cecde13c02e04d",
    },
    {
      name: "Puerto Madryn",
      continent: "America",
      photo:
        "https://i0.wp.com/laderasur.com/wp-content/uploads/2021/11/4695105.jpg?ssl=1",
      population: 123582,
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "Madrid",
      continent: "Europe",
      photo:
        "https://www.parkapp.com/blog/wp-content/uploads/2016/09/madridcentro-780x450.jpg",
      population: 3223000,
      userId: "6370096b26cecde13c02e04d",
    },
    {
      name: "Barcelona",
      continent: "Europe",
      photo:
        "https://images.ecestaticos.com/DWSq_h9gaUenoBxNVeE83FA23v0=/0x0:1254x836/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1f4%2F283%2Fbc7%2F1f4283bc73a4e89e27fbba97cff6c4f8.jpg",
      population: 1016000,
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "Berlin",
      continent: "Europe",
      photo:
        "https://media.traveler.es/photos/6137702efd8ea62e2db3198a/master/w_1600,c_limit/130944.jpg",
      population: 3645000,
      userId: "6370096b26cecde13c02e04a",
    },
    {
      name: "Tokyo",
      continent: "Asia",
      photo:
        "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/69000/69347-Tokyo.jpg",
      population: 13096000,
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Sydney",
      continent: "Oceania",
      photo:
        "https://cdn.britannica.com/96/100196-050-C92064E0/Sydney-Opera-House-Port-Jackson.jpg",
      population: 5312000,
      userId: "6370096b26cecde13c02e04a",
    },
    {
      name: "Nueva Delhi",
      continent: "Asia",
      photo:
        "https://www.esl-idiomas.com/sites/default/files/styles/image_gallery/public/city/esl-new-delhi-language-stay-hero.jpg?itok=RCrpgr_9",
      population: 32065760,
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "Moscow",
      continent: "Asia",
      photo:
        "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg",
      population: 11092000,
      userId: "6370096b26cecde13c02e04a",
    },
    {
      name: "Helsinki",
      continent: "Europe",
      photo:
        "https://excursionesdesde.com/wp-content/uploads/excursiones-desde-Helsinki-1024x480.jpg.webp",
      population: 631695,
      userId: "6370096b26cecde13c02e04b",
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const City = require("../City");
  
  cities.forEach((element) => {
    City.create({
      name: element.name,
      continent: element.continent,
      photo: element.photo,
      population: element.population,
      userId: element.userId,
    });
  });