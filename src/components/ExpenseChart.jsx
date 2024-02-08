import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

    const { transactions } = useGlobalState()


    const totalIncome = () => {

        let calc = transactions.filter(transaction => transaction.amount > 0)
            .reduce((acc, transaction) => (acc += transaction.amount), 0)

        let totalIncome = (calc === 0) ? 1 : calc

        return Number(totalIncome.toFixed(2))
    }


    const totalExpense = () => {

        let calc = transactions.filter(transaction => transaction.amount < 0)
            .reduce((acc, transaction) => (acc += transaction.amount), 0)

        let totalExpense = (calc === 0 || isNaN(calc)) ? 1 : calc

        return Number(totalExpense.toFixed(2))
    }






    console.log(`Calculo de gastos: ${totalExpense()}`)
    console.log(`Calculo de INGRESOS: ${totalIncome()}`)

    const totalExpensesPorcentage = Math.round(((totalExpense() / totalIncome()) * 100) * 100) / 100 * -1;
    const totalIncomesPertantage = 100 - totalExpensesPorcentage;


    console.log(`Total de gastos grafico: ${totalExpensesPorcentage}`)
    console.log(`Total de INGRESOS grafico: ${totalIncomesPertantage}`)

    return (
        <VictoryPie
            colorScale={['#e74c3c', '#2ecc71']}
            data={[

                { x: "Expenses", y: totalExpensesPorcentage },
                { x: "Incomes", y: totalIncomesPertantage },

            ]}
            animate={{ duration: 1000 }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={<VictoryLabel angle={65} style={{ fill: 'white' }} />}
        />
    )
}

export default ExpenseChart