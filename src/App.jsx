import { useEffect, useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

  useEffect(()=> {
      const storedTransactions = JSON.parse(localStorage.getItem('transactions'))
      if(storedTransactions){
          setTransactions(storedTransactions)
          console.log(storedTransactions)
       }
  },[])

  // Get Income, Expense and Balance
  useEffect(() => {
    const calculateIncome = transactions.filter((each) => each.amount > 0).reduce((acc,each)=>{
      return acc + each.amount
    },0)
    const calculateExpense = transactions.filter((each) => each.amount < 0).reduce((acc,each)=>{
      return acc + each.amount
    },0)
    setIncome(calculateIncome)
    setExpense(calculateExpense)
    setBalance(calculateIncome+calculateExpense)
    storeTransactionsToLocalStorage();
},[transactions])


  // Add Transaction
  const addTransactionToList = (text,amount) => {
    if(!text || !amount){
      toast.error("Both feilds must be filled")
      return;
    }
      setTransactions(prev => [...prev,{
        id:createUniqueId(),
        text,
        amount:parseFloat(amount),
      }])
      toast.success("Transaction added successfully")
  }

    const  removeTransaction = (itemId) => {
      const filteredTransactions = transactions.filter((each) => {
        return each.id !== itemId
      })
      setTransactions(filteredTransactions);
      //storeTransactionsToLocalStorage();
      toast.success("Transaction deleted successfully")
    }
    
  
  // store transactions in localStorage
  const storeTransactionsToLocalStorage = () => {
    localStorage.setItem('transactions',JSON.stringify(transactions))
  }

  // Create Unique Id
  const createUniqueId = () => {
    return Math.floor(Math.random() * 1000000)
  }


  
 return (
  <div>
    <Header/>
    <div className='container'>
    <Balance balance={balance} />
    <IncomeExpense income={income} expense={expense} />
    <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
    <AddTransaction transactions={transactions} addTransactionToList={addTransactionToList}/>
    <ToastContainer />
    </div>
  </div>
 )
}

export default App
