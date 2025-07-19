const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

// Intentional error trigger
baseController.triggerError = function (req, res, next) {
  next({ status: 500, message: "Intentional server error! I did it on purpose." })
}

module.exports = baseController

