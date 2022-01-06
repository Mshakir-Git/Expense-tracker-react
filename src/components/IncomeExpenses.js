import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const calcIncome=(t)=>{
        let i=0
        t.forEach(tx => {
            if(tx.amount>0){i+=tx.amount}
        });
        return i;
    }
    const calcExpense=(t)=>{
        let e=0
        t.forEach(tx => {
            if(tx.amount<0){e+=tx.amount}
        });
        return e;
    }

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money-plus">{calcIncome(transactions)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money-minus">{calcExpense(transactions)}</p>
            </div>
        </div>
    )
}
