import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

    const { transactions } = useGlobalState()


    return (
        <VictoryPie
            colorScale={['#e74c3c', '#2ecc71']}
            data={[
                { x: "Incomes", y: 35 },
                { x: "Expenses", y: 40 }
            ]}
            animate={{ duration: 200 }}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel angle={65} style={{ fill: 'white' }} />}
        />
    )
}

export default ExpenseChart