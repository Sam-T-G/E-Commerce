const router = require("express").Router();
const { Category, Product, ProductTag } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const allProducts = await Reader.findAll({
      include: ({ model: Category }, { model: ProductTag }),
    });
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: { model: Category, through },
    });

    if (!singleProduct) {
      res.status(404).json({ message: "No product found with this ID!" });
      return;
    }
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  Product.create
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
