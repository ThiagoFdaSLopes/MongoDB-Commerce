db.produtos.find(
  { ingredientes: { $all: ["picles"] } },
  { _id: false, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
);