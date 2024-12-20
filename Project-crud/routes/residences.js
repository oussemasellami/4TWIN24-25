const express = require("express");
const router = express.Router();
const validate=require('../middll/validate')
const userController = require("../controller/residenceController");
/*router.get("/show", (req, res) => {
  res.send("salut 4twin9");
});

router.get("/add/:username/:email/:cin", (req, res) => {
  new User({
    username: req.params.username,
    email: req.params.email,
    cin: req.params.cin,
  }).save();
  res.send("good added");
});*/

router.post("/addresidence",validate.validateresidence, userController.add);
router.get("/showresidence", userController.showuser);
router.get("/showbyid/:id", userController.showByid);
router.get("/showResidencename/:username", userController.showuserByname);
router.get("/showResidencesname/:username", userController.showusersByname);
router.put("/updateresidence/:id", userController.update);
router.delete("/deleteresidence/:id", userController.deleteuser);

module.exports = router;