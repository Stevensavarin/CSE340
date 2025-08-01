// Needed Resources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
const invValidate = require("../utilities/inventory-validation")

/*router.get("/", (req, res) => {
  res.redirect("/inv/management/");
});*/ //test
router.get("/", utilities.handleErrors(invController.buildManagement));
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// Route to build vehicle detail view
router.get("/detail/:invId", invController.buildDetailView);

// Route to build management view(this is working too, im testing) http://localhost:5500/inv/management
//router.get("/management/", invController.buildManagement);

// Route to add-classification view
router.get("/add-classification/", invController.buildAddClassification);
// Route to build Add-Inventory view
router.get("/add-inventory", invController.buildAddInventory);
// Route to display inventory in management view
router.get("/getInventory/:classification_id", utilities.handleErrors(invController.getInventoryJSON))
// Route to build edit inventory view
router.get("/edit/:invId", utilities.handleErrors(invController.buildEditInventoryView));

// Route to process the edit inventory form submission
router.post(
  "/update/",
  invValidate.newInventoryRules(), // Add validation rules
  invValidate.checkUpdateData, // Add checkUpdateData middleware
  utilities.handleErrors(invController.updateInventory)
);

// Process the new classification data
router.post(
  "/add-classification",
  invController.addClassification
);
// Route to process Add-Inventory submission
router.post(
  "/add-inventory",
  invValidate.newInventoryRules(),
  invValidate.checkAddData,
  invController.addInventory
);

module.exports = router;


