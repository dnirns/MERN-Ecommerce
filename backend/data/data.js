const products = [
  {
    "_id": "5fbc14a1533eb76acf2c7f05",
    "index": 0,
    "price": "$144.91",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 5,
    "eyeColor": "blue",
    "brand": "ZYTREX",
    "name": "Rubadub",
    "description": "Mollit Lorem voluptate dolore duis id laboris ipsum elit laborum occaecat sint excepteur. Esse cillum et magna non magna nulla aute magna veniam. Eiusmod elit exercitation esse ad occaecat labore elit sit proident labore aute. Voluptate consequat pariatur nulla ipsum sint occaecat elit adipisicing do esse. Tempor laborum proident proident cupidatat voluptate sit."
  },
  {
    "_id": "5fbc14a1a9e1bf64d1b1484c",
    "index": 1,
    "price": "$375.28",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 2,
    "eyeColor": "brown",
    "brand": "TETAK",
    "name": "Uni",
    "description": "Ut occaecat adipisicing Lorem sunt culpa nulla aute veniam officia Lorem nulla adipisicing excepteur. Ea ipsum ad cillum aliqua ad consequat consequat voluptate. Elit qui sunt laborum aute deserunt consectetur reprehenderit voluptate elit magna cillum laboris. Dolor ad enim irure irure veniam cillum in tempor adipisicing proident amet mollit dolor exercitation. Anim cillum excepteur mollit est fugiat deserunt sit. Mollit culpa esse cillum do ea aliqua eu elit duis non Lorem anim."
  },
  {
    "_id": "5fbc14a17432de2483f519e8",
    "index": 2,
    "price": "$156.51",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 12,
    "eyeColor": "brown",
    "brand": "SULTRAXIN",
    "name": "Concility",
    "description": "Elit et est eiusmod eu mollit. Aliqua culpa ad dolor ea enim cillum deserunt incididunt deserunt quis consectetur. Quis magna fugiat cupidatat adipisicing deserunt tempor deserunt est voluptate. Exercitation culpa reprehenderit esse sunt laborum ea enim proident. Nulla enim sunt voluptate consequat qui aliqua. Cillum nostrud amet nulla nulla anim irure labore nulla duis laborum excepteur voluptate adipisicing."
  },
  {
    "_id": "5fbc14a1998331d919f5a6fe",
    "index": 3,
    "price": "$295.81",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 4,
    "eyeColor": "green",
    "brand": "ZEAM",
    "name": "Terrasys",
    "description": "Non ut consequat ad sunt ut incididunt dolore qui. Id aliqua et amet adipisicing sit. Aute pariatur sit ea tempor ex duis anim occaecat. Aliqua non id dolore excepteur culpa cupidatat dolore."
  },
  {
    "_id": "5fbc14a13c8e7f92b5d783ab",
    "index": 4,
    "price": "$218.15",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 3,
    "eyeColor": "blue",
    "brand": "KIOSK",
    "name": "Progenex",
    "description": "Fugiat sunt cillum quis dolore reprehenderit aute. Consequat nulla sit velit laboris. Ea sint laboris aliquip consectetur non minim anim commodo do sit consectetur ipsum sit. Et ea consequat Lorem consequat ex pariatur aliquip sit sint ipsum."
  },
  {
    "_id": "5fbc14a121e7546efa829e9d",
    "index": 5,
    "price": "$371.93",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 4,
    "eyeColor": "blue",
    "brand": "ZAPPIX",
    "name": "Pyramia",
    "description": "Excepteur sit sit exercitation eiusmod dolor officia aute consectetur aute. Labore eiusmod cupidatat laborum aliquip veniam excepteur aute pariatur exercitation est adipisicing eu. Deserunt velit nulla labore aliquip. Nulla irure ex tempor et reprehenderit cupidatat tempor elit culpa ullamco labore eu ex mollit. Lorem magna sint esse consectetur amet magna culpa mollit eu ex. Minim aliqua amet quis eu nostrud culpa deserunt dolor non proident duis non."
  },
  {
    "_id": "5fbc14a1b648c0d5de3b6130",
    "index": 6,
    "price": "$257.51",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 9,
    "eyeColor": "brown",
    "brand": "GEOSTELE",
    "name": "Emtrac",
    "description": "Ullamco reprehenderit nostrud ut non magna. Id pariatur Lorem eu id consequat voluptate magna proident adipisicing excepteur dolore. Ut esse est et exercitation exercitation culpa anim laboris eiusmod deserunt. Ex in nostrud ipsum adipisicing."
  },
  {
    "_id": "5fbc14a1b63aef71b34201fe",
    "index": 7,
    "price": "$364.42",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 14,
    "eyeColor": "brown",
    "brand": "SNOWPOKE",
    "name": "Exerta",
    "description": "Lorem velit consectetur tempor pariatur labore. Incididunt deserunt reprehenderit commodo aliquip culpa veniam. Excepteur id reprehenderit aute quis nisi sint eiusmod duis adipisicing. Ex nulla laboris cillum sunt labore nostrud enim consequat aliqua do elit sint occaecat esse. Proident pariatur ullamco est duis esse tempor occaecat est veniam. Sunt voluptate non fugiat officia et nulla quis ullamco proident nisi non amet. Aute fugiat elit voluptate velit eiusmod elit."
  },
  {
    "_id": "5fbc14a14d3ca04a381d2b06",
    "index": 8,
    "price": "$134.38",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 2,
    "eyeColor": "blue",
    "brand": "NETPLODE",
    "name": "Farmex",
    "description": "Officia commodo nulla exercitation nostrud. Exercitation labore nisi elit irure. Eiusmod incididunt voluptate laboris fugiat fugiat eiusmod ipsum sit cillum. In non consectetur minim ipsum id ut eu proident consectetur. Laboris ex duis ex commodo ea eu culpa. Do laboris adipisicing cupidatat sunt magna adipisicing ullamco sunt pariatur occaecat nulla anim commodo sit."
  },
  {
    "_id": "5fbc14a125234f1958103625",
    "index": 9,
    "price": "$219.49",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 5,
    "eyeColor": "blue",
    "brand": "VERAQ",
    "name": "Nurplex",
    "description": "Mollit cillum ex anim elit duis fugiat. Ullamco exercitation id sit veniam consequat. Cupidatat sit proident ipsum duis ipsum ullamco sit anim aute aute magna. Officia occaecat cillum irure adipisicing dolor. Voluptate magna ea est cillum."
  },
  {
    "_id": "5fbc14a169162c6330f452bf",
    "index": 10,
    "price": "$137.05",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 6,
    "eyeColor": "blue",
    "brand": "COMTOUR",
    "name": "Extragen",
    "description": "Enim do dolore quis ipsum qui ipsum id. Pariatur ea esse sit deserunt duis non labore adipisicing commodo cupidatat exercitation velit incididunt. Fugiat minim aliqua laborum Lorem qui ea dolor non. Cupidatat esse aute exercitation sit elit. Eu voluptate tempor sunt officia reprehenderit aliquip id sunt excepteur ad id proident sunt."
  },
  {
    "_id": "5fbc14a18431f5a1fe196d27",
    "index": 11,
    "price": "$217.30",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 9,
    "eyeColor": "green",
    "brand": "DAIDO",
    "name": "Isologix",
    "description": "Mollit pariatur fugiat sunt enim commodo culpa. Eiusmod dolore aute sunt do pariatur dolore magna sint ut sit aliquip consectetur. Fugiat duis pariatur adipisicing sit. Aliqua laborum sit aliqua cupidatat dolore aliqua irure. Veniam do eu labore voluptate voluptate minim ex sit ut enim exercitation amet. Culpa enim deserunt laboris magna."
  },
  {
    "_id": "5fbc14a13e7917eee8df1bb9",
    "index": 12,
    "price": "$280.12",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 18,
    "eyeColor": "green",
    "brand": "BITENDREX",
    "name": "Entroflex",
    "description": "Aute fugiat cupidatat enim qui est sit sint enim aliqua mollit mollit consequat laborum. Pariatur do sunt amet mollit adipisicing consectetur quis excepteur excepteur laboris aliqua sunt. Minim sit aliquip consectetur pariatur consectetur dolor anim adipisicing amet ut tempor cupidatat. Ullamco tempor pariatur id et."
  },
  {
    "_id": "5fbc14a162e6681828accea8",
    "index": 13,
    "price": "$174.63",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 18,
    "eyeColor": "brown",
    "brand": "GEOLOGIX",
    "name": "Shadease",
    "description": "Eu minim dolore voluptate Lorem ullamco aliqua reprehenderit magna Lorem nostrud dolor ullamco mollit est. Elit occaecat enim ea ipsum anim commodo enim excepteur ea veniam amet. Ullamco anim proident tempor elit irure duis tempor qui. Consequat officia deserunt est sunt et aliquip sunt culpa elit sint nostrud. Ex ea magna elit excepteur excepteur elit esse cupidatat est nulla exercitation qui."
  },
  {
    "_id": "5fbc14a1c1d0d91c567953da",
    "index": 14,
    "price": "$199.30",
    "image": "https://www.placecage.com/c/200/300",
    "stock": 9,
    "eyeColor": "blue",
    "brand": "GEEKULAR",
    "name": "Qimonk",
    "description": "Lorem enim et labore velit cillum. Velit nulla veniam labore cillum laborum. Deserunt sit reprehenderit nisi anim dolor excepteur sit est pariatur aute eiusmod commodo quis. Aute est dolore et Lorem ad elit sit sit pariatur id ipsum nostrud duis. Nulla fugiat aute nisi qui."
  }
]

export default products
