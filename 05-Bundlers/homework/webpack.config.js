module.exports = {
    entry:"./browser/app.js",
    mode: "development",
    output: {
        path:__dirname + "/browser",
        filename: "bundler.js"
    }
}