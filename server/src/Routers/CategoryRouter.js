const express =  require('express');
const router = express.Router();

const categoryModel = require('../Schemas/CategorySchema');

router.use(express.json());

// ADDING A NEW CATEGORY
router.post('/addcategory',(req, res) => {
    categoryModel.addCategory({success: function(data){res.status(200).send(data)},
        error:function(err){res.status(200).send(err)},
        categoryname:req.body.data.categoryname,
        items:req.body.data.items,
        id : req.body.data.id,
    });
});
// GETTING CATEGORY
router.post('/getcategory',(req, res) => {
    categoryModel.findOne({categoryname : req.body.data.categoryname})
        .then((category) => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});
// GETTING CATEGORIES
router.get('/getcategories' , function (req , res) {
    categoryModel.find({}).then(function (categories) {
        res.send(categories);
    });
});
// DELETING A CATEGORY
router.delete('/deletecategory',(req, res) => {
    categoryModel.findOneAndDelete({categoryname : req.body.categoryname})
        .then(() => res.json(`${req.body.categoryname} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err));
});
// EDITING CATEGORY NAME
router.post('/updatecategory',(req, res) => {
    categoryModel.findOneAndUpdate({categoryname : req.body.categoryname}, {categoryname: req.body.changecategoryname})
        .then(() => res.json(`Updated ${req.body.categoryname} to ${ req.body.changecategoryname}.`))
        .catch(err => res.status(400).json('Error: ' + err));
});
// ADDING AN ITEM
router.post('/additem',(req, res) => {
    categoryModel.findOneAndUpdate({categoryname : req.body.data.categoryname}, {$addToSet: { items : req.body.data.items}})
        .then(() => res.json(`Added ${req.body.data.items} to ${ req.body.data.categoryname}.`))
        .catch(err => res.status(400).json('Error: ' + err));
});
// GETTING AN ITEM
router.post('/getitem',(req, res) => {
    // console.log(req.body.items[0].item)
    categoryModel.findOne({categoryname : req.body.categoryname}, { items : { $elemMatch : { item : req.body.items[0].item}}})
        .then((item) => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});
// DELETING AN ITEM
router.delete('/deleteitem',(req, res) => {
    categoryModel.updateOne({categoryname : req.body.categoryname}, {$pull: { items : {item : req.body.items[0].item}}})
        .then(() => res.json(`Removed ${req.body.items[0].item} from ${ req.body.categoryname}.`))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;