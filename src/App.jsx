import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import Transactionform from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'

function App() {
    return (
        <GlobalProvider>
            <Header />
            <h1>App de gasros</h1>
            <Balance />
            <Transactionform />
            <TransactionList />
        </GlobalProvider>
    )
}

export default App