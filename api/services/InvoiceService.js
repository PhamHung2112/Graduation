const { Op } = require("sequelize");
const { Invoice, Type, User, InvoiceDetail, Voucher } = require(__basedir +
  "/models");
class InvoiceService {
  get = async (req, res) => {
    const { id } = req.params;
    try {
      const invoice = await Invoice.findOne({ where: { id: id } });
      res.status(200).send({ invoice: invoice });
    } catch (err) {
      if (err) res.status(403).send({ error: err });
    }
  };

  getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
      const invoices = await Invoice.findAndCountAll({
        attributes: ["id", "voucherId", "userId", "total", "payment"],
        where: {
          userId: id,
        },
        include: [
          {
            model: User,
          },
          {
            model: InvoiceDetail,
          },
          {
            model: Voucher,
          },
        ],
      });
      return res.status(200).send({ invoices: invoices });
    } catch (err) {
      // Send Error
      if (err) return res.status(403).send({ error: err });
    }
  };

  // Get All Invoices
  getAll = async (req, res) => {
    const { page = 0, limit = 10, search = "" } = req.query;
    try {
      const invoices = await Invoice.findAndCountAll({
        attributes: ["id", "voucherId", "userId", "total", "payment"],
        distinct: true,
        offset: +(limit * page),
        limit: +limit,
        include: [
          {
            model: User,
          },
          {
            model: InvoiceDetail,
          },
          {
            model: Voucher,
          },
        ],
      });
      return res.status(200).send({ invoices: invoices });
    } catch (err) {
      // Send Error
      if (err) res.sendStatus(403);
    }
  };

  // Create Invoice
  create = async (req, res) => {
    const body = req.body;

    // Create Invoice
    try {
      const invoice = await Invoice.create(body);
      return res.status(200).send({ invoice: invoice });
    } catch (err) {
      // Send Error
      if (err) return res.status(403).send({ error: err });
    }
  };

  // Update Invoice
  update = async (req, res) => {
    const body = req.body;
    try {
      const invoice = await Invoice.update(body, { where: { id: body.id } });

      return res.status(200).send({ invoice: invoice });
    } catch (err) {
      // Send Error
      return res.status(403).send({ error: err });
    }
  };

  // Delete
  delete = async (req, res) => {
    const body = req.params;
    try {
      const result = await Invoice.destroy({
        where: {
          id: body.id,
        },
      });
      return res.status(200).send({ result: result });
    } catch (err) {
      // Send Error
      return res.status(403).send({ error: err });
    }
  };
}

module.exports = new InvoiceService();
