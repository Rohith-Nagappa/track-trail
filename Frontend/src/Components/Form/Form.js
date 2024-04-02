import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';


const Form = () => {
    const {addIncome}= useGlobalContext();
   const [inputState,setInputState]= useState({
        title:'',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title,amount,date,category,description} = inputState;

    const handleInput = name => e => {
       setInputState({...inputState,[name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)   //we are sending payload as inputstate to addIncome
    }

  return (
    <Formstyled onSubmit={handleSubmit}>
      <div className='input-control'>
        <input 
        type='text'
        value={title}
        name={'title'}
        placeholder='Income Title'
        onChange={handleInput('title')}
        />
      </div>
      <div className='input-control'>
        <input 
        type='text'
        value={amount}
        name={'amount'}
        placeholder='Income amount'
        onChange={handleInput('amount')}
        />
      </div>
      <div className='input-control'>
      <DatePicker 
      id='date'
      placeholderText='Enter A Date'
      selected={date}
      dateFormat='dd/mm/yyyy'
      onChange={()=>{
        setInputState({...inputState,date:date})
      }}
      />
      </div>
      <div className='selects input-control'>
        <select required value={category} name='category' id='category' onChange={handleInput('category')}> 
             <option value="" disabled>Select Option</option>
             <option value="salary" disabled>Salary</option>
             <option value="freelancing" disabled>Freelancing</option>
             <option value="investments" disabled>Investments</option>
             <option value="stocks" disabled>Stocks</option>
             <option value="bitcoin" disabled>Bitcoin</option>
             <option value="bank" disabled>Bank Transfer</option>
             <option value="youtube" disabled>Youtube</option>
             <option value="other" disabled>Other</option>
        </select>
      </div>
      <div className='submit-btn'>
        <button>Add Income</button>
      </div>
    </Formstyled>
  )
}

const Formstyled = styled.form`

`;

export default Form;