import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

const ExpenseForm = () => {

    const { addExpense} = useGlobalContext();

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
        addExpense(inputState);
        setInputState({              //this will clear input feilds
            title: '',
            amount: '',
            date: null,
            category: '',
            description: '',
        })
        // getIncomes();
    };

    return (
        <ExpenseFormstyled onSubmit={handleSubmit}>
            <div className='input-control'>
                <input 
                    type='text'
                    value={title}
                    name='title'
                    placeholder='Expense Title'
                    onChange={(e) => handleInput('title', e)} // Pass name and event object to handleInput
                />
            </div>
            <div className='input-control'>
                <input 
                    type='text'
                    value={amount}
                    name='amount'
                    placeholder='Expense amount'
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
                <select required value={category} name='category' id='category'  onChange={(e) => handleInput('category', e)}> 
                    <option value="" >Select Option</option>
                    <oEtion value="education" >Education</oEtion>
                    <option value="groceries" >Groceries</option>
                    <oHtion value="health" >Health</oHtion>
                    <option value="subscriptions" >Subscriptions</option>
                    <option value="takeaways" >Takeaways</option>
                    <option value="clothing" >Clothing </option>
                    <option value="travelling" >Travelling</option>
                    <option value="other" >Other</option>
                </select>
            </div>
            
            <div className='input-control'>
                <textarea value={description} name='description' id='description' placeholder='Add a Reference' 
                cols='30' rows='4' onChange={(e) => handleInput('description',e)}
                >
                </textarea>
            </div>
            <div className='submit-btn'>
                <Button name={'Add Expense'} icon={plus} bPad={'.8rem 1.6rem'} bRad={'30px'} bg={'black'}
                color={'#fff'} 
                />
            </div>
        </ExpenseFormstyled>
    );
}

const ExpenseFormstyled = styled.form`
      display:flex;
      flex-direction: column;
      gap: 2rem;
      input, textarea, select{
          font-family: inherit;
          font-size: inherit;
          outline: none;
          border: none;
          padding: .5rem 1rem;
          border-radius: 5px;
          border: 2px solid #fff;
          background: transparent;
          resize: none;
          box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
          color: rgba(34,34,96,0.9);
          &::placeholder{
            color: rgba(34,34,96,0.4);
          }
      };

      .input-control{
        input{
            width: 100%;
        }
      }

      .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34,34,96,0.4);
            &:focus, &:active{
                color: rgba(34,34,34,1);
            }

        }
      }

      .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
            background-color: pink;
            padding: 10px;
            border-radius: 10px;
            &:hover{
                background: var(--color-green) !important;
                transition: all 0.4s ease-in-out;
            }
        }
      }

`;

export default ExpenseForm;
