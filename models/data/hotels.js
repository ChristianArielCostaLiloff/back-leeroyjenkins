let hotels = [
    {
      name: "Hotel Las Américas Torre del Mar",
      photo: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/de/19/28/las-americas-torre-del.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/98/d1/35/photo1jpg.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/b4/c6/aqua-lounge-bar.jpg?w=1200&h=-1&s=1",
      ],
      capacity: 1500,
      citiId: "63701f25d10c25267b79e291",
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Twin Lions Casino",
      photo: [
        "https://www.twinlionsjalisco.com/wp/wp-content/uploads/2019/06/index_1.jpg",
        "https://www.promo-zone.com.mx/img/establecimientos/galerias/xestablecimiento-6400-galeria-587fea51a7cd6.jpg.pagespeed.ic.Z-RbXqsPcb.webp",
        "https://www.promo-zone.com.mx/img/establecimientos/galerias/xestablecimiento-6403-galeria-587fea7f1699a.jpg.pagespeed.ic.cUvBD-q5Fq.webp",
      ],
      capacity: 600,
      citiId: "63701f25d10c25267b79e292",
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "El Casco Art Hotel",
      photo: [
        "https://hotelelcasco.com.ar/web/wp-content/uploads/2020/10/36593087.jpg",
        "https://hotelelcasco.com.ar/web/wp-content/uploads/2020/10/36593071.jpg",
        "https://hotelelcasco.com.ar/web/wp-content/uploads/2020/10/36593068.jpg",
      ],
      capacity: 584,
      citiId: "63701f25d10c25267b79e293",
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "Casino Puerto Madryn",
      photo: [
        "https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/283916592_7361074157297307_7621081610742070343_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=18orwEICeKoAX__8Ist&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfCXL3AzmDbNR9fLuAz-oQenRgqFV0EDZSh78BgwtOJyKw&oe=636762E5",
        "https://scontent.fcnq2-1.fna.fbcdn.net/v/t39.30808-6/270945627_6617836564954407_6115313275463038197_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XnWiI11lEmQAX9oUfvd&_nc_ht=scontent.fcnq2-1.fna&oh=00_AfAocYbsNsvzdcdLaRiVBOB7GQVni7aTzpAMAxhZDM1D6w&oe=636701A3",
        "https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/228388249_5782300655174673_806913641620746192_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=B40jOgLU04IAX8PCVab&tn=sgFPi4-ZTVafH3ne&_nc_ht=scontent.fcnq2-2.fna&oh=00_AfAtkTNy_xHs7BeRMdw6Qu8KUIz6qN1wwvbuA3wvXh7bXw&oe=6366F42F",
      ],
      capacity: 557,
      citiId: "63701f25d10c25267b79e294",
      userId: "6370096b26cecde13c02e04d",
    },
    {
      name: "Hotel Riu Plaza Madrid",
      photo: [
        "https://www.riu.com/es/binaris/hotel-riu-plaza-espana-8_tcm49-223548.jpg?v=tm100222_1150",
        "https://www.riu.com/es/binaris/gastrobar-riu-plaza-espana-2_tcm49-256941.jpg?v=tm100222_1150",
        "https://www.riu.com/es/binaris/habitacion-DST-riu-plaza-espana_tcm49-220175.jpg?v=tm100222_1150",
      ],
      capacity: 1864,
      citiId: "63701f25d10c25267b79e295",
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Bingo Laietana",
      photo: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/8e/cb/sala-maquinas-recreativas.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/8f/8b/sala-de-bingo.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/75/8f/2e/sala-de-apuestas-deportivas.jpg?w=1200&h=-1&s=1",
      ],
      capacity: 400,
      citiId: "63701f25d10c25267b79e296",
      userId: "6370096b26cecde13c02e04a",
    },
    {
      name: "Schulz Hotel Berlin",
      photo: [
        "https://www.schulzhotels.com/app/uploads/2021/05/Schulz_Hotels_Aussen_02-scaled.jpg",
        "https://www.schulzhotels.com/app/uploads/2021/05/Schulz_Hotels_Rezeption_dunkel2-scaled.jpg",
        "https://www.schulzhotels.com/app/uploads/2021/05/Doppelzimmer_Premium_Fluss_5-scaled.jpg",
      ],
      capacity: 960,
      citiId: "63701f25d10c25267b79e297",
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Tokyo Horse Racetrack",
      photo: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/37/0f/68/tokyo-horse-racetrack.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0e/49/64/caption.jpg?w=1200&h=-1&s=1",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/30/2c/94/caption.jpg?w=1200&h=-1&s=1",
      ],
      capacity: 3000,
      citiId: "63701f25d10c25267b79e298",
      userId: "6370096b26cecde13c02e04a",
    },
    {
      name: "Mercure Sydney",
      photo: [
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/226/2020/04/08015840/Exterior-1.jpg",
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/226/2020/06/18011803/IMG_0010W.jpg",
        "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/226/2020/04/08020350/Platform-818-Bar1.jpg",
      ],
      capacity: 837,
      citiId: "63701f25d10c25267b79e299",
      userId: "6370096b26cecde13c02e04d",
    },
    {
      name: "Woodapple Residency Nueva Delhi",
      photo: [
        "https://indiafoodantravelguide.com/img-folder/images/r1024x1024/8309/830948/830948861.JPEG",
        "https://indiafoodantravelguide.com/img-folder/images/r1024x1024/8309/830959/830959235.JPEG",
        "https://indiafoodantravelguide.com/img-folder/images/r1024x1024/8309/830947/830947094.JPEG",
      ],
      capacity: 324,
      citiId: "63701f25d10c25267b79e29a",
      userId: "6370096b26cecde13c02e04c",
    },
    {
      name: "Cosmos Hotel Moscow",
      photo: [
        "https://foto-origin.hrsstatic.com/foto/0/1/7/2//teaser_017294.jpg",
        "https://www.hotelcosmos.ru/upload/resize_cache/iblock/e82/z41tb2lh4sqejxbo0u6buz25ilb7d8pm/640_480_2/3.jpg",
        "https://www.hotelcosmos.ru/upload/iblock/c19/venera_hall.jpg",
      ],
      capacity: 3214,
      citiId: "63701f25d10c25267b79e29b",
      userId: "6370096b26cecde13c02e04b",
    },
    {
      name: "Casino Helsinki",
      photo: [
        "https://www.casinolifemagazine.com/sites/default/files/pictures/Extirior.jpg",
        "https://casinohelsinki.fi/wp-content/uploads/2021/11/Casino_Helsinki_uutiset_hero.jpg",
        "https://casinotampere.fi/wp-content/uploads/2022/01/20220112_CasinoHelsinki_900x500.jpg",
      ],
      capacity: 965,
      citiId: "63701f25d10c25267b79e29c",
      userId: "6370096b26cecde13c02e04d",
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const Hotel = require("../Hotel");
  
  hotels.forEach((elemento) => {
    Hotel.create({
      name: elemento.name,
      photo: elemento.photo,
      capacity: elemento.capacity,
      cityId: elemento.citiId,
      userId: elemento.userId,
    });
  });