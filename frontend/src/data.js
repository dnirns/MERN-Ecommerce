const products = [
  {
    "_id": "5fbc120435c7f212fd13d20c",
    "index": 0,
    "price": "$372.56",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 11,
    "eyeColor": "brown",
    "brand": "CORPULSE",
    "description": "Aute fugiat aliquip est consequat pariatur consectetur officia nisi proident reprehenderit. Id incididunt cillum fugiat dolore. Irure deserunt incididunt consectetur proident labore id mollit ex excepteur officia Lorem officia. Amet ea elit ut velit cillum consectetur culpa Lorem pariatur fugiat consequat ipsum mollit. Commodo mollit officia duis ea do. Esse eiusmod ut culpa fugiat mollit magna dolor ullamco elit."
  },
  {
    "_id": "5fbc12043d1d7d1c57051656",
    "index": 1,
    "price": "$114.67",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 20,
    "eyeColor": "green",
    "brand": "PLASMOSIS",
    "description": "Ut non irure sit sunt aute ipsum sint consequat occaecat. Aute ex sint do exercitation nulla quis. Officia dolore exercitation aliqua proident ipsum irure. Laboris cillum do pariatur in et eu occaecat ad elit est enim. Magna ullamco exercitation esse enim est. Et ipsum tempor consequat ullamco aliquip fugiat tempor amet duis Lorem aliqua nulla nisi fugiat."
  },
  {
    "_id": "5fbc1204c165675966ca0cdb",
    "index": 2,
    "price": "$138.60",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 18,
    "eyeColor": "brown",
    "brand": "INTERGEEK",
    "description": "Veniam cillum ipsum Lorem ut esse duis in. Occaecat dolor commodo ullamco nostrud. Ullamco minim tempor ex labore et laborum."
  },
  {
    "_id": "5fbc120413ccfccc3a2c5756",
    "index": 3,
    "price": "$140.07",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 18,
    "eyeColor": "green",
    "brand": "DADABASE",
    "description": "Reprehenderit dolor duis reprehenderit ea qui. Aliqua irure consequat consequat excepteur non officia quis id veniam pariatur aliquip labore non. Enim occaecat voluptate pariatur incididunt anim. Nisi culpa elit aliquip et aliquip velit quis. Laboris voluptate eiusmod proident occaecat ex pariatur nostrud fugiat excepteur aliquip incididunt consequat."
  },
  {
    "_id": "5fbc12043d7eb4717420d466",
    "index": 4,
    "price": "$297.64",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 19,
    "eyeColor": "brown",
    "brand": "VERTIDE",
    "description": "Et aliquip est reprehenderit mollit adipisicing laboris enim excepteur reprehenderit nostrud cupidatat cupidatat. Eu consectetur minim ipsum aliqua tempor est consectetur et duis. Aliqua tempor exercitation qui commodo mollit occaecat tempor. Mollit consequat laborum est nulla cillum laboris ipsum. Nisi nulla qui dolor magna aliquip laboris ullamco excepteur dolore labore ea. Pariatur dolore laborum tempor cupidatat irure Lorem proident ad id labore ex. Laborum mollit deserunt adipisicing in est."
  },
  {
    "_id": "5fbc120429bd5d8e54d09b61",
    "index": 5,
    "price": "$107.50",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 3,
    "eyeColor": "blue",
    "brand": "SULTRAXIN",
    "description": "Exercitation Lorem reprehenderit ea anim proident tempor et. Non commodo qui irure voluptate nostrud veniam minim aliquip. Commodo est excepteur velit culpa veniam eu cupidatat eu officia proident commodo. Ullamco officia ex dolore irure Lorem ut. Ullamco laborum cupidatat non do sint tempor enim consequat adipisicing ullamco Lorem proident."
  },
  {
    "_id": "5fbc120422515b42ab8f8b10",
    "index": 6,
    "price": "$329.38",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 9,
    "eyeColor": "blue",
    "brand": "OMNIGOG",
    "description": "Reprehenderit veniam tempor nulla magna Lorem labore esse. Non ipsum ullamco qui esse eu minim aute quis magna. Amet voluptate reprehenderit officia ad id dolor proident fugiat sit. Quis officia labore irure tempor velit sit voluptate. Eiusmod ullamco deserunt exercitation sit."
  },
  {
    "_id": "5fbc120449e4dda8288ac5e5",
    "index": 7,
    "price": "$312.77",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 11,
    "eyeColor": "blue",
    "brand": "NORALI",
    "description": "Incididunt deserunt fugiat elit dolor labore ut officia officia deserunt aute adipisicing deserunt cillum dolore. Proident nisi ad nostrud voluptate sit exercitation non aliqua non cillum. Ullamco quis commodo elit adipisicing magna consequat. Laborum enim ex ea nulla. Do consequat ut incididunt ullamco proident exercitation adipisicing fugiat elit est consequat."
  },
  {
    "_id": "5fbc12047f6c34feb7f771e0",
    "index": 8,
    "price": "$307.61",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 13,
    "eyeColor": "brown",
    "brand": "JETSILK",
    "description": "Sit esse dolore ipsum proident magna do commodo sint aliquip. Tempor nisi officia elit ullamco velit anim dolore. Minim id consequat ut consequat deserunt ipsum velit reprehenderit deserunt quis deserunt cupidatat laborum. Do nulla voluptate amet esse ipsum duis exercitation. Excepteur labore culpa excepteur enim Lorem et aute laboris."
  },
  {
    "_id": "5fbc1204339112cc57b2b1f2",
    "index": 9,
    "price": "$252.29",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 11,
    "eyeColor": "blue",
    "brand": "LIMAGE",
    "description": "Incididunt tempor nisi proident elit est incididunt quis excepteur cillum ea. Exercitation eu minim est est ea adipisicing magna fugiat non fugiat labore. Aute veniam nulla adipisicing ex aliquip aliqua incididunt deserunt aliqua mollit sint consectetur nostrud cillum."
  },
  {
    "_id": "5fbc12041e74acf6d5492b5e",
    "index": 10,
    "price": "$257.52",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 4,
    "eyeColor": "green",
    "brand": "VIRVA",
    "description": "Pariatur sunt sint Lorem irure ex aliqua duis anim consequat reprehenderit labore tempor dolore voluptate. Aliqua velit aliqua nisi excepteur aliquip anim. Enim qui adipisicing mollit consectetur ut sint eiusmod mollit officia laborum nisi. Aute ea aute aliquip aliqua in et. Amet excepteur non magna officia adipisicing occaecat irure. Ut adipisicing voluptate occaecat duis tempor adipisicing sunt."
  },
  {
    "_id": "5fbc12043ee7d362ec6f850b",
    "index": 11,
    "price": "$178.35",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 6,
    "eyeColor": "blue",
    "brand": "VIRXO",
    "description": "Nostrud in reprehenderit magna ut tempor eiusmod aliqua. Nisi ipsum elit enim occaecat aliquip quis minim proident dolore minim nostrud. Dolor consectetur minim esse ut do mollit aliqua enim enim dolor ea."
  },
  {
    "_id": "5fbc1204fb78a39488bca040",
    "index": 12,
    "price": "$163.19",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 14,
    "eyeColor": "brown",
    "brand": "RECOGNIA",
    "description": "Labore esse reprehenderit aliquip ea esse deserunt. Qui reprehenderit veniam in laboris incididunt. Quis in labore anim dolor qui. Mollit est deserunt aliquip qui. Eu enim ipsum id aute ex nisi. Qui laboris enim nulla minim minim mollit reprehenderit aliquip. Reprehenderit Lorem consectetur ea incididunt voluptate do culpa velit dolore laborum laboris officia esse."
  },
  {
    "_id": "5fbc12043071a51e7665252b",
    "index": 13,
    "price": "$336.47",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 3,
    "eyeColor": "blue",
    "brand": "IRACK",
    "description": "Voluptate sit Lorem aute aliquip aliquip nostrud eu nisi magna do. Ad ex magna aliqua veniam ipsum officia irure anim consectetur dolore est. Commodo deserunt dolore elit magna ullamco est in excepteur cupidatat elit amet qui. Est ullamco culpa Lorem nostrud nisi magna cupidatat. Est fugiat laborum consectetur proident incididunt anim mollit velit non tempor. Ex cupidatat laboris ipsum eu excepteur Lorem tempor pariatur adipisicing ad consectetur deserunt labore. Et et est incididunt ipsum quis excepteur ullamco."
  },
  {
    "_id": "5fbc1204ca061225cbd7db7d",
    "index": 14,
    "price": "$330.12",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 4,
    "eyeColor": "green",
    "brand": "ARTWORLDS",
    "description": "Irure culpa nulla sunt elit magna sunt voluptate mollit. Quis exercitation id voluptate cillum Lorem exercitation et. Nulla ex consectetur non anim. Consectetur non laboris enim pariatur irure in mollit proident nulla ea."
  },
  {
    "_id": "5fbc12047ffb068fbafef9a8",
    "index": 15,
    "price": "$385.23",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 6,
    "eyeColor": "green",
    "brand": "TYPHONICA",
    "description": "Enim deserunt fugiat laboris ipsum dolore anim. Fugiat nulla veniam proident tempor eiusmod id minim excepteur Lorem exercitation. Labore esse Lorem in ullamco aliqua sint magna Lorem quis officia. Duis tempor tempor eiusmod duis anim voluptate deserunt laborum irure. Excepteur in Lorem veniam proident nisi magna eiusmod incididunt fugiat id ipsum officia occaecat."
  },
  {
    "_id": "5fbc1204506e27a92e96ff3c",
    "index": 16,
    "price": "$286.98",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 4,
    "eyeColor": "blue",
    "brand": "ELENTRIX",
    "description": "Commodo fugiat minim sit nostrud laboris. Irure magna cillum dolore proident exercitation. Ipsum sint eu nostrud sit laboris laborum in fugiat id est. Do labore velit aliqua labore exercitation dolore labore in nostrud deserunt. Veniam non cupidatat anim esse aute ut sit amet ullamco commodo nostrud occaecat nisi proident."
  },
  {
    "_id": "5fbc120432ababbb69e13d75",
    "index": 17,
    "price": "$304.00",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 16,
    "eyeColor": "blue",
    "brand": "GRACKER",
    "description": "Cupidatat eiusmod duis exercitation aute quis. Amet in qui fugiat excepteur sint consectetur ad ut consectetur esse. Eiusmod velit ad dolor et esse fugiat. Minim exercitation nulla exercitation dolore dolore nulla et."
  },
  {
    "_id": "5fbc120429fc36c1bb6e31a9",
    "index": 18,
    "price": "$213.10",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 0,
    "eyeColor": "green",
    "brand": "RAMEON",
    "description": "Et ea quis excepteur culpa. Duis aliqua labore sint magna adipisicing consectetur non eu. Magna amet veniam enim id minim ea mollit eu nulla voluptate duis. Cillum dolor est ad aliquip."
  },
  {
    "_id": "5fbc12049069882a235cb787",
    "index": 19,
    "price": "$273.54",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 19,
    "eyeColor": "brown",
    "brand": "VALPREAL",
    "description": "Aliqua excepteur voluptate proident nulla officia irure mollit sit ullamco non aute aute duis. Incididunt ullamco nostrud minim id ut deserunt mollit non excepteur. Exercitation minim incididunt laboris enim aliqua nostrud nostrud ullamco nulla laborum in eiusmod do. Enim ex fugiat nulla id aliquip laborum qui. Nisi est nulla irure cillum fugiat commodo deserunt est officia velit consectetur commodo. Velit amet enim cillum exercitation qui deserunt mollit proident cupidatat aute. Aliqua exercitation magna ut nisi velit ipsum veniam cillum cillum esse aute."
  },
  {
    "_id": "5fbc12044b65f8c2df206980",
    "index": 20,
    "price": "$214.30",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 1,
    "eyeColor": "green",
    "brand": "CUBICIDE",
    "description": "Nulla tempor fugiat cupidatat anim. Nostrud et consectetur velit irure cillum proident labore qui eiusmod aliquip aliqua. Tempor veniam duis eiusmod pariatur eu. Commodo nostrud id consectetur minim ipsum nulla proident pariatur. Adipisicing consequat aliqua sint in cupidatat dolor sint. Consectetur sint consectetur aliquip cupidatat. Ut voluptate ex tempor dolore duis sit commodo officia ex anim consectetur veniam."
  },
  {
    "_id": "5fbc1204f61b9d6373f5c157",
    "index": 21,
    "price": "$267.99",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 10,
    "eyeColor": "blue",
    "brand": "VOIPA",
    "description": "Tempor ad pariatur commodo excepteur id Lorem voluptate laboris. Nisi anim nostrud cillum aliquip enim. Duis excepteur cupidatat enim sunt tempor ex enim in velit est est. Dolor adipisicing ipsum amet tempor nisi amet labore commodo et aute fugiat irure dolore. In excepteur amet adipisicing consectetur. Ad anim exercitation fugiat ea sit nisi ullamco dolor."
  },
  {
    "_id": "5fbc12041753054e6642e491",
    "index": 22,
    "price": "$371.47",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 18,
    "eyeColor": "blue",
    "brand": "SURETECH",
    "description": "Aliqua enim nulla tempor proident do. Mollit eu officia ea occaecat ex aliquip enim duis ipsum. Enim voluptate qui enim laboris non dolore excepteur exercitation ea dolore."
  },
  {
    "_id": "5fbc120400728cc48c7571d9",
    "index": 23,
    "price": "$271.42",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 19,
    "eyeColor": "green",
    "brand": "XIXAN",
    "description": "Sint adipisicing sunt aliquip eiusmod sunt id duis. Minim ullamco proident excepteur tempor aliqua. Quis elit dolore esse commodo cupidatat et sunt ipsum labore. Commodo ea eiusmod occaecat aliquip irure quis reprehenderit quis proident quis Lorem magna eiusmod. Veniam aliquip fugiat id qui Lorem duis. Sint non eiusmod nulla tempor duis cillum. Eiusmod veniam culpa et cillum labore cillum ex sit in cupidatat dolore duis cillum."
  },
  {
    "_id": "5fbc12046b99a8d9ab9a3583",
    "index": 24,
    "price": "$350.61",
    "picture": "https://www.placecage.com/c/200/300",
    "stock": 20,
    "eyeColor": "blue",
    "brand": "ECLIPSENT",
    "description": "Irure amet quis ullamco labore reprehenderit enim. Anim reprehenderit et sint sint laborum cupidatat. Id id dolore deserunt aute eu. Officia velit esse sit laboris culpa labore anim sit magna."
  }
]

export default products
