const express = require("express")

const app = express()

app.use("/", (req, res) => {
    res.json({Nicolas : "Daunac"})
})

module.exports = app