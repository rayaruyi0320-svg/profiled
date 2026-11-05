// Emit plain local scripts so double-clicking index.html works without fetch or decompression.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const directory = path.resolve(__dirname, "../generated");
function writeProfiles(profiles) {
  const destination = path.join(directory, "profiles");
  fs.mkdirSync(destination, {recursive: true});
  for (const [id, samples] of Object.entries(profiles)) {
    fs.writeFileSync(path.join(destination, id + ".js"),
      "window.GALAXIES[" + JSON.stringify(id) + "]=" + JSON.stringify(samples) + ";\n");
  }
}
module.exports = writeProfiles;
if (require.main === module) {
  const context = {window: {}};
  vm.runInNewContext(fs.readFileSync(path.join(directory, "galaxies.js"), "utf8"), context);
  writeProfiles(context.window.GALAXIES);
}
