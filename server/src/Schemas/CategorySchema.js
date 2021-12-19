const mongoose = require('mongoose');
let categorySchema = new mongoose.Schema({
    categoryname: {
        type: String,
        unique: true
    },
    items:Array,
    id : Number,
});

let categoryModel = mongoose.model('category', categorySchema);
const category = mongoose.model('category', categorySchema);

//Adding new category
category.addCategory = function(handlers) {
    var category = new categoryModel();
    category.categoryname = handlers.categoryname;
    category.items = handlers.items;
    category.id = handlers.id;
    return category.save(function(err, data){
        if(!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    })
};
module.exports = category;