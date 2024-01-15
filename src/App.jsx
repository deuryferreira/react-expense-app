import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'


function App() {
    return (
        <GlobalProvider>
            <Header />
            <h1>App de gasros</h1>
            <Balance />
            <TransactionForm />
        </GlobalProvider>
    )
}

export default App