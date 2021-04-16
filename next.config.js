const withImages = require("next-images")
module.exports = withImages()
config.module.rules.push({ test: /\.(png|jpeg)$/, loader: "url-loader?limit=8192" })
