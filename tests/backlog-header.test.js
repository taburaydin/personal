const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const match = html.match(
  /data-status="backlog"[\s\S]*?<h2 class="column-header">([^<]+)<\/h2>/
);

assert.ok(match, "backlog column header is missing from the kanban board");
assert.equal(match[1], "Backlog-new");
