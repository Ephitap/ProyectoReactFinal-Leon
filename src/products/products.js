const products = [
    {
      id: 1,
      titulo: "Ciapas cain 1",
      precioP: "35000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/audiobooks/ForTheEmperor.jpg",
      category:"Audiobook",
      stock:50
    },
    {
      id:2,
      titulo: "Ciapas cain 2",
      precioP: "35000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/audiobooks/CavesOfIce.jpg",
      category:"Audiobook",
      stock:50
    },
    {
      id: 3,
      titulo: "Ciapas cain 3",
      precioP: "35000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/audiobooks/TheTraitorHand.jpg",
      category:"Audiobook",
      stock:50
    },
    {
      id: 4,
      titulo: "Ciapas cain 4",
      precioP: "35000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/audiobooks/DOG.jpg",
      category:"Audiobook",
      stock:50
    },
    {
      id: 5,
      titulo: "The Gnarled Bough",
      precioP: "20000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/books/gnarl.jpg",
      category:"books",
      stock:50
    },
    {
      id: 6,
      titulo: "Bird of Change",
      precioP: "20000",
      descripcion1: "When Commissar Ciaphas Cain and his regiment of Valhallan Guardsmen are deployed to the ice world of Simia Orichalcae, his expectation of an uneventful tour of duty is suddenly interrupted.",
      descripcion2: "While his Valhallan regiment are happy on an ice world, Cain's biggest concern is freezing to death... until orks start attacking, and then an ancient threat emerges from the depths. Stuck between two enemies, Cain needs to stop playing the hero and actually be one.",
      imagenP: "/img/books/bird_of_change.jpg",
      category:"books",
      stock:50
    },
    {
      id: 7,
      titulo: "King of pigs",
      precioP: "20000",
      descripcion1: "When his master brings the desiccated husk of a Spite Revenant to his manor in Shyish, a native of Ghyran begins to witness bizarre phenomena. Written by Jamie Mistry-Evans.",
      descripcion2: "The most unlikely collections can have terrifying effects.",
      imagenP: "/img/books/king_of_pigs.jpg",
      category:"books",
      stock:5
    },
    {
      id: 8,
      titulo: "Pain engine",
      precioP: "20000",
      descripcion1: "When his master brings the desiccated husk of a Spite Revenant to his manor in Shyish, a native of Ghyran begins to witness bizarre phenomena. Written by Jamie Mistry-Evans.",
      descripcion2: "The most unlikely collections can have terrifying effects.",
      imagenP: "/img/books/pain_engine.jpg",
      category:"books",
      stock:50
    },
    {
      id: 9,
      titulo: "The Somewhere Sister",
      precioP: "20000",
      descripcion1: "When his master brings the desiccated husk of a Spite Revenant to his manor in Shyish, a native of Ghyran begins to witness bizarre phenomena. Written by Jamie Mistry-Evans.",
      descripcion2: "The most unlikely collections can have terrifying effects.",
      imagenP: "/img/books/sister.jpg",
      category:"books",
      stock:50
    },
    {
      id: 10,
      titulo: "Fury of Magnus",
      precioP: "15000",
      descripcion1: "In the midst of the Siege of Terra, Magnus the Red embarks on a very personal mission – one that will bring him face to face with the Emperor once more!",
      descripcion2: "Discover the end of Magnus' journey from Prospero to treachery on Terra in a deeply moving and elegiac tale that sees him finally choose his side and take his place amongst his brothers.",
      imagenP: "/img/ebooks/magnus.jpg",
      category:"ebooks",
      stock:50
    },
    {
      id:11,
      titulo: "The Infinite And the Divine",
      precioP: "10000",
      descripcion1: "Trazyn the Infinite and Orikan the Diviner are opposites. Each is obsessed with their own speciality, and their rivalry spans millennia. Yet together, they may hold the secret to saving the necron race…",
      descripcion2: "Explore a story told across the millennia that delves deep into a pair of fascinating necron characters, their relationship and their plans for the galaxy.",
      imagenP: "/img/ebooks/The-Infinite-and-The-Divine-Cover.jpg",
      category:"ebooks",
      stock:50
    },
    {
      id: 12,
      titulo: "Mortis",
      precioP: "16000",
      descripcion1: "After a series of victories, the Imperial forces are on the back foot once more. The power of Chaos is rising, the Traitors gain ground, and all hope seems lost. Can Terra endure?",
      descripcion2: "Delve back into the biggest war in Imperial history, which is getting even bigger as Traitor Titans land and the influence of the warp grows, plaguing the defenders in all sorts of vile ways.",
      imagenP: "/img/ebooks/mortis.jpg",
      category:"ebooks",
      stock:50
    },
    {
      id:13,
      titulo: "Echoes of Eternity",
      precioP: "17000",
      descripcion1: "With the walls of the Imperial Palace in ruins and the end in sight, Sanguinius prepares one final stand. The loyalists are desperate, and the Warmaster’s hordes are certain of their coming victory.",
      descripcion2: "The myriad battles of the Siege of Terra series are pulling into a taut weave of tension, horror, and certain doom. Just when you thought it was bad, it gets worse",
      imagenP: "/img/ebooks/sangi.jpg",
      category:"ebooks",
      stock:50
    },
    {
      id:14,
      titulo: "Warhawk",
      precioP: "18000",
      descripcion1: "With the Lion's Gate space port taken by the enemy, Jaghatai Khan of the White Scars prepares a brazen gambit, but one of his former brothers rises to take up arms against him.",
      descripcion2: "The heroic and dynamic White Scars hurtle headlong into combat with the unyielding Death Guard. As brother battles brother, the fate of Terra itself hangs in the balance.",
      imagenP: "/img/ebooks/warhawk.jpg",
      category:"ebooks",
      stock:50
    },
  ];
  
  export default products;