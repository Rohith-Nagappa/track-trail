import React, { useState } from 'react'
import styled from 'styled-components'

export default function Form() {
   const [inputState,setInputState]= useState({
        title:'',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title,amount,date,category,description} = inputState;

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
    </Formstyled>
  )
}

const Formstyled = styled.form`

`;