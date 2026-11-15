const express = require("express");
const path = require("node:path");

const app = express();
const port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json());
app.get("/api/health", (request, response) => {
  response.json({ status: "ok" });
});
app.use(express.static(path.join(__dirname, "../frontend")));

const server = app.listen(port, "127.0.0.1", () => {
  console.log(`Field Shift is running at http://localhost:${port}`);
  console.log("Press Ctrl+C to stop.");
});
server.on("error", (error) => {
  console.error(`Could not start Field Shift: ${error.message}`);
  process.exitCode = 1;
});
