const express = require("express");

const {
  createWidget,
  editWidget,
  getAllWidgets,
  singleWidget,
  previewSingleWidget,
} = require("../controllers/widgets");
const router = express.Router();

router.get("/widgets", getAllWidgets);
router.post("/create", createWidget);
router.get("/widgets/:id", singleWidget);
router.get("/preview/widgets/:id", previewSingleWidget);
router.put("/edit/:id", editWidget);

module.exports = router;
