const IncomeSchema = require('../models/IncomeModel')
exports.addIncome = async (req,res) => {
    const {title,amount,category,description,date} =req.body;
    const income = IncomeSchema({title,amount,category,description,date});
    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message:"All Feilds are Required"})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message:"plz enter positive value"})
        }
        await income.save()
        res.status(200).json({message:"income added"})
    } catch (error) {
        console.log(error);
    }
    console.log(income);
}