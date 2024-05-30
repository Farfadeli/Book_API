const express = require("express")

const sap = express()

sap.use("/", (req, res) => {
    res.json({Nicolas : "Daunac"})
})

module.exports = sap