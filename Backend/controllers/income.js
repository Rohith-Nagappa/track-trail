const IncomeSchema = require('../models/IncomeModel')

exports.addIncome = async (req,res) => {
    const {title,amount,category,description,date} = req.body;
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
        res.status(500).json({message:"server error"})
    }
    console.log(income);
}

exports.getIncomes = async (req,res) => {
try {
    const incomes = await IncomeSchema.find().sort({createdAt:-1})
    res.status(200).json(incomes)
} catch (error) {
    res.status(500).json({message:"sever error"})
}
}

exports.deleteIncome = async (req,res) => {
    const {id} = req.params;
    //console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"income deleted"})
    })
    .catch((error)=>{
        res.status(500).json({message:"server error"})
    })
    }