import React from 'react'

export default function Balance(props) {
  const {balance} = props
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance'>${balance}</h1>
    </div>
  )
}
