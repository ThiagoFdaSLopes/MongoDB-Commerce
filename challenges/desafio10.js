db.produtos.find(
  { valoresNutricionais: 
    { $elemMatch: { tipo: "proteínas", percentual: { $gte: 30, $lte: 40 } } } }, 
    { _id: false, nome: true },
);