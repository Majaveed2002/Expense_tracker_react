import React, { useState } from 'react'

export default function AddTransaction(props) {
  const [text,setText] = useState("")
  const [amount,setAmount] = useState(0)
  const {addExpenseIncomeToList} = props 

  const handleSubmit = (event) => {
    event.preventDefault()
    addExpenseIncomeToList(text,amount),
    setAmount(0)
    setText('')
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input onChange={(e) => setText(e.target.value)} type="text" id='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">Amount <br />(negative - expense positive - income)</label>
          <input onChange={(e) => setAmount(e.target.value)} type="text" id='amount' placeholder='Enter amount...' />
        </div>
        <button type='submit' className='btn'>Add transaction</button>
      </form>
    </div>
  )
}
