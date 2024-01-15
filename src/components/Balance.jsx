import { useGlobalState } from '../context/GlobalState'
function Balance() {

    const data = useGlobalState()
    return (
        <div>
            <h1>Balance</h1>
            {JSON.stringify(data)}
        </div>
    )
}

export default Balance