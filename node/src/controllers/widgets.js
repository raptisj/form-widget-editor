const addJobToQueue = require("../bullmq/queue");
const pool = require("../db");
const { getWidgetPath } = require("../utils");
const fs = require("fs");
const path = require("path");

const createWidget = async (req, res) => {
  const data = { jobName: "html", settings: { ...req.body } };
  const job = await addJobToQueue(data);

  return res.status(201).json({ jobId: job.id });
};

const editWidget = async (req, res) => {
  const data = {
    jobName: "html",
    settings: { ...req.body },
    settingsId: req.params.id,
  };
  const job = await addJobToQueue(data);

  return res.status(201).json({ jobId: job.id });
};

const getAllWidgets = async (req, res) => {
  const results = await pool.query("SELECT * FROM widget_settings");

  res.status(200).json({ settings: results.rows });
};

const singleWidget = async (req, res) => {
  const results = await pool.query(
    "SELECT * FROM widget_settings WHERE id = $1",
    [req.params.id]
  );

  res.status(200).json({ settings: results.rows[0] });
};

const previewSingleWidget = async (req, res) => {
  const widgetPath = getWidgetPath(req.params.id);
  const widgetErrorPath = `../widgets/error.html`;

  const fileExists = fs.existsSync(path.join(__dirname, "..", widgetPath));
  res.sendFile(
    path.join(__dirname, "..", fileExists ? widgetPath : widgetErrorPath)
  );
};

module.exports = {
  createWidget,
  editWidget,
  getAllWidgets,
  singleWidget,
  previewSingleWidget,
};
