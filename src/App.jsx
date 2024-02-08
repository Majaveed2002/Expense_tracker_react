import { useState } from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'

function App() {
  const [transactions,setTransactions] = useState([])
  const [expense,setExpense] = useState(0)
  const [income,setIncome] = useState(0)
  const [balance,setBalance] = useState(0)

  // Add Transaction
  
 return (
  <div>
    <Header/>
    <div className='container'>
    <Balance balance={balance} />
    <IncomeExpense income={income} expense={expense} />
    <TransactionList transactions={transactions} />
    <AddTransaction transactions={transactions} />
    </div>
  </div>
 )
}

export default App
