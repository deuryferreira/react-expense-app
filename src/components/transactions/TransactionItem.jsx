import { useGlobalState } from '../../context/GlobalState'


export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useGlobalState()
    return (
        <li className='bg-zinc-600 text-white py-1 px-3 rounded-lg mb-2 w-full flex items-center justify-between'>
            <p className='text-sm'>{transaction.description}</p>
            <div><span>${transaction.amount}</span>
                <button className='bg-red-800 hover:bg-red-500 text-white rounded-lg py-1 align-middle px-3 ml-3 mr-0' onClick={() => { deleteTransaction(transaction.id) }}>x</button></div>
        </li>
    )
}

export default TransactionItem