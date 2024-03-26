const ExpenseSchema = require('../models/ExpenseModel')

exports.addExpense = async (req,res) => {
    const {title,amount,category,description,date} = req.body;
    const expense = ExpenseSchema({title,amount,category,description,date});
    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message:"All Feilds are Required"})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message:"plz enter positive value"})
        }
        await expense.save()
        res.status(200).json({message:"expense added"})
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
    console.log(expense);
}

exports.getExpenses = async (req,res) => {
try {
    const expenses = await ExpenseSchema.find().sort({createdAt:-1})
    res.status(200).json(expenses)
} catch (error) {
    res.status(500).json({message:"sever error"})
}
}

exports.deleteExpense = async (req,res) => {
    const {id} = req.params;
    //console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense)=>{
        res.status(200).json({message:"expense deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message:"server error"})
    })
    }