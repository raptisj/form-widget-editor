const fs = require("fs");
const { promisify } = require("util");
const pool = require("../db");
const { parseHtmlTemplate, getWidgetPath } = require("../utils");
const { v4 } = require("uuid");
const path = require("path");

const sleep = promisify(setTimeout);

const jobProcessor = async (job) => {
  await job.log(`Started processing job with id ${job.id}`);

  // this is to replicate a costly proccess
  await sleep(5000);

  const uuid = v4();
  const widgetPath = getWidgetPath(job.data?.settingsId);
  const fileExists = fs.existsSync(path.join(__dirname, "..", widgetPath));

  try {
    if (fileExists) {
      await pool.query(
        "UPDATE widget_settings SET settings = $2 WHERE id = $1 RETURNING *",
        [job.data?.settingsId, job.data.settings]
      );
    } else {
      await pool.query(
        "INSERT INTO widget_settings (id, settings) VALUES ($1, $2) RETURNING *",
        [uuid, job.data.settings]
      );
    }

    const html = parseHtmlTemplate(job.data.settings);
    fs.writeFileSync(
      `src/widgets/${fileExists ? job.data?.settingsId : uuid}.html`,
      html
    );
  } catch (e) {
    console.log(e, "e");
  }

  await job.updateProgress(100);
  return "DONE";
};

module.exports = jobProcessor;
