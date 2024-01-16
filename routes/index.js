var express = require('express');
var router = express.Router();
const usermodel=require("./users");
/* GET home page. */
router.get('/', function(req, res, next) {
 res.render("index");
});
router.get('/create',  async function(req, res) {
 const createuser= await  usermodel.create(
        {
            username:"tanuj",
            age:21,
            name:"tanuj pratap"
        }
    );
    res.send(createuser);
   });
   router.get('/allusers',  async function(req, res) {
   let allusers=await usermodel.findOne({username:"tanuj"});
   res.send(allusers);
   } ) ;

   router.get('/delete',  async function(req, res) {
    let deleteduser=await usermodel.findOneAndDelete({username:"tanuj"});
    res.send(deleteduser);
   });

module.exports = router;
