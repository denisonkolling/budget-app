import { Modal, Button, Stack } from 'react-bootstrap';
import {
	UNCATEGORIZED_BUDGET_ID,
	useBudgets,
} from '../contexts/BudgetsContexts';

const ViewExpensesModal = ({ budgetId, handleClose }) => {
	const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
		useBudgets();

	const budget =
		UNCATEGORIZED_BUDGET_ID === budgetId
			? { name: 'Uncategorized' }
			: budgets.find((b) => b.id === budgetId);

	return (
		<Modal show={budgetId != null} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>
					<Stack direction="horizontal" gap="2">
						<div>Expenses - {budget?.name}</div>
						{budgetId !== UNCATEGORIZED_BUDGET_ID && (
							<Button variant="danger" onClick={() => deleteBudget(budgetId)}>
								Delete Budget
							</Button>
						)}
					</Stack>
				</Modal.Title>
			</Modal.Header>
		</Modal>
	);
};

export default ViewExpensesModal;
