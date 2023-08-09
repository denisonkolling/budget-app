import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react';
import { useBudgets } from './contexts/BudgetsContexts';
import AddExpenseModal from './components/AddExpenseModal';

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
	const { budgets, getBudgetExpenses } = useBudgets();

	return (
		<>
			<Container className="my-4">
				<Stack direction="horizontal" gap="2" className="mb-4">
					<h1 className="me-auto">Budgets</h1>
					<Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
						Add Budget
					</Button>
					<Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
						Add Expense
					</Button>
				</Stack>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
						gap: '1rem',
						alignItems: 'flex-start',
					}}>
					{budgets.map((budget) => {
						const amount = getBudgetExpenses(budget.id).reduce(
							(total, expense) => total + expense.amount,
							0
						);

						return (
							<BudgetCard
								key={budget.id}
								name={budget.name}
								gray
								amount={amount}
								max={budget.max}></BudgetCard>
						);
					})}
				</div>
			</Container>
			<AddBudgetModal
				show={showAddBudgetModal}
				handleClose={() => setShowAddBudgetModal(false)}
			/>
			<AddExpenseModal
				show={showAddBudgetModal}
				handleClose={() => setShowAddBudgetModal(false)}
			/>
		</>
	);
}

export default App;
