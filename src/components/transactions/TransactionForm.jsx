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
            <input className="bg-zinc-600 text-white rounded-lg px-3 py-2 block mb-2 w-full" type="text" placeholder="Enter a Description" onChange={(e) => setDescription(e.target.value)} value={description} />
            <input className="bg-zinc-600 text-white rounded-lg px-3 py-2 block mb-2 w-full" type="number" placeholder="0.0" onChange={(e) => setAmount(e.target.value)} value={amount} />
            <button className="bg-indigo-700 rounded-lg text-wrap px-3 py-2 block mb-2 w-full hover:bg-indigo-600">Add Transaction</button>
        </form>
    )
}

export default TransactionForm
