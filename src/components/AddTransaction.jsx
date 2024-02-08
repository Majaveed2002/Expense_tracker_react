import React, { useState } from 'react'

export default function AddTransaction(props) {
  const [text,setText] = useState('')
  const [amount,setAmount] = useState('')
  const {addTransactionToList} = props 

  const handleSubmit = (event) => {
    event.preventDefault()
    addTransactionToList(text,amount)
    setText('')
    setAmount('')
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input onChange={handleTextChange} type="text" id='text' placeholder='Enter text...' value={text} />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">Amount <br />(negative - expense positive - income)</label>
          <input onChange={handleAmountChange} type="text" id='amount' placeholder='Enter amount...' value={amount} />
        </div>
        <button type='submit' className='btn'>Add transaction</button>
      </form>
    </div>
  )
}
