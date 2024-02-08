import React from 'react'

export default function TransactionList(props) {
  const {transactions} = props
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list' >
        {transactions.map((eachTransaction)=>{
          return(
            <li key={eachTransaction.id} className={eachTransaction.amount < 0 ? 'minus':'plus'}>{eachTransaction.text}
            <span>${eachTransaction.amount}</span>
            <button className='delete-btn'>X</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
