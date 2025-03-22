const mongoose=require('mongoose');

const budgetSchema=new mongoose.Schema({
    amount:{type:Number,required:true},
    date:{type:Date,default:Date.now},
    till:{type:Date}
});

module.exports=mongoose.model('budget',budgetSchema);