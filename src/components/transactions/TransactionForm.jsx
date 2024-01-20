import { useState } from "react"
import { useGlobalState } from '../../context/GlobalState.jsx'



function TransactionForm() {

    const { addTransaction } = useGlobalState()
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)



    const handleSubmit = (e) => {
        e.preventDefault();

        addTransaction({
            "id": window.crypto.randomUUID(),
            description,
            amount: +amount,
        })


        setAmount("0.0")
        setDescription("")
    }



    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a Description" onChange={(e) => setDescription(e.target.value)} value={description} />
            <input type="number" placeholder="0.0" onChange={(e) => setAmount(e.target.value)} value={amount} />
            <button>Add Transaction</button>
        </form>
    )
}

export default TransactionForm
