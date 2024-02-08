import React from 'react'


export default function TransactionList(props) {
  const {transactions,removeTransaction} = props
  const handleClick = (id) => {
    removeTransaction(id)
  }
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list' >
        {transactions.map((eachTransaction)=>{
          return(
            <li key={eachTransaction.id} className={eachTransaction.amount < 0 ? 'minus':'plus'}>{eachTransaction.text}
            <span>${eachTransaction.amount}</span>
            <button onClick={() => handleClick(eachTransaction.id)} className='delete-btn'>X</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
