import React from 'react'
import BudgetCard from './BudgetCard'
import { useBudgets } from '../contexts/BudgetsContexts'

const TotalBudgetCard = (props) => {

  const { expenses, budgets } = useBudgets()

  const amount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
 
  const max = budgets.reduce(
    (total, budgets) => total + budgets.max,
    0
  );

  if (amount === 0) return null

  return (
    <BudgetCard gray name='Total' amount={amount} max={max} hideButtons/>
  )
}
export default TotalBudgetCard