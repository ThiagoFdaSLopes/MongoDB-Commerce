db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
  } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: { vendasPorDia: { $each: [60], $position: 3, $slice: 7 } } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino"] } },
  { $push: { vendasPorDia: { $each: [120], $position: 6, $slice: 7 } } },
);

db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });