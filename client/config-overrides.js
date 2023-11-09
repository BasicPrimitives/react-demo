module.exports = function override(config, env) {
      // Add a new rule for .mjs files
  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

    return config;
  };