const { Op } = require("sequelize");
const {
  Product,
  ProductSize,
  InvoiceDetail,
  Sizes,
  Comment,
  User,
} = require(__basedir + "/models");
class ProductService {
  get = async (req, res) => {
    const { id } = req.params;
    // const { sizeId = null } = req.query;
    // let conditionInclude = [
    //   {
    //     model: ProductSize,
    //     include: [
    //       {
    //         model: Sizes,
    //       },
    //     ],
    //     // where:conditionInclude
    //   },
    // ];
    // if (sizeId != null) {
    //   const w = {
    //     where: {
    //       sizeId: {
    //         [Op.in]: sizeId.split(","),
    //       },
    //     },
    //   };
    //   conditionInclude = [
    //     {
    //       model: ProductSize,
    //       where: {
    //         sizeId: {
    //           [Op.in]: sizeId.split(","),
    //         },
    //       },
    //     },
    //   ];
    // }
    try {
      const product = await Product.findOne({
        where: { id: id },
        // include: conditionInclude,
      });
      res.status(200).send({ product: product });
    } catch (err) {
      if (err) res.status(403).send({ error: err });
    }
  };

  // Get All comment of product
  getComments = async (req, res) => {
    try {
      const comments = await Product.findOne({
        where: { id: req.params.productId },
        distinct: true,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: Comment,
            include: [
              {
                model: User,
              },
            ],
          },
        ],
      });
      return res.status(200).send({ comments: comments });
    } catch (err) {
      // Send Error
      if (err) res.sendStatus(403);
    }
  };

  // Get All Products
  getAll = async (req, res) => {
    const {
      page = 0,
      limit = 10,
      search = "",
      typeId = null,
      priceMin = 0,
      priceMax = 99999999999999,
      sizeId = null,
      sale = -1,
    } = req.query;
    let condition = {
      productName: { [Op.like]: `%${search}%` },
      productPrice: {
        [Op.and]: {
          [Op.gte]: priceMin,
          [Op.lte]: priceMax,
        },
      },
      productPrice: {
        [Op.and]: {
          [Op.gte]: priceMin,
          [Op.lte]: priceMax,
        },
      },
      discount: {
        [Op.gte]: sale,
      },
    };

    let conditionInclude = [
      {
        model: ProductSize,
        include: [
          {
            model: Sizes,
          },
        ],
        // where:conditionInclude
      },
    ];
    if (typeId != null) {
      condition = {
        ...condition,
        typeId: {
          [Op.in]: typeId.split(","),
        },
      };
    }
    if (sizeId != null) {
      const w = {
        where: {
          sizeId: {
            [Op.in]: sizeId.split(","),
          },
        },
      };
      conditionInclude = [
        {
          model: ProductSize,
          where: {
            sizeId: {
              [Op.in]: sizeId.split(","),
            },
          },
        },
      ];
    }
    try {
      const products = await Product.findAndCountAll({
        distinct: true,
        order: [["createdAt", "DESC"]],
        where: condition,
        include: conditionInclude,
        offset: +(limit * page),
        limit: +limit,
      });
      return res.status(200).send({ products: products });
    } catch (err) {
      // Send Error
      if (err) res.sendStatus(403);
    }
  };

  // Create Product
  create = async (req, res) => {
    const body = req.body;

    // Create Product
    try {
      const product = await Product.create(body);
      return res.status(200).send({ product: product });
    } catch (err) {
      // Send Error
      if (err) return res.status(403).send({ error: err });
    }
  };

  // Update Product
  update = async (req, res) => {
    const body = req.body;
    try {
      const product = await Product.update(body, { where: { id: body.id } });

      return res.status(200).send({ product: product });
    } catch (err) {
      // Send Error
      return res.status(403).send({ error: err });
    }
  };

  // Delete Product
  delete = async (req, res) => {
    const body = req.params;
    try {
      const product = await Product.destroy({
        where: {
          id: body.id,
        },
      });
      return res.status(200).send({ product: product });
    } catch (err) {
      // Send Error
      return res.status(403).send({ error: err });
    }
  };
}

module.exports = new ProductService();
