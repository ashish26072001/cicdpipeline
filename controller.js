import model from "./model.js";

const controller = (req, res) => {
  res.json(model());
};

export default controller;