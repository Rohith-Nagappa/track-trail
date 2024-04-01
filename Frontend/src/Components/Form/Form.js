import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default function Form() {
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

  return (
    <Formstyled>
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
    </Formstyled>
  )
}

const Formstyled = styled.form`

`;