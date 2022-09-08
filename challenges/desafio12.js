db.produtos
.updateMany({
  nome: {
    $nin: ["McChicken"],
  },
},
{
  $addToSet: {
    ingredientes: {
      $each: ["ketchup"],
    },
  },
});

db.produtos.find(
  {},
  {
    _id: false,
    nome: true,
    ingredientes: true,
  },
);