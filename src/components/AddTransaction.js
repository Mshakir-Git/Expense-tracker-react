import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useState } from 'react'

export const AddTransaction = () => {
    const {addTransaction,transactions} = useContext(GlobalContext)
    const [text,setText] = useState("")
    const [amount,setAmount] = useState(0)



    return (
        <>
            <h3>Add new trasaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text' />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(+e.target.value)} placeholder='Enter Amount' />
                </div>
                <button className="btn" onClick={(e)=>{e.preventDefault();
                    addTransaction({
                    id:Math.max(...transactions.map(t=>t.id))+1,
                    text:text,
                    amount:amount
                })}}>Add Transaction</button>

                </form>

            
        </>
    )
}
