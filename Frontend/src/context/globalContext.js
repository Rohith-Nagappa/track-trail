import React, { createContext, useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

 const GlobalContext = createContext(); //GLOBAL CONTEXT TO ACCESS DATA

 export const GlobalProvider = ({children}) => {

    const [incomes,setIncomes]= useState([]);
    const [expenses,setExpenses]= useState([]);
    const [error,setError]= useState(null);
    
    // CALCULATE INCOMES
    const addIncome = async (income) => {
      const response =  await axios.post(`${BASE_URL}add-income`,income)
      .catch((err) =>{
        setError(err.response.data.message)
      })
      getIncomes()
    };

    const getIncomes = async () => {
      const response =  await axios.get(`${BASE_URL}get-incomes`)
      setIncomes(response.data)
      console.log(response.data)
      // .catch((err) =>{
      //   setError(err.response.data.message)
      // })
    };

    const deleteIncome = async (id) => {
       const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
       getIncomes()
    }

    const totalIncome = () => {
      let totalIncome = 0;
      incomes.forEach((income) => {
        totalIncome = totalIncome + income.amount
      })
      return totalIncome;
    }   

     // CALCULATE EXPENSE
     const addExpense = async (income) => {
      const response =  await axios.post(`${BASE_URL}add-expense`,income)
      .catch((err) =>{
        setError(err.response.data.message)
      })
      getExpenses()
    };

    const getExpenses = async () => {
      const response =  await axios.get(`${BASE_URL}get-expenses`)
      setExpenses(response.data)
      console.log(response.data)
      // .catch((err) =>{
      //   setError(err.response.data.message)
      // })
    };

    const deleteExpense = async (id) => {
       const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
       getExpenses()
    }

    const totalExpenses = () => {
      let totalIncome = 0;
      expenses.forEach((income) => {
        totalIncome = totalIncome + income.amount
      })
      return totalIncome;
    } 

    const totalBalance = () =>{
      return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
      const history = [...incomes,...expenses];
      history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
      })
      return history;
    }
   
    return (
        <GlobalContext.Provider value={{
          addIncome,
          getIncomes,
          incomes,
          deleteIncome,
          totalIncome,
          addExpense,
          getExpenses,
          expenses,
          deleteExpense,
          totalExpenses,
          totalBalance,
          transactionHistory
          }}>
            {children}
        </GlobalContext.Provider>
    )
 };

 export  const useGlobalContext = () =>{
  return useContext(GlobalContext)
 };