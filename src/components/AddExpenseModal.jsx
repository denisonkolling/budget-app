import { Modal, Form, Button, FormSelect } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContexts'

const AddExpenseModal = ({ show, handleClose, defaultBudgetId}) => {

  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { budgets, addExpense } = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()

    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
    })   

    handleClose()

  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Description</Form.Label>
              <Form.Control ref={descriptionRef} type='text' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='name'>
              <Form.Label>Amount</Form.Label>
              <Form.Control ref={amountRef} type='number' required min={0} step={0.01} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='budgetId'>
              <Form.Label>Budget</Form.Label>
              <FormSelect
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}
              >
                <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                {budgets.map(budget => (
                  <option key={budget.id} value={budget.id}>{budget.name}</option>
                ))}
              </FormSelect>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant='primary' type='submit'>Add</Button>
            </div>
          </Modal.Body>
      </Form>
    </Modal>
  )
}

export default AddExpenseModal