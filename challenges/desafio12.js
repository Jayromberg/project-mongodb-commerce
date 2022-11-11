db.produtos.updateMany(
  {
    $and: [ 
      { nome: { $ne: "McChicken" } },
      { ingredientes: { $not: { $elemMatch: { $eq: "ketchup" } } } },
    ],
  },
  {
    $push: { ingredientes: "ketchup" },
  },
);

db.produtos.find(
  {},
  { 
    nome: 1, ingredientes: 1, _id: 0,
  },
);