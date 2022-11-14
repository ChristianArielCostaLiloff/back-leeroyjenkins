let shows = [
    {
      hotelId: "63716c6edd2cbad3afa9f85a",
      name: "Tennis Training",
      description: "One field with instructors and certified caddies by the ITF.",
      photo:
        "https://www.hotellasamericas.com.co/wp-content/uploads/2017/05/tennis-big.jpg",
      price: 20,
      date: new Date("11-11-2022"),
      userId: "6370108133221044233a192e",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f85a",
      name: "Manglar's Cave",
      description:
        "Do a trip by the tunnels of manglars enjoying the contact with nature and watching a big variety of exotic animals of this ecosystem.",
      photo:
        "https://www.hotellasamericas.com.co/wp-content/uploads/2017/05/banners-superiores-especificos-que-hacer-cueva-manglar.jpg",
      price: 50,
      date: new Date("12-26-2022"),
      userId: "6370108133221044233a192f",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f85b",
      name: "Su majestad mi banda EL MEXICANO de Casimiro",
      description: "Join the show of the old band that runs without time.",
      photo:
        "https://www.twinlionsjalisco.com/wp/wp-content/uploads/2022/11/TL_MI_BANDA_EL_MEXICANO_1920X1080-1024x576.jpg",
      price: 200,
      date: new Date("07-12-2023"),
      userId: "6370108133221044233a1930",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f85b",
      name: "2000's El Tributo",
      description: "Stay tuned to remember the old good songs u ever listen.",
      photo:
        "https://www.twinlionsjalisco.com/wp/wp-content/uploads/2022/11/tl_2000s_tributo_1920x1080-1024x576.jpg",
      price: 30,
      date: new Date("07-11-2023"),
      userId: "6370108133221044233a192d",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f860",
      name: "Sachsenhausen's Tour",
      description:
        "Make the most of visit Sachsenhausen, one of the firsts concentration camps in Germany, with a guide.",
      photo:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/49/f6/49.jpg",
      price: 40,
      date: new Date("11-20-2022"),
      userId: "6370108133221044233a192f",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f860",
      name: "Topography of Terror",
      description:
        "Outdoor and indoor history museum in Berlin, Germany, located on Niederkirchnerstrasse, formerly Prinz-Albrecht-Strasse, on the site of buildings, which during the Nazi regime from 1933 to 1945 was the SS Reich Security Main Office, the headquarters of the Sicherheitspolizei, SD, Einsatzgruppen and Gestapo.",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Berlin_Topographie_des_Terrors_Ausstellungshalle.jpg",
      price: 25,
      date: new Date("12-15-2022"),
      userId: "6370108133221044233a1930",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f864",
      name: "Kremlin",
      description:
        "Red Square is the most famous square in Moscow in the commercial district known as Kitay-górod. It is 330m long and 70m wide.",
      photo:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/fc/71/bf/moscow-kremlin.jpg?w=1200&h=-1&s=1",
      price: 10,
      date: new Date("12-03-2022"),
      userId: "6370108133221044233a192d",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f864",
      name: "Bolshói Theater",
      description:
        "The Bolshoi Theater is theater, dance and opera company based in Moscow, Russia.",
      photo:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/c4/01/e9/caption.jpg?w=1100&h=-1&s=1",
      price: 270,
      date: new Date("01-27-2023"),
      userId: "6370108133221044233a192d",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f865",
      name: "Show and dinner",
      description: "The best show of great artist with the best meal of Finland.",
      photo:
        "https://murhaklubi.com/wp-content/uploads/2019/04/25v_juhlaturnaus_fennia_liftup.jpg",
      price: 55,
      date: new Date("01-16-2023"),
      userId: "6370108133221044233a192e",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f865",
      name: "Winter archipelago excursion",
      description:
        "Join us and experience the quiet and magical winter forest and freezing waters of the archipelago.",
      photo:
        "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2022/03/f55c53a63e20fe585bf9ed7c8e50113f.jpg",
      price: 200,
      date: new Date("04-12-2023"),
      userId: "6370108133221044233a192f",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f862",
      name: "Mercure Fitness",
      description:
        "Available Daily 6.00AM – 10.00PM / Fully-Equipped Indoor Rooftop Gym / Heated Indoor Rooftop Swimming Poo",
      photo:
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/226/2020/09/08050632/Gym-1.jpg",
      price: 100,
      date: new Date("09-11-2023"),
      userId: "6370108133221044233a1930",
    },
    {
      hotelId: "63716c6edd2cbad3afa9f862",
      name: "Wynyard",
      description:
        "Wynyard seats up to 18 guests in a U-shape style or 24 guests Cabaret style, boasting floor to ceiling windows offering plenty of natural light and access out onto The Terrace.",
      photo:
        "https://www.mercuresydney.com.au/wp-content/uploads/sites/226/2022/07/0008_Mercure_Sydney_20thJune2022-Edit.jpg",
      price: 63,
      date: new Date("01-15-2023"),
      userId: "6370108133221044233a192e",
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const Show = require("../Show");
  
  shows.forEach((elemento) => {
    Show.create({
      hotelId: elemento.hotelId,
      name: elemento.name,
      description: elemento.description,
      photo: elemento.photo,
      price: elemento.price,
      date: elemento.date,
      userId: elemento.userId,
    });
  });