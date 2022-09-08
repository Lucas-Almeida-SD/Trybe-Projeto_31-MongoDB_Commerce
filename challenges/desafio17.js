const totalProducts = db.produtos.count();

db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: totalProducts,
  },
);

db.resumoProdutos.find(
  {},
  {
    _id: false,
    franquia: true,
    totalProdutos: true,
  },
);