try {
  module.exports = require("@napi-rs/canvas");
} catch (e) {
  module.exports = require(
    require("path").join(
      require("os").homedir(),
      ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@napi-rs/canvas",
    ),
  );
}
