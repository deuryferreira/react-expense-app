import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

function ExpenseChart() {
    const { transactions } = useGlobalState();

    const totalIncome = () => {
        let calc = transactions
            .filter((transaction) => transaction.amount > 0)
            .reduce((acc, transaction) => (acc += transaction.amount), 0);
        return calc === 0 ? 1 : Number(calc.toFixed(2));
    };

    const totalExpense = () => {
        let calc = transactions
            .filter((transaction) => transaction.amount < 0)
            .reduce((acc, transaction) => (acc += transaction.amount), 0);
        return calc === 0 || isNaN(calc) ? 1 : Number(calc.toFixed(2));
    };

    const income = totalIncome();
    const expense = totalExpense();

    const totalExpensesPorcentage = income === 0 ? 0 : Math.abs(Math.round((expense / income) * 100));
    const totalIncomesPertantage = 100 - Math.abs(totalExpensesPorcentage);

    console.log(`Calculo de gastos: ${expense}`);
    console.log(`Calculo de INGRESOS: ${income}`);

    console.log(`Total de gastos grafico: ${totalExpensesPorcentage}`);
    console.log(`Total de INGRESOS grafico: ${totalIncomesPertantage}`);

    return (
        <VictoryPie
            colorScale={['#e74c3c', '#2ecc71']}
            data={[
                { x: 'Expenses', y: totalExpensesPorcentage },
                { x: 'Incomes', y: totalIncomesPertantage },
            ]}
            animate={{ duration: 500 }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={<VictoryLabel angle={65} style={{ fill: 'white' }} />}
        />
    );
}

export default ExpenseChart;