// import React, { useState } from 'react'
// import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// import { useGlobalContext } from '../../context/globalContext';


// const Form = () => {
//     const {addIncome}= useGlobalContext();
//    const [inputState,setInputState]= useState({
//         title:'',
//         amount: '',
//         date: null,
//         category: '',
//         description: '',
//     })

//     const {title,amount,date,category,description} = inputState;

//     // const handleInput = name => e => {
//     //    setInputState({...inputState,[name]:e.target.value})
//     // }

//     const handleInput = (name, e) => {
//         setInputState({ ...inputState, [name]: e.target.value });
//     };
    

//     const handleDateChange = date => {
//         setInputState({ ...inputState, date }); // Update date in state
//     };

//     const handleSubmit = e => {
//         e.preventDefault()
//         addIncome(inputState)   //we are sending payload as inputstate to addIncome
//     }

//   return (
//     <Formstyled onSubmit={handleSubmit}>
//       <div className='input-control'>
//         <input 
//         type='text'
//         value={title}
//         name={'title'}
//         placeholder='Income Title'
//         onChange={handleInput('title')}
//         />
//       </div>
//       <div className='input-control'>
//         <input 
//         type='text'
//         value={amount}
//         name={'amount'}
//         placeholder='Income amount'
//         onChange={handleInput('amount')}
//         />
//       </div>
//       <div className='input-control'>
//       <DatePicker 
//       id='date'
//       placeholderText='Enter A Date'
//       selected={date}
//       dateFormat='dd/MM/yyyy' // Correct date format
//       onChange={handleDateChange} // Update date onChange
//       />
//       </div>
//       <div className='selects input-control'>
//         <select required value={category} name='category' id='category' onChange={handleInput('category')}> 
//              <option value="" >Select Option</option>
//              <option value="salary" >Salary</option>
//              <option value="freelancing" >Freelancing</option>
//              <option value="investments" >Investments</option>
//              <option value="stocks" >Stocks</option>
//              <option value="bitcoin" >Bitcoin</option>
//              <option value="bank" >Bank Transfer</option>
//              <option value="youtube" >Youtube</option>
//              <option value="other" >Other</option>
//         </select>
//       </div>
//       <div className='submit-btn'>
//         <button>Add Income</button>
//       </div>
//     </Formstyled>
//   )
// }

// const Formstyled = styled.form`

// `;

// export default Form;

import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';

const Form = () => {
    const { addIncome } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name, e) => {
        setInputState({ ...inputState, [name]: e.target.value });
    };

    const handleDateChange = date => {
        setInputState({ ...inputState, date });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addIncome(inputState);
    };

    return (
        <Formstyled onSubmit={handleSubmit}>
            <div className='input-control'>
                <input 
                    type='text'
                    value={title}
                    name='title'
                    placeholder='Income Title'
                    onChange={(e) => handleInput('title', e)} // Pass name and event object to handleInput
                />
            </div>
            <div className='input-control'>
                <input 
                    type='text'
                    value={amount}
                    name='amount'
                    placeholder='Income amount'
                    onChange={(e) => handleInput('amount', e)} // Pass name and event object to handleInput
                />
            </div>
            <div className='input-control'>
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat='dd/MM/yyyy'
                    onChange={handleDateChange}
                />
            </div>
            <div className='selects input-control'>
                <select required value={category} name='category' id='category' onChange={(e) => handleInput('category', e)}> 
                    <option value="" >Select Option</option>
                    <option value="salary" >Salary</option>
                    <option value="freelancing" >Freelancing</option>
                    <option value="investments" >Investments</option>
                    <option value="stocks" >Stocks</option>
                    <option value="bitcoin" >Bitcoin</option>
                    <option value="bank" >Bank Transfer</option>
                    <option value="youtube" >Youtube</option>
                    <option value="other" >Other</option>
                </select>
            </div>
            <div className='submit-btn'>
                <button>Add Income</button>
            </div>
        </Formstyled>
    );
}

const Formstyled = styled.form``;

export default Form;
